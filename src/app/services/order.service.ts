import { Injectable } from "@angular/core";
import { LocalStorageService } from "./local_storage.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class OrderService {
  constructor(private ls: LocalStorageService,private http:HttpClient) {}

  // saveNewItem(item) {
  //   let items = this.getAllItems();

  //   items.push(item); // add item
  //   this.ls.storeJSON("items", items); // store in storage
  // }


  saveNewItem(item) {
    return this.http.post(environment.apiPath+"items",item);
  }
  // getAllItems() {
  //   let items = this.ls.fetchJSON("items");
  //   return items && items.length ? items : [];
  // }

  getAllItems(){
    return this.http.get<any[]>(environment.apiPath+"items");
  }
}
