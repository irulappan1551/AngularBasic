import { ZoomotoService } from './../zoomoto.service';
import { AuthGuard } from './../auth.guard';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 login:any;
 value:any;
  constructor(private route:Router,private access:AuthGuard,private food:ZoomotoService) { }

  ngOnInit(): void {
    this.login=new FormGroup({
      mail: new FormControl(null),
      name: new FormControl(null),
      password: new FormControl(null)
    })
  }

save(){
console.log(this.login.value)
this.food.postDetail(this.login.value).subscribe(res=>{
  console.log(res)
});


console.log(this.login.controls['password'].value)
console.log(this.login.controls['name'].value)
}
view(){
 this.food.getDetail().subscribe(res=>{
   this.value=res;
  console.log("user",this.value)

 })

}









/* if(this.login.controls['name'].value=='sam' && this.login.controls['password'].value=="123"){
  this.access.show=true;
this.route.navigate(['/success'])

}else{

this.route.navigate(['/fail'])
}
 */





 fruit(){
  let my=this.food.orderFruit();
  console.log(my);

}
drink(){
  let my=this.food.orderDrinks();
  console.log(my);

}


}
