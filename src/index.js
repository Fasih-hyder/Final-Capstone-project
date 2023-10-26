import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import { store } from './functins/stote';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
  
    <App />
    </Provider>
  
  
);
