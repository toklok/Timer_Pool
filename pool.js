var Gpio = require('onoff').Gpio,
    filter = new Gpio(24, 'out', 'both'),
    relay = new Gpio(4, 'out', 'none');


//Watches filter for changes and acts on those changes



console.log('works');