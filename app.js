(function() {
  'use strict';

  angular
    .module('app', []);
})();

(function() {
  'use strict';

  angular
    .module('app')
    .controller('MortgageCalculator', MortgageCalculator);

  MortgageCalculator.$inject = ['$scope'];

  /* @ngInject */
  function MortgageCalculator($scope) {
    var vm = this;
    vm.output = ;
    vm.balance = "0";
    vm.apr = "0";
    vm.years = "0";
    vm.month = "12";

    activate();

    function activate() {

    }
  }
})();
