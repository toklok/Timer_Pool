var rpiGpio = require('rpi-gpio');
var onoff = require('onoff').Gpio;


var filter = new Gpio(29, 'out', {
    setEdge
});

filter.watch(cb);

var cb = function () {
  console.log('ran');
};

console.log('works');