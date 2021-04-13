
import { Action } from '@ngrx/store'
import { payment } from './../models/payment.model'
import { first_form } from './../models/payment.model'
import * as makePayment from './../actions/payment.actions'


const user_info: payment = {
    first_name: '',
    last_name : '',
    email: '',
    advertising_budget : '',
    phone_number : ''
}

const initialState: first_form = {
    convert_add: '',
    budget : '',
}


export function reducer(state: payment[] = [user_info], action: makePayment.Actions) {
    switch(action.type) {
        case makePayment.doPayment:
            return [...state, action.payload];
            default:
                return state;
            }
}

export function getInitialdetails(state: first_form[] = [initialState], action: makePayment.Actions) {
        switch(action.type) {
            case makePayment.form1:
                return [...state, action.payload];
                default:
                    return state;
                }
        }
