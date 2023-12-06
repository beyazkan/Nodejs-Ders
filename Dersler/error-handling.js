// Operational Errors - Programmer Errors
// Throw - Callback - Promise Rejection - EventEmitter

// Error Object
// var error = new Error("Test Hatası!");
// console.log(error.message, error.name);
// Hatanın detayı vererek gösteriyor...
// console.log(error.stack);

// RangeError
//var a = 3.14;
// console.log(a.toFixed(200));
// console.log(a.toFixed(1));

// ReferenceError
// function test(){
//     var a = 3;
// }
// test();
// console.log(a);

// TypeError
// var obje = {"name": "Ali Eren"};
// console.log(obje.age.a);

// SyntaxError
// .
// console.log(Math.max(1, 3, 5);

// Throw Kullanımı

// throw new Error("Test Hatası");
// console.log("a");

// Try-Catch-Finally
// try{
//     console.log("Başladı!");
//     throw new Error("Test Hatası");
// }catch(e){
//     console.log("Bir Hata Oluştu!");
// }finally{
//     console.log("Finally");
// }
// console.log("a");

// EventEmitter - Try-Catch bloğu tarafından yakalanmayan hatalar.
// process.on("uncaughtException", e=>{
//     console.log("Bir Hata Yakalandı!");
// })

// try {
//     throw new Error("Test");
//     console.log("a");
// } catch (e) {
//     console.log("Hata Catch tarafından yakalandı!");
// }

// Callback
// function getUserData(id, callback){
//     var user = undefined;
//     if(!user) return callback(new Error("User not found!"));

//     callback(null, user);
// }

// getUserData(1, (err, user) => {
//     if(err) console.log(err)

//     console.log(user);
// });