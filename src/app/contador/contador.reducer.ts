import { INCREMENTAR, DECREMENTAR, MULTIPLICAR, DIVIDIR,RESET} from "./contador.action"


export function reducerContador (state:number = 10 , actions:any){
    switch (actions.type) {
      case INCREMENTAR:
        return state =  actions.payload + 1
        
      
        case DECREMENTAR:
          return state = actions.payload -1

        case MULTIPLICAR:
          return state = actions.payload *2

        case DIVIDIR:
          return state = actions.payload /2

        case RESET:
          return state = 0
      
      default:
        return state
    }



}