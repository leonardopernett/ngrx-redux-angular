import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {  DecrementarAction, IncrementarAction } from './contador/contador.action';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent{
 
    contador:number

    constructor(private store:Store<any>){
        this.store.select('contador').subscribe( (contador) => this.contador = contador )
    }

    incrementar(){
      const { type } = new IncrementarAction() 
      this.disparador(type)
    }

    decrementar(){
     if(this.contador > 0){
        const { type } = new DecrementarAction() 
        this.disparador(type)
      }
    }

    private disparador(type){
      this.store.dispatch({ type, payload : this.contador})
    }
     
}
