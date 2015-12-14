var Store = require("flux/utils").Store;
var BenchConstants = require("../constants/bench_constants.js");
var AppDispatcher = require("../dispatcher/dispatcher.js");

var _benches = [];
var BenchStore = new Store(AppDispatcher);


var resetBenches = function(benches) {
  _benches = benches;
};

BenchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
      case BenchConstants.BENCHES_RECEIVED:
        resetBenches(payload.benches);
        BenchStore.__emitChange();
        break;
  }
};

BenchStore.all = function () {
  return _benches.slice(0);
};


window.BenchStore = BenchStore;


module.exports = BenchStore;
