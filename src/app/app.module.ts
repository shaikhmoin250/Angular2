import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from'@angular/router';

import { AppComponent } from './app.component';
import {MyDataService} from './my-data.service';
import { MyLoginComponent } from './my-login/my-login.component';
import { UsersComponent } from './users/users.component';
import { SortPipe } from './app.sort';

@NgModule({
  declarations: [
     SortPipe,
    MyLoginComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     RouterModule.forRoot([
     {
       path:'users',
      component: UsersComponent
     },
     {
       path:'my-login',
       component: MyLoginComponent
     }
    ])
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
