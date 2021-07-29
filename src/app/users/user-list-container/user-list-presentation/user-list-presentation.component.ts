import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { UserListPresenterService } from '../user-list-presenter/user-list-presenter.service';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-user-list-presentation',
  templateUrl: './user-list-presentation.component.html',
  styleUrls: ['./user-list-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [UserListPresenterService]
})
export class UserListPresentationComponent implements OnInit {
  
  @Output() public deleteId: EventEmitter<any> = new EventEmitter();
  private _userList: any[] = [];
 
  @Input() public set userList (value: any)
  {
  
    if(value) {
      debugger
      this._userList = value
      console.log("value");
     }
}
public get userList():any
 {
   debugger
  return  this._userList
}
constructor(private UserListPresenterService : UserListPresenterService  ) { }

   ngOnInit(): void {
    this.UserListPresenterService.userId$.subscribe((userId) => {
      this.deleteId.emit(userId);
        });
     }

  public Deletedata(id: number) 
  {
        this.UserListPresenterService.onDeleteId (id)
    }

  //pagination
  p: number = 1;

  //filter
  nameSearch:string= ''

   //sorting
   key: string = 'name'; //set default
   reverse: boolean = false;
   sort(key){
     this.key = key;
     this.reverse = !this.reverse;
}
}