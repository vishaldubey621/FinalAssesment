import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserFormContainerComponent } from './user-form-container/user-form-container.component';

const routes: Routes = [

  { 
    path: '', 
    component: UsersComponent,
    children: [
     
      {
        path: "",
        component: UserListContainerComponent
      },
    
        {
          path: "add",
          component: UserFormContainerComponent
        }
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
