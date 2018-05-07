import { StatusEnum } from './../../../../model/enums/statusEnum';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { CompartilhadoService } from '../../../../services/compartilhado.service';
import { AbstractComponent } from '../../../comum/abstract/abstract.component';
import { TicketService } from './../../../../services/ticket.service';
import { ResponseApi } from './../../../../model/comum/response-api';
import { Ticket } from './../../../../model/entity/ticket.model';

@Component({
  selector: 'app-ticket-cadastrar',
  templateUrl: './ticket-cadastrar.component.html'
})
export class TicketCadastrarComponent extends AbstractComponent implements OnInit {

  @ViewChild('form')
  form: NgForm;

  ticket = new Ticket();

  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute
  ) {
    super(CompartilhadoService.getInstance());
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id !== undefined) {
      this.pesquisarPorId(id);
    }
  }

  pesquisarPorId(id: string) {
    this.ticketService.pesquisarPorId(id).subscribe((responseApi: ResponseApi) => {
      this.ticket = responseApi.data;
    }, erro => {
      this.exibirMensagemDeAlerta(AbstractComponent.NENHUM_REGISTRO_ENCONTRADO);
    });
  }

  cadastrar() {
    this.ticket.status = StatusEnum.NOVO;
    this.ticketService.criarOuAtualizar(this.ticket).subscribe((responseApi: ResponseApi) => {
      this.ticket = new Ticket();
      const ticketRet: Ticket = responseApi.data;
      this.form.resetForm();
      this.exibirMensagemDeSucesso(AbstractComponent.OPERACAO_REALIZADA_COM_SUCESSO);
    }, error => {
      if (error['error']['errors'] === undefined) {
        this.exibirMensagemDeErro(error['error']['message']);
      } else {
        this.exibirMensagemDeErro(error['error']['errors'][0]);
      }
    });
  }

  arquivo(event): void {
    if (event.target.files[0].size > 2000000) {
      this.exibirMensagemDeAlerta('Tamanho do arquivo não pode ser superior a 2Mb.');
    } else {
      this.ticket.imagem = '';
      const reader = new FileReader();
      reader.onloadend = (e: Event) => {
        this.ticket.imagem = reader.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
