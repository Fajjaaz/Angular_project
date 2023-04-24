import { Component } from '@angular/core';
import { FlightinfoserviceService } from '../flightinfoservice.service';
import { FlightserviceService } from '../flightservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seats-cap',
  templateUrl: './seats-cap.component.html',
  styleUrls: ['./seats-cap.component.css']
})
export class SeatsCapComponent {
  constructor(private readonly router: Router,readonly flightservice: FlightserviceService, readonly flightinfoservice: FlightinfoserviceService){}
}
