import "babel-polyfill";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import withStyle from "nopast-cli-tpl";
import "./index.scss";
import logoIcon from "Images/logo.png";


@withStyle({
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
})
class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            tips: "Hello World",
        }
    }

    render() {
        const { tips } = this.state;

        return (
            <div className="main">
               <img src={logoIcon}/>
               <h1>{tips}</h1>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('app'));
