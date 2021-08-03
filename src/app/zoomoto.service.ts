import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZoomotoService {

  drinks:any="7up";
  fruit:any="apple";
  recive:any;


  constructor(private http:HttpClient) { }

  orderDrinks(){
    return this.drinks;
  }
  orderFruit(){
    return this.fruit;
  }
  sentItems(data:any)
  {
    console.log("send",data)
    this.recive=data;
  }
  reciveItems()
  {
    return this.recive;
  }


  getDetail(){
   return this.http.get('http://localhost:3000/send')
  }
  postDetail(val:any){
    console.log("post data",val);
    return this.http.post('http://localhost:3000/send',val)
   }
}
