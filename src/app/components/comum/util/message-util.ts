import { TipoMensagemEnum } from './../../../model/enums/tipo-mensagem-enum';
import { Mensagem } from './../../../model/comum/mensagem';

export class MessageUtil {

  public static substituirParametrosDeMensagem(mensagem: string, parametros?: string[]) {
    let retorno = mensagem;
    if (parametros) {
      parametros.forEach(
        p => {
          retorno = retorno.replace(new RegExp('\\{' + parametros.indexOf(p) + '\\}', 'g'), p);
        }
      );
    }
    return retorno;
  }

  public static criarMensagem(texto: string, tipo: TipoMensagemEnum, parametros?: string[]): Mensagem {
    const mensagem = new Mensagem();
    mensagem.mensagem = MessageUtil.substituirParametrosDeMensagem(texto, parametros);
    mensagem.tipoMensagem = tipo;
    return mensagem;
  }

  public static criarMensagemDeSucesso(texto: string, parametros?: string[]): Mensagem {
    return this.criarMensagem(texto, TipoMensagemEnum.SUCCESS, parametros);
  }

  public static criarMensagemDeErro(texto: string, parametros?: string[]): Mensagem {
    return this.criarMensagem(texto, TipoMensagemEnum.ERROR, parametros);
  }

  public static criarMensagemDeAlerta(texto: string, parametros?: string[]): Mensagem {
    return this.criarMensagem(texto, TipoMensagemEnum.WARNING, parametros);
  }

  public static criarMensagemDeInformacao(texto: string, parametros?: string[]): Mensagem {
    return this.criarMensagem(texto, TipoMensagemEnum.INFO, parametros);
  }

}
