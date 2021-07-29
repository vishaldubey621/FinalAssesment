import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.css']
})
export class UserListContainerComponent implements OnInit {

  public userList$ : Observable<any>;

  constructor(private  UserService:UserService) {
    this.userList$= this.UserService.getUser()
   }
   public onDeleteId(data){
     this.UserService.deleteUser("data");
   }
  ngOnInit(): void {
  }

}
