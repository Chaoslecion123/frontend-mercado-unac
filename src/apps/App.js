import React,{useState} from 'react';
import Login from '../pages/Login';
import Registro from '../pages/Registro';
import {BrowserRouter,Route,Switch, Redirect} from 'react-router-dom';
import UnAuthApp from './UnAuthApp';

const initState = () => {
    try {
        return JSON.parse(localStorage.getItem("isLoggedIn"));
    }catch (e) {
        return false;
    }
}

const App  = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(initState);

    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn",true);
    }

    return isLoggedIn ? (
        <p>has iniciado sesion</p>
    ): (
        <UnAuthApp login={login}></UnAuthApp>
    )

}

export default App;