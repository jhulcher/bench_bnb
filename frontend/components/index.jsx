var React = require("react");
var ReactDom = require("react-dom");
var ApiUtil = require("../util/api_util.js");
var BenchStore = require("../stores/bench.js");



var Index = React.createClass({

  componentDidMount: function () {
    BenchStore.addListener();
    ApiUtil.fetchBenches();
    this.setState({benches: BenchStore.all()});
  },


  render: function() {
    return (
      <Index></Index>
    );
  }

});


module.exports = Index;
