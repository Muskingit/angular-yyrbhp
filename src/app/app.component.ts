import { Component, VERSION, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  employeeData: any;
  dataemp: any = [];
  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    this.dataemp = [
      {
        patientDetails: {
          firstName: 'John',
          lastName: 'Smit',
        },

        claimNumber: {
          claimNumber: 'CL34246334',
          DataSubmitted: '2007-04-26T00:00:00',
          ClaimStatus: 'ADDITIONAL_INFO_REQUIRED',
        },
      },

      {
        patientDetails: {
          firstName: 'John',
          lastName: 'Smit',
        },

        claimNumber: {
          claimNumber: 'CL34246334',
          DataSubmitted: '2007-04-26T00:00:00',
          ClaimStatus: 'COMPLETED',
        },
      },

      {
        patientDetails: {
          firstName: 'John',
          lastName: 'Smit',
        },

        claimNumber: {
          claimNumber: 'CL34246334',
          DataSubmitted: '2007-04-26T00:00:00',
          ClaimStatus: 'NOT_RECIVED',
        },
      },
    ];

    console.log(this.dataemp);

    // this.httpClient
    //   .get<any>('assets/employees.json')
    //   .subscribe((data) => (this.employeeData = data));
  }
}
