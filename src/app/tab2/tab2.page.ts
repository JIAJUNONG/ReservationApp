import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReservationService } from '../reservation.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  reservationForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    contactNum: new FormControl(),
    dob: new FormControl(),
    username: new FormControl(),
    hairStylist: new FormControl()
  });

  hairstylist = [
    {
      name: 'Ong Jia Jun',
      value: 1,
      level: 'Director',
      availability: true,
    },
    {
      name: 'Ong Ong Ong',
      value: 2,
      level: 'Senior',
      availability: true,
    }];


  // tslint:disable-next-line: no-shadowed-variable
  constructor(private ReservationService: ReservationService, private navCtrl: NavController ) {}

  ngOnInit(){
    this.ReservationService.reservationDetails.subscribe(details => {
      this.reservationForm.controls.name.setValue(details.name);
      this.reservationForm.controls.email.setValue(details.email);
      this.reservationForm.controls.contactNum.setValue(details.contactNum);
      this.reservationForm.controls.dob.setValue(details.dob);
      this.reservationForm.controls.username.setValue(details.username);
      this.reservationForm.controls.hairStylist.setValue(details.hairStylist);
    });

  }

  clickOption(optionValue) {
    this.reservationForm.controls.hairStylist.setValue(optionValue);
  }

  submitEdit(){
    this.ReservationService.updateReservationDetails(this.reservationForm.value);
    this.navCtrl.navigateBack('/tabs/tab1');
  }


}
