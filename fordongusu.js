// for loop

// for(var i = 0; i < 10; i++){
//     console.log(`Merhaba Dünya: ${i}`);
// }
// var text = "Hello World!";
// for(var i = 0; i < text.length; i++){
//     console.log(text[i]);
// }

// for of
// var liste = ["İstanbul", "Ankara", "İzmir"];
// for(var city of liste){
//     console.log(city);
// }

var count = 100;

var text = "";
for(var i = 1; i <= count; i++){
    var add_text = "*".repeat(i);
    text += `${add_text}\n`;
}

console.log(text);