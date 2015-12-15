var React = require('react');
var ReactDOM = require('react-dom');
var ApiUtil = require("./util/api_util.js");
var Index = require("./components/index.jsx");
var BenchStore = require("./stores/bench.js");
var Map = require("./components/map.jsx");
var Search = require("./components/search.jsx");

ReactDOM.render(
  <Search></Search>,
  document.getElementById("root")
);
