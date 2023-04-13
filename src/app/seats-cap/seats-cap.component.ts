import { Component } from '@angular/core';
import { FlightinfoserviceService } from '../flightinfoservice.service';
import { FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-seats-cap',
  templateUrl: './seats-cap.component.html',
  styleUrls: ['./seats-cap.component.css']
})
export class SeatsCapComponent {
  constructor(readonly flightservice: FlightserviceService, readonly flightinfoservice: FlightinfoserviceService){}
}
