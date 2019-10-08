import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  reservationDetails = {};

  constructor(private reservationService: ReservationService) {}

  ngOnInit(){
    this.reservationService.reservationDetails.subscribe(details =>{
      this.reservationDetails = details
    })
  }

}
