import React from 'react';
import SignUp from './Components/Pages/SignUp/SignUp';
import SignIn from './Components/Pages/SignIn/SignIn';
import "./stylemain.css";
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
   <Routes>
    <Route path='/' element={<SignUp/>} />
    <Route path='/login' element={<SignIn/>}/>
   </Routes>
  );
}

export default App;
