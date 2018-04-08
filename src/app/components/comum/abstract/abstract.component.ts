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

  constructor() {}

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
      'alert' : true
    };
    this.classCss['alert-' + tipo] = true;
  }

}
