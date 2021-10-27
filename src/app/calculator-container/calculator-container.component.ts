import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-calculator-event',
  template: `
    <div>
      <h2>Event calculator</h2>
      <input id="figure1" type="number" (keyup)="calculate($event)" [value]="figure1" />
      +
      <input id="figure2" type="number" (keyup)="calculate($event)" [value]="figure2" />
      =
      {{result}}
    <div> 
  `,
  styleUrls: ['./calculator-container.component.css']
})
export class CalculatorEventComponent implements OnInit {
  
  @Input() figure1: number = 0;
  @Input() figure2: number = 0;
  @Output() figure1Change: EventEmitter<number> = new EventEmitter();
  @Output() figure2Change: EventEmitter<number> = new EventEmitter();

  @Output() resultChanged: EventEmitter<number> = new EventEmitter();
  
  get result() {
    return this.figure1 + this.figure2;
  }
  constructor() { }

  ngOnInit() {
    this.resultChanged.emit(this.result);
  }

  calculate(ev) {
    if (ev.target.id === 'figure1') {
      this.figure1 = Number(ev.target.value);
      this.figure1Change.emit(this.figure1);
    } else {
      this.figure2 = Number(ev.target.value);
      this.figure2Change.emit(this.figure2);
    }

    this.resultChanged.emit(this.result);
    // this[ev.target.id+'Change'].emit(this[ev.target.id]);
  }

  

}

@Component({
  selector: 'app-calculator-effective',
  template: `
    <div>
      <h2>Effective calculator</h2>
      <input type="number" [(ngModel)]="figure1"/>
      +
      <input type="number" [(ngModel)]="figure2"/>
      =
      {{figure1 + figure2}}
    <div> 
  `,
  styleUrls: ['./calculator-container.component.css']
})
export class CalculatorEffectiveComponent {
  
  @Input() figure1: number = 1;
  @Input() figure2: number = 0;
  
  constructor() { }

}


@Component({
  selector: 'app-calculator-container',
  template: `
    <h1>Calculator container</h1>
    <app-calculator-effective [figure1]="10" [figure2]="20"></app-calculator-effective>
    <hr />
    <app-calculator-event [(figure1)]="f1" [(figure2)]="f2" (resultChanged)="handleResultChange($event)"></app-calculator-event>
    {{f1}} + {{f2}} = {{fResult}}
  `,
  styleUrls: ['./calculator-container.component.css']
})
export class CalculatorContainerComponent implements OnInit {
  f1: number = 5;
  f2: number = 10;
  fResult: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleResultChange(ev: number) {
    this.fResult = ev;
  }

}
