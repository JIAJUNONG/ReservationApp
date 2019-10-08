import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ReservationDetails {
  name: string;
  email: string;
  contactNum: string;
  dob: Date;
  username: string;
  hairStylist: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservationDetails = new BehaviorSubject<ReservationDetails>({
    name: null,
    email: null,
    contactNum: null,
    dob: null,
    username: null,
    hairStylist: null
  });

  constructor() { }

  updateReservationDetails(newDetails: ReservationDetails) {
    this.reservationDetails.next(newDetails);
  }

}

