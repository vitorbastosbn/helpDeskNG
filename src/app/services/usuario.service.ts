import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { HELP_DESK_API } from './helpdesk.api';
import { Usuario } from '../model/usuario.model';

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) { }

  login(usuario: Usuario) {
    return this.http.post(`${HELP_DESK_API}/api/auth`, usuario);
  }

  criarOuAtualizar(usuario: Usuario) {
    if (usuario.id !== null && usuario.id !== '') {
      return this.http.put(`${HELP_DESK_API}/api/usuario`, usuario);
    } else {
      usuario.id = null;
      return this.http.post(`${HELP_DESK_API}/api/usuario`, usuario);
    }
  }

  pesquisarTodos(pagina: number, registrosPorPagina: number) {
    return this.http.get(`${HELP_DESK_API}/api/usuario/${pagina}/${registrosPorPagina}`);
  }

  pesquisarPorId(id: string) {
    return this.http.get(`${HELP_DESK_API}/api/usuario/${id}`);
  }

  apagar(id: string) {
    return this.http.delete(`${HELP_DESK_API}/api/usuario/${id}`);
  }

}
