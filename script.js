// Sub Classes

// ES5
function PersonES5(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

PersonES5.prototype.sayHi = function(){
    return `Hello I'm ${this.firstname} ${this.lastname}`;
}

function CustomerES5(firstname, lastname, phone, username){
    PersonES5.call(this, firstname, lastname);
    this.phone = phone;
    this.username = username;
}

CustomerES5.prototype = Object.create(PersonES5.prototype);

let customer = new CustomerES5('Sena', 'Turan', '1234567', 'sena.turan');

console.log(customer.sayHi());
console.log(customer);

// ES6
class PersonES6{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    sayHi(){
        return `Hello I'm ${this.firstname} ${this.lastname}`;
    }
}

class CustomerES6 extends PersonES6{
    constructor(firstname, lastname, phone, username){
        super(firstname, lastname);
        this.phone = phone;
        this.username = username;
    }

    static getTotal(){
        return 1000;
    }
}

let customer1 = new CustomerES6('Volkan', 'Yükselen', '1234567', 'volkan.yukselen');

console.log(customer1.sayHi());
console.log(customer1);
console.log(CustomerES6.getTotal());