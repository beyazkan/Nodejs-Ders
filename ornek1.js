// function call_back_function(result){
//     var text = (result == true) ? "Girilen sayı çift" : "Girilen sayı tek";
//     console.log(text);
// }

// function cift_mi(x, callback){
//     var result = (x % 2 == 0) ? true : false;
//     callback(result);
// }

// cift_mi(9, call_back_function)

function recursive_fac(x){
    if(x == 0) return 1;
    else return x * recursive_fac(x-1)
}

console.log(recursive_fac(4));