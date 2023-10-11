// map
// var liste = ["Ali", "Eren", "Ahmet", "Mehmet"];
// var result = liste.map((e, i) => `${i + 1}.${e}`).join("\n");
// console.log(result);

// find - findexIndex
// var liste = ["Ali Eren", "Ahmet", "Mehmet"];
// var result = liste.find(e => e.length < 7)
// console.log(result);

// var liste = ["Ali Eren", "Ahmet", "Mehmet"];
// var result = liste.findIndex(e => e.length < 7)
// console.log(result);

// Filter
//var ages = [15,19,25,11,17,8,35];
// ages = ages.filter(e => e >= 18);
// console.log(ages);

// var nesne = {
//     "1": 15,
//     "3": 7,
//     "8": 24,
//     "9": 32
// };
// var ages = Object.entries(nesne).filter(e => e[1] >= 18);
// nesne = Object.fromEntries(ages);
// console.log(nesne);

// Sort
// var liste = [3,1,8,4,2,7];
// liste = liste.sort();
// console.log(liste);

// var liste = [3,1,"bac", "bca", "abc","dba", 7,5];
// liste = liste.sort();
// console.log(liste);

// var liste = [3,1,7,5];
// liste = liste.sort((a,b) => b-a);
// console.log(liste);

// var obj = {
//     "1" : 5,
//     "2" : 3,
//     "3" : 7,
//     "4" : 6,
// }
// result = Object.entries(obj).sort((a, b) => a[1] - b[1]);
// console.log(result);
// obj = Object.fromEntries(result)
// console.log(obj);

var list = ["atwqpıy", "abc", "dbas", "ıoqwyrsd", "oıauwsytqouqw6yt"];
list = list.sort((a,b) => b.length - a.length);
console.log(list);