import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from 'src/app/flightservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.css']
})
export class DetailsPage implements OnInit{

  fnumber: string | undefined;
  constructor(private readonly flightservice: FlightserviceService){}
  ngOnInit(): void{
    this.fnumber = this.flightservice.getFlightNumber()
  }

}
