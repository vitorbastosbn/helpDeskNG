export class ListObject {

  constructor(listName, instance) {
    this.listName = listName;
    this.instance = instance;
  }

  private _listName: string;
  private _instance: Object;

  get listName() {
    return this._listName;
  }

  set listName(listName: string) {
    this._listName = listName;
  }

  get instance() {
    return this._instance;
  }

  set instance(instance: Object) {
    this._instance = instance;
  }

}
