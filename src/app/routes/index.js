import React from 'react';
import Login from '../../pages/login';
import Register from '../../pages/register';
import Home from '../../pages/home';
import { Redirect, Route } from 'react-router-dom';

const Routes = () => {
    return (
        <div>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/home" component={Home}></Route>

            <Route exact path="/" >
                <Redirect to="/login"/>
            </Route>
        </div>
    )
}

export default Routes;