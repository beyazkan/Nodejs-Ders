// Local Modülleri
// ES - CommonJS
//import data from "./users/userData.js"
//import {userData, time, printName} from "./users/userData.js";
// import * as data from "./users/userData.js";
//import {data1 as a, data2 as b, data3 as c} from "./users/userData.js";

// console.log(userData);
// console.log(time);
// printName();
// console.log(data);
// console.log(data.printName());
// console.log(data.time);
// console.log(data.userData);

// console.log(a);
// console.log(b);
// console.log(c);

// express -> CommonJS
// node-fetch@3 -> ES
// Third Party Modüller
// import fetch from "node-fetch"
// fetch("");
// import express from "express"

// express.Router;

var a = 5;
if(a == 5){
    var response = await import("./users/userData.js");
    console.log(response.IntValue);
}