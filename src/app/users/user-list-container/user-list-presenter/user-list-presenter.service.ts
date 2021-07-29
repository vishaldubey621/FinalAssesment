import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { UserService } from '../../user.service';

@Injectable()
export class UserListPresenterService {
  public userId: Subject<any> = new Subject();
  public userId$!: Observable<any>;
  conference: any = [];


  constructor(private UserService : UserService ) {
    this.userId$  = this.userId .asObservable();
   }
  public onDeleteId(value: any) {
 
    this.UserService.deleteUser(value)
    

  }

  
}
