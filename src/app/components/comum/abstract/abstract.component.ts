import { CompartilhadoService } from './../../../services/compartilhado.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abstract',
  template: '<ng-content></ng-content> {{title}}'
})
export class AbstractComponent {

  public static NENHUM_REGISTRO_ENCONTRADO = 'Nenhum registro encontrado.';
  public static OPERACAO_REALIZADA_COM_SUCESSO = 'Operação realizada com sucesso.';

  mensagem: string;
  classCss = {};

  constructor(
    private compartilhado: CompartilhadoService
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

}