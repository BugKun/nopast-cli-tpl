/**
 * Created by Rayr Lee on 2018/7/15.
 */

import React, {Component} from 'react';

export default ({isLoading, error}) => {
    console.log(isLoading);
    if (isLoading) {
        return <div>正在加载模块中~~~~</div>
    } else if (error) {
        console.log(error);
        return <div>Sorry !</div>
    } else {
        return null;
    }
}