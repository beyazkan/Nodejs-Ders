// Objects
var user = {
    name: "Mustafa Oğuz",
    age: 34,
    address: {
        street: "X street",
        no: 3
    },
    test(){
        console.log("test!")
    }
};

console.log(user);
// console.log(user.name);
// console.log(user.age);
// console.log(user["name"]);
// console.log(user["age"]);
// console.log(user.address);
// console.log(user.address.street);
// console.log(user.address.no);
// user.test();

// var input = "address"
// delete user[input];
// delete user.age;
// console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.values(user)[1]);
console.log(Object.entries(user)[1]);
console.log(Object.entries(user)[1][[1]]);