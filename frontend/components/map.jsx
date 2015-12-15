/* global google */
var React = require('react');
var ReactDom = require("react-dom");
var ApiUtil = require("../util/api_util.js");
var BenchStore = require("../stores/bench.js");

var Map = React.createClass({
  getInitialState: function () {
    return (
      { benches: [] }
    );
  },
  componentDidMount: function () {
    var map = ReactDom.findDOMNode(this.refs.map);
    var options = {
          center: {lat: 37.7758, lng: -122.435},
          zoom: 13
        };
    this.map = new google.maps.Map(map, options);
    this.listenerToken = BenchStore.addListener(function () {
      this.setState({benches: BenchStore.all()});
        this.state.benches.forEach(function (el) {
          this.addPlace(el);
          console.log(el);
        }.bind(this));
    }.bind(this));
    this.listenForMove();
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  listenForMove: function () {
    var that = this;
    google.maps.event.addListener(this.map, 'idle', function() {
      var bounds = that.map.getBounds();

      var lats = bounds.O;
      var lngs = bounds.j;

      var coords = [lats.O, lats.j, lngs.O, lngs.j];
      
      ApiUtil.fetchBenches(coords);
    });
  },

  addPlace: function (place) {
    var pos = new google.maps.LatLng(place.lat, place.lng),
        marker = new google.maps.Marker({
          position: pos,
          map: this.map
        });
    marker.addListener('click', function () {
      alert("clicked on: " + place.name);
    });
  },

  render: function () {
    return (
      <div id="map" ref="map"> </div>
    );
  }
});


module.exports = Map;
