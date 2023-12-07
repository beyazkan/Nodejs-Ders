//var kume = new Set(["a", "b", "c", "d", "b", "a"]);
// var kume = new Set();
// kume.add("a");
// kume.add(1);
// kume.add("c");
// kume.delete("a");
// kume.add("a");
// kume.add("b");
// console.log(kume);
// console.log(kume.size);
// console.log(Array.from(kume)[1]);
// console.log(kume.keys());
// console.log(kume.values());
// console.log(kume.entries());

// console.log(kume.has("a"));

// const kume = new Set("Test");

// console.log(kume);

var a = {
    b: 1,
    c: 2,
    d: 1,
    e: 5
};

var result = Array.from(new Set(Object.values(a)));
console.log(result);