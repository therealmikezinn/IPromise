# IPromise

A sample promise Implementation For Learning Purposes


## Usage

```js
function example(){
    return new IPromise((resolve, reject) => {
        return resolve("It Resolved");
    });
}

example()
.then(result => console.log("Result"))
.catch(err => console.log("Error"))
.finally(_ => console.log("Cleanup"));
```