import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class UserFormPresenterService {
  public userData: Subject<any> = new Subject<any>();
  public userData$: Observable<any>;

  userdetail(userForm: FormGroup) {
    this.userData .next(userForm.value);
  }
  constructor() { 
   
    this.userData$ = this.userData.asObservable();
  }
  public bindForm() 
   {
      return new FormGroup({
      
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      clientname : new FormControl(),
      phoneno : new FormControl(),
      officename : new FormControl(),
      
    });

   }
  

 
}
