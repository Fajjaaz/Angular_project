import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  flightNumber!: string;

  constructor(
    private readonly router: Router,
    private readonly flightservice: FlightserviceService
  ) {}

  onSubmit(form: NgForm) {
    // Set the flight number using the flightservice
    this.flightservice.setFlightNumber(form.value.flightNumber);
    this.router.navigate(['home']);
  }
}