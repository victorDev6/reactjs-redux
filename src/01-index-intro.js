import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore((state = 0, action) => { // esto es un reducer que es el encargado de actualizar el estado de nuestra aplicacion
  // action = { type: 'tipo de accion', payload: any }
  switch (action.type) {
    case 'incrementar': {
      return state + 1;
    }
    case 'decrementar': {
      return state - 1;
    }
    case 'set': {
      return action.payload;
    }
    default: {
      return state;
    }
  }

  // console.log({ state, action });
  // un reducer siempre retorna un estado
});

// se imprime con parentecis para que lo muestre como un objeto
// console.log(store.getState());

//store.dispatch({ type: 'accion', payload: 2 }); //al hacer esto se vuelve a ejecutar el reducer
console.log(store.getState());
store.dispatch({ type: 'lala' });
console.log(store.getState());
store.dispatch({ type: 'incrementar' });
console.log(store.getState());
store.dispatch({ type: 'decrementar' });
console.log(store.getState());
store.dispatch({ type: 'set', payload: 15 });
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
