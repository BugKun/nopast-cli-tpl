import React from 'react';
import "./index.less"

export default ({isLoading, error}) => {
    if (isLoading) {
        return (
            <div className="loader-wrapper">
                <div className="loader"></div>
            </div>
        )
    } else if (error) {
        console.log(error);
        return (
            <div>
                <h1>Sorry !</h1>
                <p>{error}</p>
            </div>
        )
    } else {
        return null;
    }
}
