import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlightinfoserviceService {
  private apiUrl = 'http://localhost:8080/flightDetail';
  private apiUrlSeats = 'http://localhost:8080/flightSeats';
  private apiUrlLugagge = 'http://localhost:8080/flightLugagge';
  private apiUrlCatering = 'http://localhost:8080/flightCatering';
  private apiUrlCrew = 'http://localhost:8080/flightCrew';
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
        },
        error: (err: any) => {
          console.error('Failed to get flight information', err);
          this.resetFlightInfo();
        }
      });
  }

  getFlightSeats(flightNumber: string) {
    return this.http.get(`${this.apiUrlSeats}?flightNumber=${flightNumber}`)
      .subscribe({
        next: (res: any) => {
          this.flightInfo.seats = res.seats;
        },
        error: (err: any) => {
          console.error('Failed to get flight information', err);
          this.resetFlightInfo();
        }
      });
  }

  getFlightLugagge(flightNumber: string) {
    return this.http.get(`${this.apiUrlLugagge}?flightNumber=${flightNumber}`)
      .subscribe({
        next: (res: any) => {
          this.flightInfo.lugagge = res.lugagge;
        },
        error: (err: any) => {
          console.error('Failed to get flight information', err);
          this.resetFlightInfo();
        }
      });
  }

  getFlightCatering(flightNumber: string) {
    return this.http.get(`${this.apiUrlCatering}?flightNumber=${flightNumber}`)
      .subscribe({
        next: (res: any) => {
          this.flightInfo.catering = res.catering;
        },
        error: (err: any) => {
          console.error('Failed to get flight information', err);
          this.resetFlightInfo();
        }
      });
  }

  getFlightCrew(flightNumber: string) {
    return this.http.get(`${this.apiUrlCrew}?flightNumber=${flightNumber}`)
      .subscribe({
        next: (res: any) => {
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
    return this.flightInfo.lugagge;
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

