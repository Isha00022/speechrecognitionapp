import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SignUp from './Components/Pages/SignUp/SignUp';
import {BrowserRouter} from 'react-router-dom';

import RecorderComponent from './Components/Pages/RecordingPage/RecorderComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <App/> */}
    <RecorderComponent/>          
  </BrowserRouter>
);



