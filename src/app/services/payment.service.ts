import { Injectable } from '@angular/core';
import { Http,HttpModule, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs';
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment';


@Injectable()
export class paymentAPI {

  constructor(private http: Http) { }


  submitPay(body){
  const url = 'http://localhost:4004/' ;
  return this.http.post(url,body)
     
  }


}
