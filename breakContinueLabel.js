// break - continue - label

// Break Statement

// for(var i = 0; i < 10; i++){
//     if(i == 5) break;
//     console.log(i);
// }

// console.log("Bitti");

// Continue Statement

// for(var i = 0; i < 10; i++){
//     if(i == 5) continue;
//     console.log(i);
// }

// console.log("Bitti");

// var ages = [15, 19, 21, 13, 27];

// for(age of ages){
//     if(age < 18) continue;
//     console.log(age);
// }

// Label
ilk_dongu:
for(var i = 0; i < 10; i++){
    for(var j = 0; j < 10; j++){
        if(j == 5) continue ilk_dongu;
        console.log(j);
    }
    console.log(`I Değeri: ${i}`);
}