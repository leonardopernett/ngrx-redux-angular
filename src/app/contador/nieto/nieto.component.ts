import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ResetAction } from '../contador.action';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent{
  contador:number
  
  constructor(private store:Store<any>) {
    this.store.select('contador').subscribe(contador =>this.contador = contador)
   }

  reset(){
    const { type } = new ResetAction()
    this.store.dispatch({type, payload:0})
  }

}
