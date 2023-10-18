// Object
// var user_id = "854654585";
// var data = { name:"Ece", age:20};

// var users = {
//     "1231231231": {name: "Ali", age:11},
//     "9876546544": {name:"Ahmet",age:24},
//     [user_id] : data
// };

// var data = {
//     name : "Ali Eren",
//     age : 19,
//     address : {
//         street : "X Street",
//         no : 3
//     }
// }

// veri gelmeme ihtimaline karşı ?. kullanımı
// var street = (data.address?.street) ? data.address.street : "Adres Bulunamadı!";
// var street = (data?.["address"]?.["street"]) ? data.address.street : "Adres Bulunamadı!";

// console.log(street);

// Array to Objects
// var data = [['name', 'Ali Eren'], ['age', 19]];
// var nesne = Object.fromEntries(data);

// console.log(nesne);

// Objects Merge (Nesne Birleştirme)
// var data1 = {name:"Ali"};
// var data2 = {age:19};

// var result = {...data1,...data2};
// console.log(result);

// var data1 = {name:"Ali"};
// var data2 = {name:"Mehmet", age:19};

// var result = {...data1,...data2};
// console.log(result);

// var data1 = {name:"Ali"};
// var data2 = {name: "Mehmet", age:19};

// var result = Object.assign(data2, data1);
// console.log(result);