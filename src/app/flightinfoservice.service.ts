import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightinfoserviceService {
  private apiUrl = 'http://localhost:8080/flightDetail';
  private flightInfo: any = {};

  constructor(private http: HttpClient) { }

  getFlightInfo(flightNumber: string) {
    return this.http.get(`${this.apiUrl}?flightNumber=${flightNumber}`)
      .subscribe({
        next: (res: any) => {
          this.flightInfo.id = res.id;
          this.flightInfo.departureTime = res.departureTime;
          this.flightInfo.arrivalTime = res.arrivalTime;
          this.flightInfo.gate = res.gate;
          this.flightInfo.date = res.date;
          this.flightInfo.seats = res.seats;
          this.flightInfo.luggage = res.luggage;
          this.flightInfo.catering = res.catering;
          this.flightInfo.crew = res.crew;
        },
        error: (err: any) => {
          console.error('Failed to get flight information', err);
          this.resetFlightInfo();
        }
      });
  }

  getFlightId(): string {
    return this.flightInfo.id;
  }

  getDepartureTime(): string {
    return this.flightInfo.departureTime;
  }

  getArrivalTime(): string {
    return this.flightInfo.arrivalTime;
  }

  getGate(): string {
    return this.flightInfo.gate;
  }

  getSeats(): number {
    return this.flightInfo.seats;
  }

  getLuggage(): string {
    return this.flightInfo.luggage;
  }

  getCatering(): string {
    return this.flightInfo.catering;
  }

  getCrew(): string {
    return this.flightInfo.crew;
  }

  getDate(): string {
    return this.flightInfo.date;
  }

  resetFlightInfo() {
    this.flightInfo = {};
  }
}

