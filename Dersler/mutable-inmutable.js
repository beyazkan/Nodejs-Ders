// mutable - inmutable -> (Değiştirilebilir / Değiştirilemez)
// number - string

var data = {
    name: "Ali",
    age: 19
};

// data.y = 3

// preventExtensions - Büyümesini Engelleme
// Object.preventExtensions(data);
// data.x = 5;
// delete data["name"];
// isExtensible - Büyüyebilir mi?
// Object.isExtensible(data);
//console.log(Object.isExtensible(data));

// seal - Silmeyi Engelleme
// Object.seal(data);
// delete data["name"];

// isSealed - Silinebilir mi?
// console.log(Object.isSealed(data));

// Freeze
Object.freeze(data);
data.x = "Mehmet";

// isFrozen - Dondurulmuş mu?
console.log(Object.isFrozen(data));

console.log(data);