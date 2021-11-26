import { INCREMENTAR, DECREMENTAR } from "./contador.action"


export function reducerContador (state:number = 10 , actions:any){
    console.log(actions.payload)
    switch (actions.type) {
      case INCREMENTAR:
        return state =  actions.payload + 1
        
      
        case DECREMENTAR:
        return state = actions.payload -1
      
      default:
        return state
    }



}