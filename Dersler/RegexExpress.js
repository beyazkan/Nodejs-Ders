// Regular Expression (Regex) - Düzenli İfadeler
// var a = 
// E-Posta örneği : adiniz.soyadiniz@hotmail.com
// Telefon örneği : +905001112233
// replace - replaceAll - split

var text = "atestasd test asdtest";

// var pattern = /test/g;

// for(let value of text.matchAll(pattern)){
//     console.log(value);
// }

var pattern = /test/;

// Bulursa bulunan index, bulamazsa -1 değeri veriyor.
console.log(text.search(pattern));