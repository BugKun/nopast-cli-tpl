import React, {Component} from 'react';
import {Router} from 'react-router';
import {Route, Switch, Redirect} from 'react-router-dom';
import loadable from "./loadable";
import history from './history';

const IndexPage = loadable(() => import(/* webpackChunkName: "index" */ "../pages/"))
const ServerPage = loadable(() => import(/* webpackChunkName: "server" */ "../pages/server"))
const NotFoundPage = () => (<h1>404</h1>)


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={IndexPage}/>
                    <Route path="/server" component={ServerPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </Router>
        )
    }
}

