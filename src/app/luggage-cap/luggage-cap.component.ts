import { Component } from '@angular/core';
import { FlightinfoserviceService } from '../flightinfoservice.service';
import { FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-luggage-cap',
  templateUrl: './luggage-cap.component.html',
  styleUrls: ['./luggage-cap.component.css']
})
export class LuggageCapComponent {
  constructor(readonly flightservice: FlightserviceService, readonly flightinfoservice: FlightinfoserviceService){}
}
