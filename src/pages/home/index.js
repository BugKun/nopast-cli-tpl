import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import "./index.scss"


export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        return (
           <div className="home">
               <h4>/home</h4>
               <Link to="/server">Go to /server</Link>
           </div>
        )
    }
}



