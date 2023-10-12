// setTimeout
//var time = Date.now();

var timeout = setTimeout(() => {
    //console.log(Date.now() - time);
    console.log("test");
}, 5000);

clearTimeout(timeout);
console.log("test");

var i = 0;
// setInterval
function test(){
    console.log("test");
    if(i > 5){
        clearInterval(interval);
    }
    i++;
}

var interval = setInterval(test, 3000)