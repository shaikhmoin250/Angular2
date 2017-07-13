import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class MyDataService {

  constructor(private http:Http) { }
 fetchData(){
    this.http.get('src/app/users/data/students.json').subscribe(
      (data) => console.log(data)
    )
}
obj={
  id:"1",
  name:"moin",
  rollno:"2342"
}
sucess(){
  return "successful";
}
}