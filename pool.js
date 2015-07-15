var Gpio = require('onoff').Gpio,
    filter = new Gpio(24, 'out', 'both'),
    relay = new Gpio(4, 'out', 'none');


//Watches filter for changes and acts on those changes



filter.watch(function (err, value) {

    if (err) {
        throw err;
    }

    if (value <= 1) {

        //On

        relay.setDirection('in');

    }

    if (value >=1) {

        //Off

        relay.setDirection('out');

        console.log('off');

    }

});