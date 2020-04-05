'use strict';

function PositionLogger() {
    var position = null;
    var positionsLog = [];
    Object.defineProperty(this, 'position', {
        get: function() {
            console.log('get position called');
            return position;
        },
        set: function(val) {
            position = val;
            positionsLog.push({ val: position });
            console.log('set position called');
        }
    });
    this.getLog = function() {
        return positionsLog;
    }
}

let cat = new Object();
cat.name = 'Sylvester';
cat.age = 3;

console.log(cat.name);
console.log(cat.age);

Object.defineProperty(cat, 'favouriteFood', {
    value: 'Whiskas',
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(cat);

const l = new PositionLogger();
l.position = 123;
console.log(l.position);
console.log(l.getLog());

class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    getName() {
        return this._name;
    }

    getAge() {
        return this._age;
    }

    sayHello() {
        return "Hello " + this._name;
    }
}

class Student extends Person {
    constructor(name, age, facultyNumber) {
        super(name, age);
        this._grades = [];
        this._facultyNumber = facultyNumber;
    }

    getFacultyNumber() {
        return this._facultyNumber;
    }

    sayHello() {
        return super.sayHello() + " with FN: " + this.getFacultyNumber();
    }

    insertGrade(grade) {
        this._grades.push(grade);
    }

    getGrades() {
        return this._grades;
    }
}

const pesho = new Person('Pesho', 22);
const gosho = new Student('Gosho', 22, 62134);
gosho.insertGrade(3.5);
gosho.insertGrade(5);
gosho.insertGrade(4.25);

console.log('Person: ' + pesho.getName());
console.log('Student: ' + gosho.getName());

console.log(pesho.sayHello());
console.log(gosho.sayHello());

gosho.getGrades().forEach(grade => console.log(grade));

class Cup {
    constructor(color = undefined, quantity = 0, capacity = 125) {
        this._color = color;
        this._quantity = quantity;
        this._capacity = capacity;
    }

    fill(quantity) {
        if (this._quantity + quantity > this._capacity) {
            console.log('This cup is gonna overflow.');
            return;
        }
        this._quantity += quantity;
    }

    getQuantity() {
        return this._quantity;
    }
}

let myCup = new Cup;
myCup.fill(120);
console.log(myCup);
myCup.fill(100);
console.log(myCup);