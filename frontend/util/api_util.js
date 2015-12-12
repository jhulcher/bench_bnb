var BenchStore = require("../stores/bench.js");

var ApiUtil = {
  fetchBenches: function () {
    $.ajax ({
      url: "api/benches",
      method: "GET",
      dataType: "json",
      success: function (response) {
        BenchStore._benches.push(response);
      }
    });
  }
};

window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
