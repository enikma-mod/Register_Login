import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Register_Login';


  //show hide div variables
  userlogin = true;
  userregister = false;



  //Buttons clicks functionalities 
  user_register()
  {
    this.userlogin = false;
    this.userregister = true;
  }

  user_login()
  {
    this.userlogin = true
    this.userregister = false;
    
  }
}

