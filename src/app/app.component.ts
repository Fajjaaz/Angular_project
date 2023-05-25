import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlightserviceService } from 'src/app/flightservice.service';
import { FlightinfoserviceService } from './flightinfoservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatSidenav } from '@angular/material/sidenav';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuEnabled: boolean;

  constructor(
    readonly flightservice: FlightserviceService,
    private readonly router: Router,
    readonly flightinfoservice: FlightinfoserviceService,
    private http: HttpClient
  ) {
    this.menuEnabled = true;
  }

  title = 'FlightManager';

  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleMenu() {
    // Toggle the state of the menu
    this.sidenav.toggle();
  }

  showStartPage() {
    this.menuEnabled = false;
    this.router.navigate(['']);
    this.flightservice.resetFlightNumber();
    this.flightinfoservice.resetFlightInfo();
    const flight = {
      id: '500500',
      gate: 'G1',
      departure: '10:00',
      arrival: '12:00',
      seats: '200',
      luggage: '50',
      catering: 'Yes',
      crew: 'Crew details',
      date: '20-05-2023'
    };
    
    const url = 'http://localhost:8080/flightpostgresqlPOST';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    
    this.http.post<any>(url, flight, httpOptions)
      .subscribe(
        (response) => {
          console.log('Flight added successfully:', response);
          // Handle success, e.g., show a success message
        },
        (error) => {
          console.error('Error adding flight:', error);
          // Handle error, e.g., show an error message
        }
      );
  }
}
