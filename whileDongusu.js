// While Döngüsü

// var i = 0;
// while(i < 5){
//     console.log(i);
//     i++;
// }

// var number = 1;
// var found_list = [];

// for(var i = 0; i < 5; i++){
//     while(number % 7 !=0 || number % 9 != 0){
//         number++;
//     }

//     found_list.push(number);
//     number++;
// }
// console.log(found_list);

// var i = 0;
// do{
//     console.log(i);
//     i++;
// }while(i < 5)

var kazananlar = [1, 5];

do{
    var random = Math.floor(Math.random() * 10);
}while(kazananlar.includes(random));

kazananlar.push(random);

console.log(kazananlar);