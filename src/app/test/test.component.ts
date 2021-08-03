import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }
  @Input('parentData') name5:any;
  @Output() childEvent =new EventEmitter();
  visible=true;
  name="rose";
  message="Yahoo";
  ngOnInit(): void {
  }

  outputEvent(){
    this.childEvent.emit('Hi,How are you');
  }

}
