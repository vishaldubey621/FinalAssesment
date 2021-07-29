import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserFormPresenterService } from '../user-form-presenter/user-form-presenter.service';

@Component({
  selector: 'app-user-form-presentation',
  templateUrl: './user-form-presentation.component.html',
  styleUrls: ['./user-form-presentation.component.css'],
  viewProviders: [UserFormPresenterService]
})
export class UserFormPresentationComponent implements OnInit {
  public client = ['Apple','JBL','1Rivet','TCS'];
  public Office = ['Office1','Office2','Office3','Office4'];

  public userForm: FormGroup = this.UserFormPresenterService.bindForm();
  
  @Output() userData : EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private UserFormPresenterService :UserFormPresenterService  ) { }
  public onSubmit()
  {
      this.UserFormPresenterService.userdetail(this.userForm);    
  }

  ngOnInit(): void {
    this.UserFormPresenterService.userData .subscribe((userData: any) => {
     
        this.userData.emit(userData)
    })
  }

}