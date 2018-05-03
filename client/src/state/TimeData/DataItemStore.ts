import { observable, action } from 'mobx';
import { Api } from './Api';
import { DataItem } from './DataItem';
import { Type } from './Type';

export class DataItemStore {
  
  @observable items: DataItem[] = [];
  @observable types: Type[] = [];
  @observable selectedItem: DataItem | null = null;
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

  @action selectItem(id: number) {
    this.selectedItem = this.items.find(item => item.id === id) || null;
  }

  @action unselectItem(id: number) {
    this.selectedItem = null;
  }
}