import { Component, OnInit } from '@angular/core';

import { CompartilhadoService } from './../../../services/compartilhado.service';

@Component({
  selector: 'app-abstract',
  template: '<ng-content></ng-content>'
})
export class AbstractComponent {

  public static NENHUM_REGISTRO_ENCONTRADO = 'Nenhum registro encontrado.';
  public static OPERACAO_REALIZADA_COM_SUCESSO = 'Operação realizada com sucesso.';
  private _isLoading: boolean;

  mensagem: string;
  classCss = {};

  constructor(
    public compartilhado: CompartilhadoService
  ) {
    this.compartilhado = CompartilhadoService.getInstance();

    if (localStorage.getItem('token')) {
      this.compartilhado.showTemplate.emit(true);
    }
  }

  limparMensagens() {
    this.mensagem = null;
  }

  public exibirMensagemDeAlerta(mensagem: string): void {
    this.construirClasses('alert', mensagem);
  }

  public exibirMensagemDeErro(mensagem: string): void {
    this.construirClasses('error', mensagem);
  }

  public exibirMensagemDeSucesso(mensagem: string): void {
    this.construirClasses('success', mensagem);
  }

  private construirClasses(tipo: string, text: string) {
    this.mensagem = text;
    this.classCss = {
      'alert': true
    };
    this.classCss['alert-' + tipo] = true;
    setTimeout(() => {
      this.mensagem = undefined;
    }, 3000);
  }

  getFromGroupClass(isInvalid: boolean, isDirty): {} {
    return {
      'form-group': true.valueOf,
      'has-error': isInvalid && isDirty,
      'has-success': !isInvalid && isDirty
    };
  }

  public get isLoading() {
    if (this._isLoading) {
      this._isLoading = true;
    }
    return this._isLoading;
  }

  public set isLoading(isLoading: boolean) {
    this._isLoading = isLoading;
  }
}
