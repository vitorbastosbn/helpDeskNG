import { isNullOrUndefined, isNumber, isString, isArray } from 'util';

export class ObjectUtil {

  public static convertToJson(objeto) {
    let a = '{';
    for (const propriedade in objeto) {
      if (propriedade.startsWith('_')) {
        if (objeto[propriedade] != null &&
            (objeto[propriedade] instanceof Array && objeto[propriedade].length > 0
             || !(objeto[propriedade] instanceof Array))) {
          a += '"';
          a += propriedade.substr(1, propriedade.length);
          a += '":';
          a += JSON.stringify(objeto[propriedade]);
          a += ',';
        }
      }
    }
    if (a.endsWith(',')) {
      a = a.substr(0, a.length - 1);
    }
    a += '}';
    return JSON.parse(a);
  }

  public static isPreenchido(objeto) {
    let campoPreenchido = true;

    if (isNullOrUndefined(objeto)) {
        campoPreenchido = false;
    }

    if (isNumber(objeto)) {
        campoPreenchido = objeto;
    }

    if (isString(objeto)) {
        campoPreenchido = objeto.trim() !== '';
    }

    if (isArray(objeto)) {
      campoPreenchido = objeto.length > 0;
    }

    return campoPreenchido;
  }

}
