import { Component } from '@angular/core';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})

export class AppComponent {
   title = 'MyApp1';
   //array of months.
   months = ["January", "February", "March", "April",
            "May", "June", "July", "August", "September",
            "October", "November", "December"];
   
   isavailable = true;
   myClickFunction(event) { 
      //just added console.log which will display the event details in browser 
      
      alert("Button is clicked");
      console.log(event);
   }
   changemonths(event) {
      alert("Changed month from the Dropdown");
   }
}