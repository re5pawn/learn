// some base class
function Machine() {
  var enabled = false;

  this.enable = function() {
    enabled = true;
  };

  this.disable = function() {
    enabled = false;
  };
}

function CoffeeMachine(power) {
  // inherit
  Machine.call(this);
  // or
  //Machine.apply(this, arguments);

  var waterAmount = 0;

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

}

var coffeeMachine = new CoffeeMachine(10000);

coffeeMachine.enable(); // parent's method
coffeeMachine.setWaterAmount(100);
coffeeMachine.disable(); // parent's method
