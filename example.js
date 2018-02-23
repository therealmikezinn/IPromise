const IPromise = require('./');

function sampleResolveOne(){
    return new IPromise(function(resolve, reject){
        resolve('test');
    });
}

function sampleResolveTwo(){
    return new IPromise(function(resolve, reject){
        resolve('TWO');
    });
}


/*
 * Usage
 *
 */

sampleResolveOne().then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});

/*
 * Chaining
 *
 */

IPromise.resolve("Temp")
.then(result => {
    console.log(result);
    return IPromise.resolve("RESULT TWO");
})
.then(result => {
    console.log(result);
})
.catch(err => {
    console.log(err);
});


/*
 * Example IPromise.all
 *
 */

IPromise.all([sampleResolveOne(), sampleResolveTwo(), 2])
.then(([one, two, three]) => {
    console.log(one);
    console.log(two);
    console.log(three);
}).catch(err => {
    console.log(err);
});

/*
 * Example IPromise.race
 *
 */

IPromise.race([sampleResolveOne(), sampleResolveTwo(), 2])
.then((result) => {
    console.log("Promise.race");
    console.log(result);
}).catch(err => {
    console.log(err);
});