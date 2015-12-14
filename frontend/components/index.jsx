var React = require("react");
var ReactDom = require("react-dom");
var ApiUtil = require("../util/api_util.js");
var BenchStore = require("../stores/bench.js");

var Index = React.createClass({
  getInitialState: function () {
    return (
      {benches: []}
    );
  },

  componentDidMount: function () {
    BenchStore.addListener(function () {
      this.setState({benches: BenchStore.all()});
    }.bind(this));
    ApiUtil.fetchBenches();
  },

  render: function () {
    return (
      <ul>
        {this.state.benches.map (function (bench, i) {
          return (
            <li key={i}>
              { bench.description }
              <br></br>
              { bench.lat }
              <br></br>
              { bench.lng }
            </li>
          );
        })}
      </ul>
    );
  }
});


module.exports = Index;
