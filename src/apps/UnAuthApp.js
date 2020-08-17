import React from 'react';
import Login from '../pages/Login';
import Registro from '../pages/Registro';
import {BrowserRouter,Route,Switch, Redirect} from 'react-router-dom';

const UnAuthApp  = ({login}) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/register"> 
                    <Registro login={login}  />
                </Route>
                <Route path="/" exact> 
                    <Login login={login} />
                </Route>
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )

}

export default UnAuthApp;