var a = "test";
var b = 'Merhaba';
var c = `${a} ${b}, dünyadan sevgilerle`;
// console.log(c);

// String'lerin belirli karakterini alma
var a = "test";
// console.log(a[0]);
// console.log(a.charAt(1));

// Belirli bir karakterin indexini bulma
var a = "Merhaba Dünya";
// console.log(a.indexOf("a"));
// console.log(a.indexOf("a", 6));
// console.log(a.lastIndexOf("a"));
// console.log(a.lastIndexOf("a", 11));

// Kontrol
// console.log(a.startsWith("Merhaba"));
// console.log(a.startsWith("haba", 3));

// console.log(a.endsWith("Dünya"));
// console.log(a.endsWith("Dün", 11));

// İçerip içermeme Kontrolü
// console.log(a.includes("Dün"));
// console.log(a.includes("haba"));

// String parçalama
// console.log(a.slice(1,6));
// var b = "!selam";
// console.log(b.slice(1));
// console.log(b.substring(1, 4));
// console.log(b.substring(1));

// Büyük Küçük Harf Çevirme
// console.log(a.toUpperCase());
// console.log(a.toLocaleLowerCase());

// String'in başındaki ve sonundaki boşlukları silme
var a = "   test   ";
a = a.trim().toUpperCase();
console.log(a);
console.log(a.length);