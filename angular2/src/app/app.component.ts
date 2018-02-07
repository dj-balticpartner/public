import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  city = 'Kaunas';
  test = sum(3, 3);
  currentTime = getTime();  
}

function sum(x, y) {
  return x * y;
}

function getTime(){
  var d = new Date();
  var curr_hour = d.getHours();
  var curr_min = d.getMinutes();

  var curr_sec = d.getSeconds();

  return curr_hour + ":" + curr_min + ":" + curr_sec;

}
