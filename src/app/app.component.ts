import { Component, VERSION, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  employeeData:any;


  constructor(private httpClient: HttpClient){

  }
  ngOnInit(){
    this.httpClient.get<any>("assets/employees.json").subscribe((data)=>
      this.employeeData = data,    
    )
    
  }
}
