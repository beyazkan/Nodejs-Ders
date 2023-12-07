var map = new Map();
// Kullanılmayan Yöntem
//map["a"] = 1;
map.set("a", 1);
map.set("b", 2);

//map.delete("a");

// console.log(map.get("b"));
// Has - Mapte var mı?
// console.log(map.has("b"));
// console.log(map.has("c"));
// Map boyutu
// console.log(map.size);

// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());
// console.log(Array.from(map.keys()));
// console.log([...map]);
// console.log([...map.keys()]);
// console.log([...map.values()]);
// console.log([...map.entries()]);
//console.log(map);
// Map Silinmesi
// map.clear();
// console.log(map);

//map.forEach((value, key) => { console.log(key, value)});

// for(var x of map){
//     console.log(x);
// }

// for(var [key, value] of map){
//     console.log(key, value);
// }

// var map = new Map([["a",1], ["b", 2]]);
// console.log(map);

// var map = new Map([["a",1], ["b", 2]]);
// console.log(Object.fromEntries(map));

// var map = new Map([["a",1], ["b", 2]]);
// var map2 = map;
// map2.set("a", 3)

// console.log(map, map2);

// var map = new Map([["a",1], ["b", 2]]);
// var map2 = new Map(map);
// map2.set("a", 3)

// console.log(map, map2);

// const test = function(){};

// var a = new Map();
// a.set({b:2}, 1);
// a.set(function test(){},2);
// a.set(test, 4)
// console.log(a);
// console.log(a.get(test));

var a = new Map();

a.set("b", 1);
a.set("d", 1);
a.set("a", 1);

console.log(a);