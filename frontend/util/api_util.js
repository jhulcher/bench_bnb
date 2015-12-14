var ApiActions = require("../actions/api_actions.js");
var BenchStore = require("../stores/bench.js");

var ApiUtil = {
  fetchBenches: function () {
    $.ajax ({
      url: "api/benches",
      method: "GET",
      dataType: "json",
      success: function (response) {
        ApiActions.receiveAll(response);
        BenchStore.all();
      }
    });
  }
};

// window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
