import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../model/usuario.model';

@Injectable()
export class CompartilhadoService {

  public static instance: CompartilhadoService = null;
  private _usuario: Usuario;
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
    if (!localStorage.getItem('token') && !localStorage.getItem('usuario')) {
      return false;
    }

    return true;
  }

  /**
   * Getter usuario
   * @return {Usuario}
   */
  public get usuario(): Usuario {
    if (this._usuario == null) {
      this._usuario = new Usuario('', '', '', '');
    }
    this._usuario.email = localStorage.getItem('usuario') !== null ? localStorage.getItem('usuario').toString() : '';
    this._usuario.perfil = localStorage.getItem('perfil') !== null ? localStorage.getItem('perfil').toString() : '';
    return this._usuario;
  }

  /**
   * Setter usuario
   * @param {Usuario} value
   */
  public set usuario(value: Usuario) {
    this._usuario = value;
  }


}
