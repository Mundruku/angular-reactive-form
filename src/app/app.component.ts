import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder} from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  customer: FormGroup;
  constructor(private formB: FormBuilder){

  }

ngOnInit(){

  this.customer=this.formB.group({
    FirstName: '',
    LastName: '',
    email: '',
    catalog: ''
  })
}

loadvalue(){

  this.customer.patchValue({

    FirstName: 'Mundruku',
    LastName: 'Ivan',
    email: 'ivanmundruku@gmail.com',
    catalog: 'true'
  })

}

}
