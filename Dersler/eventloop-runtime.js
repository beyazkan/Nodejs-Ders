import process from "process"

// Runtime environment
// console.log("a");

// setTimeout(() => {
//     console.log("Timeout");
// }, 0);

// setImmediate(() => {
//     console.log("Immediate");
// });

// process.nextTick(()=>{
//     console.log("callback");
// });

var bar;

function test(){
    process.nextTick(()=>{
        console.log(bar);
    });
}

test();
bar = 3;