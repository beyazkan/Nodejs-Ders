// Classes

// ES5

var PersonES5 = function(name, job, yearOfBirth){
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}

PersonES5.prototype.calculateAge = function(){
    return 2018 - this.yearOfBirth;
}

var yigit = new PersonES5('Yiğit', 'Student', 2010);

console.log(yigit.calculateAge());
console.log(yigit);

// ES6

class PersonES6 {
    constructor(name, job, yearOfBirth){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge(){
        return 2018 - this.yearOfBirth;
    }

    static sayHi(){
        console.log('Hello there');
    }
}

let emel = new PersonES6('emel', 'teacher', 1989);

// console.log(emel.calculateAge());
// console.log(emel);

// PersonES6.sayHi();

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const d1 = new Point(10,10);
const d2 = new Point(20,20);

console.log(Point.distance(d1, d2));