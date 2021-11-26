
export const INCREMENTAR ='INCREMENTAR'
export const DECREMENTAR ='DECREMENTAR'
export const MULTIPLICAR ='MULTIPLICAR'
export const DIVIDIR ='DIVIDIR'
export const RESET="RESET"

export class IncrementarAction  {
    type = INCREMENTAR
}

export class DecrementarAction {
    type = DECREMENTAR
}

export class MultiplicarAction {
     type = MULTIPLICAR
}

export class DividirAction {
     type = DIVIDIR
}

export class ResetAction {
    type = RESET
}