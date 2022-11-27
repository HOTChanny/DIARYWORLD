import React from 'react';
import './App.css';
import Navbar from'./components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginHome from './components/pages/LoginHome/LoginHome';

import Home from './components/pages/Home';
import Task from './components/pages/task/Task';
import Shop from './components/pages/Shop/Shop';
import Inventory from './components/pages/inventory/Inventory';
//import SignUp from './components/pages/SignUp';
//import Login from './components/pages/Login';
import Quest from './components/pages/Quest/Quest';
import Test from './etc/Test';

// import { useState } from "react";

/*
import { auth } from "./firebase"; //추가
import Login from "./components/pages/Login";
import PublicRoute from "./components/PublicRoute";//추가
import PrivateRoute from "./components/PrivateRoute";//추가
import { useReducer, useEffect } from "react";

const initialState = {
  authenticated: false,
  loading: true,
};//추가

function reducer(state, action) {
  switch (action.type) {
    case "GET_USER":
      return { ...state, authenticated: action.result };
    default:
      return state;
  }
}//추가한것들
*/

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>   
      <Routes>
        <Route path='/' exact element={<LoginHome />}/>
        <Route path='/home' exact element={<Home />}/>
        <Route path='/task'   exact element={<Task />}/>
        <Route path='/quest' exact element={<Quest />}/>
        <Route path='/shop'  exact element={<Shop />}/>
        <Route path='/inventory' exact element={<Inventory />}/>
        <Route path='/test' exact element={<Test />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;