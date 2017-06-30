import {Component, Output, EventEmitter} from '@angular/core';
import {element, by} from 'protractor';
import {isNumber} from 'util';

@Component(
  {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rechner';
  computing = '+';
  output = '';
  outputtable: string[] = [];
  value1 = 0;
  value2 = 0;

  constructor() {


  }
  public setvalue1(eve) {
    this.value1 = eve.target.value;
  }
  public setvalue2(eve) {
    this.value2 = eve.target.value;
  }
  public calculate() {
    if(this.computing === '+') {
      this.output = (Number(this.value1) + Number(this.value2)).toString();
    }
    if(this.computing === '-') {
      this.output = (this.value1 - this.value2).toString();
    }
    if(this.computing === '*') {
      this.output = (this.value1 * this.value2).toString();
    }
    if(this.computing === '/') {
      this.output = (this.value1 / this.value2).toString();
    }
    this.outputtable.push(this.output);
  }

  public changesign(eve) {
    if(eve.target.id === '+') {
      this.computing = '+';
    }
    if(eve.target.id === '-') {
      this.computing = '-';
    }
    if(eve.target.id === '*') {
      this.computing = '*';
    }
    if(eve.target.id === '/') {
      this.computing = '/';
    }
  }

}
