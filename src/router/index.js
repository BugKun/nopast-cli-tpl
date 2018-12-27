import React, {Component} from 'react';
import {Router} from 'react-router';
import {Route, Switch, Redirect} from 'react-router-dom';
import loadable from "./loadable";
import history from './history';


export default class App extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/home" component={loadable(() => import(/* webpackChunkName: "home" */ "../pages/home"))}/>
                    <Route path="/server" component={loadable(() => import(/* webpackChunkName: "server" */ "../pages/server"))}/>
                    <Redirect exact from="/" to="/home"/>
                    <Route component={() => (<h1>404</h1>)}/>
                </Switch>
            </Router>
        )
    }
}

