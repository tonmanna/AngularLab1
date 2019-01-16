import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CoopService } from '../coop.service'

@Component({
  selector: 'app-newlocation',
  templateUrl: './newlocation.component.html',
  styleUrls: ['./newlocation.component.css']
})
export class NewlocationComponent {
  angForm: FormGroup;
  public locationArray: Array<string>;

  @Output() Outputlocation: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder, public coopService: CoopService) {

    this.createForm();
    this.locationArray = [];

   }

   createForm() {
    this.angForm = this.fb.group({
      location2: [null, [Validators.required, Validators.minLength(5)]]
    });
  }

  addlocation(locationparam: string) {

    // this.locationArray.push(locationparam);
    this.coopService.addNewLocation(locationparam)
  }

  removeItem = function (index) {
    this.details.splice(index, 1);
  }

}
