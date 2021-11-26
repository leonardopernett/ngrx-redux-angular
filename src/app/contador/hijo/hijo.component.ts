import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { DividirAction, MultiplicarAction } from '../contador.action';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent {
     contador:number
    constructor(private store:Store<any>) { 
        this.store.select('contador').subscribe(
          contador => this.contador = contador
        )
    }

  

    multiplicacion(){
     const {type} =  new MultiplicarAction()
      this.store.dispatch({ type, payload: this.contador})
 
    }

    division(){
      const {type} =  new DividirAction()
      this.store.dispatch({ type, payload: this.contador})
    
    }


}
