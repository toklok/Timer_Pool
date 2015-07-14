
'use strict';

var koa = require('koa');
var route = require('koa-router')();
var render = require('koa-ejs');
var path = require('path');
var koaBody = require('koa-body')();
var CronJob = require('cron').CronJob;

var app = koa();



var filters = {
    format: function (time) {
        return time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate();
    }
};

// Always render before routes, it causes funky errors.

render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'template',
    viewExt: 'html',
    cache: false,
    debug: true,
    filters: filters
});

route.get('/timers', function * ()
{

    /*var result = yield r.table(config.table).run();

*/
    yield this.render('content', {});
})

route.post('/new', koaBody,
    function * (next) {
    console.log(this.request.body);
    // => POST body
    console.log(this.request.body.title);

    console.log(this.request.body.hour);

    var hour = this.request.body.hour;

    var minute = parseInt(this.request.body.hour) + 1;



    console.log(hour);

    console.log(minute);


    //console.log(minuteGet(6));

    try {

        new CronJob('*/'+hour+' * * * *', function() {
            console.log('turn on');
        }, null, true, 'America/Los_Angeles');

        new CronJob('*/'+minute+' * * * *', function() {
            console.log('turn off');
        }, null, true, 'America/Los_Angeles');
    }


    /*try {
        yield r.table(config.table).insert(this.request.body);
    }

*/
    catch(e) {
        console.log('cron patern invalid');
    }



    this.redirect('/timers');
})

route.get('/', function * ()
{

    this.body = 'works';

    /*
    try {
        var result = yield r.table(config.table).get(1);

        this.body = JSON.stringify(result);
    }


    catch (e) {
        this.status = 500;
        this.body = e.message || http.STATUS.CODES[this.status];
    } */
})

app.use(route.routes());

app.listen(2133);
console.log('l4istening on port 2115');