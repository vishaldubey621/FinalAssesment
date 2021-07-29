import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-form-container',
  templateUrl: './user-form-container.component.html',
  styleUrls: ['./user-form-container.component.css']
})
export class UserFormContainerComponent implements OnInit {

  constructor(private UserService : UserService) {  }

  ngOnInit(): void {
    
  }
  public adduserData(value: any) {
  
    this.UserService.addUser  (value)
    console.log(value);

  }
}
