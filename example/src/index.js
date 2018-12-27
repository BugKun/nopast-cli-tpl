import "babel-polyfill"
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from "prop-types"
import NopastCliTpl from "nopast-cli-tpl"
import "./index.scss"



class App extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {
        return (
           <div className="main">
               <NopastCliTpl
                   text="Hello World"
               />
               <h4>React Component</h4>
           </div>
        )
    }
}



ReactDOM.render(<App/>, document.getElementById('app'));
