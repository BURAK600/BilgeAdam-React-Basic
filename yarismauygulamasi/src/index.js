import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';

// import {Login} from './pages/Login';
import {Register} from './pages/Register';

import {Provider} from 'react-redux';

import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <React.StrictMode>
     <Provider store={store}>
       {/* <Login /> */}
       <Register></Register>
     </Provider>
  </React.StrictMode>

);
