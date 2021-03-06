var AppDispatcher = require("../dispatcher/dispatcher.js");
var BenchConstants = require("../constants/bench_constants");

var ApiActions = {
  receiveAll: function (benches) {
    AppDispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  }
};

module.exports = ApiActions;
