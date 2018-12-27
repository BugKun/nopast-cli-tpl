import React, { Component, cloneElement } from "react";

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
                    <WrappedComponent 
                        {...this.props}
                        style={{
                            ...this.props.style,
                            ...options
                        }}
                    />
                )

            }
        }