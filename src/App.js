import './App.css';
// import LoginSignup from './components/LoginSignup/LoginSignup';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Dashboard from "";

import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="85113120027-8rsm2u4kfvl5ckuamnikj5um3s6tvkpi.apps.googleusercontent.com">
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/' element={<Signup />} />
      {/* <Route path='/' element={<Dashboard />} /> */}
      </Routes>
      </BrowserRouter>
      </GoogleOAuthProvider>
  );
}

export default App;
