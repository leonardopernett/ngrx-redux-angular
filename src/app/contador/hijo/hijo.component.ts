import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {
  @Input() contador:number
  @Output() cambioContador = new EventEmitter()
    constructor() { }

    ngOnInit(): void {
    }

    multiplicacion(){
      this.contador *= 2 
      this.cambioContador.emit(this.contador )
    }

    division(){
      this.contador /= 2
      this.cambioContador.emit(this.contador )
    
    }

    reset(event){
      this.contador = event
      this.cambioContador.emit(event)
    }

}
