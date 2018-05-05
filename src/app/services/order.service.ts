import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local_storage.service";

@Injectable()
export class OrderService {
  constructor(private ls: LocalStorageService) {}

  saveNewItem(item) {
    let items = this.getAllItems();

    items.push(item); // add item
    this.ls.storeJSON("items", items); // store in storage
  }

  getAllItems() {
    let items = this.ls.fetchJSON("items");
    return items && items.length ? items : [];
  }
}
