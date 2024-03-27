// !Functional programming (FP)

function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`;
    style += `background: ${background};`;
    style += `font-size: ${fontSize};`;
    console.log(message, style);
}
consoleStyler('#1d5c53', '#ede6db', '80px', 'Hello world!');

// ! var, let, const
/*
    var: bien toan cuc
    let: bien cuc bo co the thay doi
    const: bien cuc bo khong the thay doi
*/
// ?var
console.log(message);
var message = "Hello, still running";

// ?let: bien duoc khai bao roi thi khong khai bao lan 2 duoc, chi duoc gan gia tri cho no.
console.log(message);
//let message = "Hello, not running";

//
//let message;
//message = "Hello, still running";
console.log(message);

// ?const: khi khai bao const phai gan gia tri cho no, bien duoc gan gia tri khong the gan tiep.
//const message = "Hello";
console.log(message);

// !Object-oriented programming (OOP)
var items = {
    name : 'apple',
    price : 18,
    quantity: 100,
    totalPrice : function (){
        return this.price * this.quantity;
    }
}
console.log(items.name, ":", items.totalPrice() + "$");

// !Class
class Class{
    constructor(items){
        this.items = items;
    }
    print(){
        console.log("This items");
    }
}

// khoi tao doi tuong
var class1 = new Class();
class1.print();


// ? Ke thua & da hinh
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings() // ke thua
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"
console.log(new Date());

// ! Class train
class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.

//!
// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        return this.energy += 10;
    }
    doSomeThingFun() {
        return this.energy -= 10;
    }
}
// Task 2: Code a Worker class
class Worker extends Person{
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    sleep() {
        super.sleep();
    }
    doSomeThingFun() {
        super.doSomeThingFun();
    }
    goToWork() {
        return this.xp += 10;
    }
} 
// Task 3: Code an intern object, run methods
function intern() {
    let intern = new Worker("Bob", 21, 110, 0, 10);
    intern.goToWork();
    return intern;
}

// Task 4: Code a manager object, methods
function manager() {
    let manager = new Worker("Alice", 30, 120, 100, 30);
    manager.doSomeThingFun();
    return manager;
}

//Run code
var tom = new Person();
console.log(tom.name, tom.age, tom.energy);
console.log(intern());
console.log(manager());

// ! Data structure: object, array, maps, sets
// ?Set: Loc gia tri duy nhat
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

// ?Map
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers); // Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}
bestBoxers.get(1); // 'The Champion'

// Three dots
var three = [1, 2, 3];
console.log(...three);