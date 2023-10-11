// var list = [1, "test", 3];
// var list2 = [];
// list2 = list;
// list2.concat(list);

// list.push("4");
// list.push(5);

// console.log(list);
// console.log(list[0]);
// console.log(list[1]);
// console.log(list[2]);
// console.log(`Listenin üye sayısı: ${list.length}`);

// list = list.splice(2, 2);
// console.log(list2);
// console.log(`Listenin üye sayısı: ${list2.length}`);

// var test = "merhaba dünya nasılsın?";
// ["merhaba", "dünya", "nasılsın"];
// var response = test.split(" ");

// console.log(response);

// Array Metotları
var list = ["Ahmet" , "Ayşe", "Efe", 1];

// list[1] = "Ece";
// console.log(list);

// includes()
// console.log(list.includes(6));

// indexof() -- İçerik yoksa, -1 sonucu verir.
// console.log(list.indexOf("Ahmet"));
// console.log(list.lastIndexOf("Ahmet"));
// console.log(list.indexOf("Ahmet",1));
// console.log(list.lastIndexOf("Ahmet", 3));

// splice() - slice()
// list.splice(2, 1);
// list.slice(1, 3)
list.splice(2,0, 5,2, "Mehmet");
console.log(list);

