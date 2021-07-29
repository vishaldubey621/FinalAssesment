import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {
  constructor(private http : HttpClient) { }


  public addUser(User)
   {
  
      return this.http.post('http://localhost:3000/user',User).subscribe(
       data => {
         console.log('POST Request is successful ', data);
       },
       error => {
         console.log('Error', error);
       }
     );
   }
   
   public getUser()
   {
     
    return this.http.get('http://localhost:3000/user'); 
   }
   
  //  public AutoRefresh( t ) {
  //    setTimeout("location.reload(true);", t);
  // }
   
 
   public deleteUser(data)
   {
     debugger
      return this.http.delete('http://localhost:3000/user/' + data).subscribe(
       data => { window.alert('data will delete parmanently')
       
        
       },
       error => {
         console.log('Error', error);
       }
     );
   }

 
}
