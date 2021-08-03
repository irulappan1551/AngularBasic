import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { UnsaveDirective } from './unsave.directive';
import { LastComponent } from './last/last.component';
import { LoginComponent } from './login/login.component';
import { HomComponent } from './hom/hom.component';
import { MypageComponent } from './mypage/mypage.component';
import { NotuserComponent } from './notuser/notuser.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    UnsaveDirective,
    LastComponent,
    LoginComponent,
    HomComponent,
    MypageComponent,
    NotuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
