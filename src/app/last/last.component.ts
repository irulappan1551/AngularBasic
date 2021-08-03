import { ZoomotoService } from './../zoomoto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.css']
})
export class LastComponent implements OnInit {

  constructor(private service:ZoomotoService) { }

  ngOnInit(): void {
  }

  get(){
    let mine=this.service.reciveItems();
    console.log("recive",mine)
  }

}
