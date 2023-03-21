import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightserviceService {
  private flightNumber: string='';

  setFlightNumber(flightNumber: string) {
    this.flightNumber = flightNumber;
  }

  getFlightNumber(): string {
    return this.flightNumber;
  }
}