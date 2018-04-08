import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HELP_DESK_API } from './helpdesk.api';
import { Ticket } from '../model/ticket.model';

@Injectable()
export class TicketService {

  constructor(private http: HttpClient) { }

  criarOuAtualizar(ticket: Ticket) {
    if (ticket.id != null && ticket.id !== '') {
      return this.http.put(`${HELP_DESK_API}/api/ticket`, ticket);
    } else {
      ticket.id = null;
      return this.http.post(`${HELP_DESK_API}/api/ticket`, ticket);
    }
  }

  pesquisarTodos(pagina: number, registrosPorPagina: number) {
    return this.http.get(`${HELP_DESK_API}/api/ticket/${pagina}/${registrosPorPagina}`);
  }

  pesquisarPorId(id: string) {
    return this.http.get(`${HELP_DESK_API}/api/ticket/${id}`);
  }

  apagar(id: string) {
    return this.http.delete(`${HELP_DESK_API}/api/ticket/${id}`);
  }

  pesquisarPorParametros(pagina: number, registrosPorPagina: number, isUsuarioDesignado: boolean, ticket: Ticket) {
    ticket.protocolo = ticket.protocolo == null ? 0 : ticket.protocolo;
    ticket.titulo = ticket.titulo === '' ? 'vazio' : ticket.titulo;
    ticket.status = ticket.status === '' ? 'vazio' : ticket.status;
    ticket.prioridade = ticket.prioridade === '' ? 'vazio' : ticket.prioridade;

    return this.http.get(`${HELP_DESK_API}/api/ticket/
        ${pagina}/${registrosPorPagina}/${ticket.protocolo}/${ticket.titulo}/${ticket.status}/${ticket.prioridade}/${isUsuarioDesignado}`);
  }

  alterarStatus(status: string, ticket: Ticket) {
    return this.http.put(`${HELP_DESK_API}/api/ticket/${ticket.id}/${status}`, ticket);
  }

  sumario() {
    return this.http.get(`${HELP_DESK_API}/api/ticket/sumario`);
  }

}
