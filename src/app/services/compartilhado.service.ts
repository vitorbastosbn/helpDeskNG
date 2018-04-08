import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../model/usuario.model';

@Injectable()
export class CompartilhadoService {

  public static instance: CompartilhadoService = null;
  usuario: Usuario;
  token: string;
  showTemplate = new EventEmitter<boolean>();

  constructor() {
    return CompartilhadoService.instance = CompartilhadoService.instance || this;
  }

  public static getInstance() {
    if (this.instance == null) {
      this.instance = new CompartilhadoService();
    }

    return this.instance;
  }

  isUsuarioLogado(): boolean {
    if (this.usuario == null) {
      return false;
    }

    return this.usuario.email !== '';
  }

}
