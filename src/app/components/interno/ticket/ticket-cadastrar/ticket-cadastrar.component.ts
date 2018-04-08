import { ResponseApi } from './../../../../model/response-api';
import { TicketService } from './../../../../services/ticket.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ticket } from './../../../../model/ticket.model';
import { CompartilhadoService } from '../../../../services/compartilhado.service';
import { ActivatedRoute } from '@angular/router';
import { AbstractComponent } from '../../../comum/abstract/abstract.component';

@Component({
  selector: 'app-ticket-cadastrar',
  templateUrl: './ticket-cadastrar.component.html'
})
export class TicketCadastrarComponent extends AbstractComponent implements OnInit {

  @ViewChild('form')
  form: NgForm;

  ticket = new Ticket('', 0, '', '', '', '', null, null, '', null);

  constructor(
    private compartilhado: CompartilhadoService,
    private ticketService: TicketService,
    private route: ActivatedRoute
  ) {
    super();
    this.compartilhado = CompartilhadoService.getInstance();
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
      super.exibirMensagemDeAlerta(AbstractComponent.NENHUM_REGISTRO_ENCONTRADO);
    });
  }

  cadastrar() {
    this.ticketService.criarOuAtualizar(this.ticket).subscribe((responseApi: ResponseApi) => {
      this.ticket = new Ticket('', 0, '', '', '', '', null, null, '', null);
      const ticketRet: Ticket = responseApi.data;
      this.form.resetForm();
      super.exibirMensagemDeSucesso(AbstractComponent.OPERACAO_REALIZADA_COM_SUCESSO);
    }, error => {
      if (error['error']['errors'] === undefined) {
        super.exibirMensagemDeErro(error['error']['message']);
      } else {
        super.exibirMensagemDeErro(error['error']['errors'][0]);
      }
    });
  }

  arquivo(event): void {
    if (event.target.files[0].size > 2000000) {
      super.exibirMensagemDeAlerta('Tamanho do arquivo não pode ser superior a 2Mb.');
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
