import React, {Component} from "react";

export default (options) =>
    (WrappedComponent) =>
        class ElementResize extends Component{
            constructor(props) {
                super(props);

                this.state = {
                
                };
            }
            
            render() {

                return (
                    <div style={options}>
                        <WrappedComponent 
                            {...this.props}
                        />

                    </div>
                )
            }
        }