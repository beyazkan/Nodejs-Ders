// reduce()
// var list = [1,3,6,9,11];
// var result = list.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
// console.log(result);

// var list = ["a", "b", "c", "a", "d", "e", "b", "b", "a", "c", "f"];
// var result = list.reduce((previousValue, currentValue) => {
        // if(!(currentValue in previousValue)) previousValue[currentValue] = 1
        // else previousValue[currentValue] += 1
//     previousValue[currentValue] = (currentValue in previousValue) ? previousValue[currentValue]+1:1
//     return previousValue;
// }, {});

// console.log(result);

// var array = [1, 3, 1, 7, 3, 2, 8];

// var result = array.reduce((response, current) => {
//     if(!response.includes(current)) response.push(current);
//     return response;
// }, []);

// console.log(result.sort());

// Some - koşulu sağlayan bir eleman var mı?
// var liste = [5,8,10,14,20,3];
// var result = liste.some(e  => e > 18);
// console.log(result);

// Every() - hepsi koşulu sağlıyor mu?
var liste = [5,8,10,14,20,3];
var result = liste.every(e  => e > 18);
console.log(result);
