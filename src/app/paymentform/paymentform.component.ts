import { Component, OnInit } from '@angular/core';
import * as makePayment from './../actions/payment.actions'
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { Observable } from 'rxjs';
import { payment } from './../models/payment.model';
import { paymentAPI } from '../services/payment.service';
import { FormBuilder, AbstractControl, FormGroup, FormControl, Validators, PatternValidator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentform',
  templateUrl: './paymentform.component.html',
  styleUrls: ['./paymentform.component.scss'],
  providers: [paymentAPI,FormBuilder]
})
export class PaymentformComponent implements OnInit {

  paymentDetails: Observable<payment[]>;

  getPaymentdetails: any;

  form2: FormGroup;

  constructor(private toastr: ToastrService,public router: Router,private store: Store<AppState>,private connectService: paymentAPI,private fb: FormBuilder) { 
    
    this.paymentDetails = this.store.select('payment');
    
    this.form2 = this.fb.group({
      'first_name': ['', Validators.required],
      'last_name': ['', Validators.required],
      'email': ['', Validators.required],
      'advertising_budget': ['', Validators.required],
      'phone_number': ['', Validators.required]
    })

  }

  ngOnInit(): void {
  
  }

  // payment method //

  submit(value){

    this.store.dispatch(
      new makePayment.makePayment
      ({'first_name': value.first_name, 'last_name': value.last_name,  'email': value.email, 'advertising_budget' : value.advertising_budget , 'phone_number': value.phone_number}
    ))
    
    this.store.select('payment').subscribe(data => { 
      this.getPaymentdetails = data
    })

    this.toastr.success("Payment Successfull.")

    this.connectService.submitPay(this.getPaymentdetails).subscribe(res => {
      // currently there is no backend server for this project , as per task description just given connection to dummy API host
    })  

  }



  navigateHomepage(){
    this.router.navigate(['/']);
  }

  // validations for input fields 

  
  noletter(event){
    var regExp = /[a-z]/i;
    var value = String.fromCharCode(event.which) || event.key;
    if (regExp.test(value)) {
      event.preventDefault();
    }
    var valid = (event.which >= 48 && event.which <= 57) || (event.which >= 65 && event.which <= 90) || (event.which >= 97 && event.which <= 122);
    if (!valid) {
      event.preventDefault();
    }
  }

  spacesnotallowed(event) {
    var key = event.keyCode;
    if (key === 32 && event.target.selectionStart === 0) {
      event.preventDefault();
    }
  }


}
