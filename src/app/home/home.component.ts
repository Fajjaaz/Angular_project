import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightinfoserviceService } from '../flightinfoservice.service';
import { FlightserviceService } from '../flightservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  flightNumber!: string;

  constructor(
    private readonly router: Router,
    private readonly flightservice: FlightserviceService,
    private readonly flightinfoservice: FlightinfoserviceService,
    private readonly snackBar: MatSnackBar
  ) {}

  onSubmit(form: NgForm) {
    // Set the flight number using the flightservice
    this.flightservice.setFlightNumber(form.value.flightNumber);
    this.flightinfoservice.getFlightInfo(form.value.flightNumber).add(() => {
      if (this.flightinfoservice.getFlightId()) {
        this.flightinfoservice.getFlightSeats(form.value.flightNumber);
        this.flightinfoservice.getFlightLugagge(form.value.flightNumber);
        this.flightinfoservice.getFlightCatering(form.value.flightNumber);
        this.flightinfoservice.getFlightCrew(form.value.flightNumber);
        this.router.navigate(['home']);
      } else {
        this.router.navigate(['']);
        this.flightservice.resetFlightNumber();
        this.flightinfoservice.resetFlightInfo();
        this.snackBar.open('Flight number does not exist', 'Close', {
          duration: 5000,
          horizontalPosition: 'center',
          panelClass:['snackbar-center']
        });
      }
    });
  }
}