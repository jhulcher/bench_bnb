var ApiActions = require("../actions/api_actions.js");
var BenchStore = require("../stores/bench.js");

var ApiUtil = {
  fetchBenches: function (coords) {
    $.ajax ({
      url: "api/benches",
      method: "GET",
      dataType: "json",
      data: {coords: coords},
      success: function (response) {
        ApiActions.receiveAll(response);
        BenchStore.all();
      }
    });
  }
};

module.exports = ApiUtil;
