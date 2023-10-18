// var data = {name: "Ahmet"};
// var data2 = data;

// data2.name = "Mehmet";
// console.log(data);
// console.log(data2);

// var data = {name: "Ahmet"};
//var data2 = {...data};
// var data2 = Object.assign(data);
// data2.name = "Mehmet";
// console.log(data);
// console.log(data2);

// Assing
//Object.assign();

// Deep Copy
var data = {
    name: "Ahmet",
    address:{
        street: "X Street",
        no: 5
    }
};

var data2 = JSON.parse(JSON.stringify(data));
data2.name = "Mehmet";
data2.address.street = "Y Street";

console.log(data);
console.log(data2);