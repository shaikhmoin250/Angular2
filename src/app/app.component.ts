import { Component } from '@angular/core';
import {MyDataService} from './my-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private newService:MyDataService){}

  ngOnInit(){
   //this.newService.obj.name="JOHN";
   //onsole.log(this.newService.obj.name)
    this.newService.fetchData();  
}


  title = 'moin!';
  day= new Date();
  obj={
    id :1,
    name: "moin"
  }

  arr=[4,5,6,3,4,2,1,4,6,8];
  isTrue= true;
  myName="moin";

  items= ["Angular 4", "React", "Underscore"];
  newItem="";
  pushItem= function() {
    if(this.newItem != "")
    {
      this.items.push(this.newItem);
      this.newItem="";
    }
  }
  removeItem= function(index)
  {
    this.items.splice(index, 1);
  }
}

