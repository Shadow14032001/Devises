import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}
  title = 'pipeConvert';
  listeDevise = [
    'XAF',
    'EUR',
    'USD',
    'JPY',
    'GBP',
    'CHF',
    'CAD',
    'CNY',
    'AED',
  ];
  depart = 'XAF';
  arrivee = 'XAF';
  public value=0;
  public value2=0;

  test(){
    console.log('test');
  }
  setDeviseDepart(devise:String){
    this.depart = String(devise);
  }

  setDeviseArrivee(devise:String){
    this.arrivee = String(devise);
  }
}
