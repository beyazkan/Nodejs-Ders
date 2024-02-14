let h1 = document.querySelector('h1');
let divs = document.querySelectorAll('div');

let tags = [h1,...divs];

tags.forEach(tag => tag.style.color = 'red');

console.log(tags);