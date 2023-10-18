// for in
var nesne = {
    "a" : 1,
    "b" : 2,
    "c" : 3
}

// for(var key in nesne){
//     console.log(key, nesne[key]);
// }

for(var key in nesne){
    if(key == "b") delete nesne["c"];
}

console.log(nesne);