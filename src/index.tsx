import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore';
//import { zoomValue } from './actions/mapActions';

// create store
const store = configureStore();
//store.dispatch (zoomValue(10));

// TEMP
store.subscribe(() => {
  const state = store.getState();
  console.log('state subscribe: ', state);
});

// create parent java script xml (jsx), and  pass in store, so accessible by children
const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

console.log('Ash Running');
console.log(store.getState);

ReactDOM.render(jsx, document.getElementById('root'));
