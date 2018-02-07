import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  template: `
  <div>
  <input [value]="username" (input)="username = $event.target.value">

  <p>Hello {{username}}!</p>

    
    <p *ngIf="myObject.smokes; else otherTmpl">I smoke</p>
    <ng-template #otherTmpl>No I don't smoke</ng-template>
    <img src="{{angularLogo}}" />
    <img [src]="angularLogo" />
    <img bind-src="angularLogo" />

    <button [disabled]="myObject.gender == 'male'">Only Girls can register</button>
    <button [disabled]="username == 'Jonas'">button NOT for Jonas</button>
    <button (click)='sayHi()'>Say hi</button>
    <button (click)='showAllEvents($event)'>Show all events</button>
  </div>
  `,
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  username = '';
  angularLogo = "https://angular.io/assets/images/logos/angular/angular.png";

  myObject ={
    age: 33,
    gender: 'male',
    name: 'Bill Gates',
    smokes: true
  }

  sayHi(){
    alert("say hi!");
  }
  showAllEvents(event){
    console.log(event);
  }

}


