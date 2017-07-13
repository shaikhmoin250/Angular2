import { Component, OnInit } from '@angular/core';
import {MyDataService} from './../my-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private newService: MyDataService) { }

  ngOnInit() {
     console.log(this.newService.obj.name)
  }

}
