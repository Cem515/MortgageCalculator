(function() {
  'use strict';

  angular
    .module('app', []);
})();

(function() {
  'use strict';

  angular
    .module('app')
    .controller('MortgageController', MortgageController);

  MortgageController.$inject = [];

  /* @ngInject */
  function MortgageController() {
    var vm = this;
    vm.balance = 0;
    vm.apr = 0;
    vm.years = 0;
    vm.month = 12;


  vm.calculateMortgage = function() {

      var mir = ((vm.apr/100)/vm.month);
      var nop = (vm.years*vm.month);
      var cir = Math.pow((1+mir),nop);
      var iq = (mir*cir)/(cir-1);
      var final = (vm.balance*iq).toFixed(2);
      console.log(final);
    }
  }
})();
