import { Component } from '@angular/core';
import { FlightinfoserviceService } from '../flightinfoservice.service';
import { FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent {
  constructor(readonly flightservice: FlightserviceService, readonly flightinfoservice: FlightinfoserviceService){}
}
