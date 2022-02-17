import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  credentials: any =new BehaviorSubject([{userName:"santhosh",userPassword:12345},{userName:"vicky",userPassword:123456}]);
 
  login:any = new BehaviorSubject({loggedIn:false,Name:"unknown"});

  

   
   

  constructor() { }
  
}
