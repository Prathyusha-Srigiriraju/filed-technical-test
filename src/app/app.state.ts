import { payment } from './models/payment.model'
import { first_form } from './models/payment.model'

export interface AppState {
    readonly payment: payment[];
    readonly first_form: first_form[];
}