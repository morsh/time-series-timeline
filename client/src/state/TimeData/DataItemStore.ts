import { observable, action } from 'mobx';
import { Api } from './Api';
import { DataItem } from './DataItem';
import { Type } from './Type';

export class DataItemStore {
  
  @observable items: DataItem[] = [];
  @observable types: Type[] = [];
  @observable pendingRequests = 0;

  private api = new Api();

  constructor() {
    this.load();
  }
  
  @action async load() {
    const results = await this.api.load();
    this.types = results.types;
    this.items = results.items;
  }
}