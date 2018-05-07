import { ObjectUtil } from '../util/object-util';
import { ListObject } from './list-object';

export abstract class AbstractEntity {

  toJSON() {
    return ObjectUtil.convertToJson(this);
  }

  public getListObjects(): Array<ListObject> {
    return null;
  }

  public getArrayObject(listName: string): Object {
    if (this.getListObjects) {
      for (const objeto of this.getListObjects()) {
        if (objeto.listName === listName) {
          return objeto.instance;
        }
      }
    }
    return null;
  }

}
