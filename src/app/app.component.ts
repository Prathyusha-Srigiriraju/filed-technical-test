import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, AbstractControl, FormGroup, FormControl, Validators, PatternValidator } from '@angular/forms';
import * as Initial_form_details from '././actions/payment.actions'
import { Observable } from 'rxjs';
import { first_form } from '././models/payment.model';
import { Store } from '@ngrx/store';
import { AppState } from '././app.state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FormBuilder]
})
export class AppComponent {

  form1: FormGroup;

  showDetails;

  budgetDetails: Observable<first_form[]>;

  private state: AppState;

  constructor(private _router: Router,public router: Router,private fb: FormBuilder,private store: Store<AppState>){

    this.budgetDetails = this.store.select('first_form');
    

    this.form1 = this.fb.group({
      'convert_Add': ['', Validators.required],
      'budget': ['', Validators.required]
    })

}

  title = 'field-front-end-technical-test';


  submit(value){
    this.store.dispatch(new Initial_form_details.Initial_form_details({'convert_add': this.form1.value.convert_Add, 'budget': this.form1.value.budget}))
    this.store.select('first_form').subscribe(data => { 
      this.showDetails  = data.slice(1)
    })
  }

  navigatetoPayment(){
    this.router.navigate(['/payment']);
  }



}
