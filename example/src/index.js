import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NopastCliTpl from "react-nopast-cli-tpl";
import "./index.less";
import logoIcon from "Images/logo.png";


@NopastCliTpl({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
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
               <h4>React High Order Component</h4>
            </div>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('app'));
