(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o,u,a=function(){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}(),i=r(2),l=p(i),c=p(r(1)),f=r(163),s=r(118);function p(e){return e&&e.__esModule?e:{default:e}}r(419);var b=(0,s.inject)("ServerStore")(n=(0,s.observer)((u=o=function(e){function r(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.state={},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(r,i.Component),a(r,[{key:"render",value:function(){var e=this.props.ServerStore;return l.default.createElement("div",{className:"server"},l.default.createElement("h4",null,"router: /server"),l.default.createElement("h4",null,"server state: ",e.serverActive?"online":"offline"),l.default.createElement(f.Link,{to:"/"},"Go to /"))}}]),r}(),o.propTypes={ServerStore:c.default.object.isRequired},n=u))||n)||n;t.default=b,e.exports=t.default},419:function(e,t,r){}}]);