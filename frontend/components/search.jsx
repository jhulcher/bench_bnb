/* global google */
var React = require('react');
var ReactDom = require("react-dom");
var ApiUtil = require("../util/api_util.js");
var BenchStore = require("../stores/bench.js");
var Map = require("./map.jsx");
var Index = require("./index.jsx");

var Search = React.createClass({

  render: function () {
    return (
      <div>
        <Index></Index>
        <Map></Map>
      </div>
    );
  }

});

module.exports = Search;
