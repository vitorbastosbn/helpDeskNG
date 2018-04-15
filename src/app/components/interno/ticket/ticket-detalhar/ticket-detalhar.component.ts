import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CompartilhadoService } from './../../../../services/compartilhado.service';
import { AbstractComponent } from './../../../comum/abstract/abstract.component';
import { TicketService } from './../../../../services/ticket.service';
import { ResponseApi } from './../../../../model/response-api';
import { Ticket } from './../../../../model/ticket.model';


@Component({
  selector: 'app-ticket-detalhar',
  templateUrl: './ticket-detalhar.component.html'
})
export class TicketDetalharComponent extends AbstractComponent implements OnInit {

  ticket = new Ticket('', 0, '', '', '', '', null, null, '', '', null);

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
      this.ticket.data = new Date(this.ticket.data).toISOString();
    }, erro => {
      this.exibirMensagemDeAlerta(AbstractComponent.NENHUM_REGISTRO_ENCONTRADO);
    });
  }

  alterarStatus(status: string): void {
    this.ticketService.alterarStatus(status, this.ticket).subscribe((responseApi: ResponseApi) => {
      this.ticket = responseApi.data;
      this.ticket.data = new Date(this.ticket.data).toISOString();
      this.exibirMensagemDeSucesso(AbstractComponent.OPERACAO_REALIZADA_COM_SUCESSO);
    });
  }

}
