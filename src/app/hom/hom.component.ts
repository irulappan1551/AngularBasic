import { ZoomotoService } from './../zoomoto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hom',
  templateUrl: './hom.component.html',
  styleUrls: ['./hom.component.css']
})
export class HomComponent implements OnInit {

  constructor(private food:ZoomotoService) { }

  ngOnInit(): void {
  }

  fruit(){
    let my=this.food.orderFruit();
    console.log(my);

  }
  drink(){
    let my=this.food.orderDrinks();
    console.log(my);

  }
  send(){
    this.food.sentItems("letter");
  }

}
