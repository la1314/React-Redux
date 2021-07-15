/*
Las acciones son un bloque de información que envia datos desde tu aplicación
 a tu store. Son la única fuente de información para el store.
/*
Las acciones son objetos planos de JavaScript. Una acción debe tener una propiedad
  type que indica el tipo de acción a realizar. Los tipos normalmente son definidos
  como strings constantes. Una vez que tu aplicación sea suficientemente grande,
  quizas quieras moverlos a un módulo separado.
*/

export const ACTIVATE_DESACTIVATE_ALERT = state => {
  return{
    type: "UPDATE_SHOW_ALERT",
    payload: state
  }
}

export const UPDATE_TEXT_ALERT = state => {
  return{
    type: "SET_TEXT_ALERT",
    payload: state
  }
}
