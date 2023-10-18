// Arguments Keyword
// function test(...x){
//     console.log(x[0]);
// }

// test(3,1,2,3,5);

// function test(x){
//     console.log(arguments[0]);
// }

// test(3,1,2,3,5);

// Recursive Function
// function recursive(x){
//     if(x > 0){
//         console.log(x)
//         recursive(x-1);
//     }
// }

// recursive(10);

// Callback Function
// function square(n){
//     return n ** 2
// }
// function test(callback){
//     console.log("Test");
//     var result = callback(2);
//     console.log(result);
// }

// test(square);

// iç içe fonksiyonlar (Nested Functions)
function test(){
    var a = 1;
    function deneme(){
        var b = 2;
        var a = 3;
        console.log(a);
        console.log(b);
    }

    deneme();
}

test();