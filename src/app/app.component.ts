import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FlightserviceService } from 'src/app/flightservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuEnabled: boolean;
  constructor(readonly flightservice: FlightserviceService, private readonly router:Router){
    this.menuEnabled = false;
  }
  title = 'FlightManager';
  showStartPage() {
    this.menuEnabled = true;
    this.router.navigate(['']);
  }
}
