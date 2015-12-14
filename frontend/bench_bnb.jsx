var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require("./util/api_util.js");
var Index = require("./components/index.jsx");
var BenchStore = require("./stores/bench.js");

ReactDOM.render(

  <div>
    <Index/>
  </div>,
  
  document.getElementById("root")

);
