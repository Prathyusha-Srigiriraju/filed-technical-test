import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { payment } from './../models/payment.model'

import { first_form } from './../models/payment.model'

export const doPayment  = 'Submit'
export const form1  = 'Get Initial Details'

export class makePayment implements Action {

    readonly type = doPayment
    
    constructor(public payload: payment) {}
}

export class Initial_form_details implements Action {

    readonly type = form1
    
    constructor(public payload: first_form) {}
}


export type Actions = makePayment | Initial_form_details