import { MensagemProperties } from './../../../model/comum/mensagem-properties';
import { ObjectUtil } from './object-util';
import { MessageUtil } from './message-util';
import { Mensagem } from './../../../model/comum/mensagem';

export class ValidadorUtil {

      /**
   * Adiciona uma mensagem de campo obrigatório caso o campo não esteja preenchido.
   *
   * @param campo
   * @param nomeCampo
   * @param mensagens
   * @param condicao
   */
  public static addMensagemCampoObrigatorio(campo, nomeCampo: string, mensagens: Mensagem[], condicao?: boolean) {
    if ((condicao == null || condicao) && !ObjectUtil.isPreenchido(campo)) {
      mensagens.push(MessageUtil.criarMensagemDeAlerta(MensagemProperties.APP_CAMPO_OBRIGATORIO, [nomeCampo]));
    }
  }

}
