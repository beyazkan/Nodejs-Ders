// Modül Kavramı



// Core Modüller
// var fs = require("fs");
// fs.readdirSync();
// var web = require("http");
// web.createServer();
// var os = require("os");
// console.log(os.version());

// Third Party Modüller - NPM -> Node Package Manager
// npm init
// npm install express
// var express = require("express");

// Local Modüller
// Kendi oluşturduğumuz dosyaların dahil edilmesi.
var data = require("./own-Module.js");
// console.log(data.isim_al());
// console.log(data.mail_al());
console.log(data.getMail())
// ES - CommonJS
