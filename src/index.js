import React, {Component} from "react"
import PropTypes from "prop-types"
import logoIcon from "Icons/logo.png"
import "./index.less"


export default class NopastCliTpl extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    static propTypes = {
        text: PropTypes.string.isRequired,
    };

    render() {
        const {text} = this.props;

        return (
            <div className="nopast-cli-tpl">
                <img src={logoIcon}/>
                <h1>{text}</h1>
            </div>
        )
    }

}
