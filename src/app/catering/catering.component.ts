import { Component } from '@angular/core';
import { FlightinfoserviceService } from '../flightinfoservice.service';
import { FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-catering',
  templateUrl: './catering.component.html',
  styleUrls: ['./catering.component.css']
})
export class CateringComponent {
  constructor(readonly flightservice: FlightserviceService, readonly flightinfoservice: FlightinfoserviceService){}
}
