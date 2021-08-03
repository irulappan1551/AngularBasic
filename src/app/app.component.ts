import { TestComponent } from './test/test.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Learning';
  isShow= false;
  event="";
  twoWay="";
  displayName=false;
  isHide=true;
  names=["Tom","Hollend","Vijay","Ajith"];
  color="green";
  name="Apple";
  message="";
  @ViewChild(TestComponent) child:any;
  name5="";
  onClick(){
    this.event="Event Binding"
  }
  viewChild(){
    this.child.visible=!this.child.visible;
    this.name5=this.child.name5;
  }
}
