/* 
    ?Variable : biến 
    - var 
*/

var variable = "Hello world!"
//console.log(variable);

/*
    ?Data type : loai du lieu
    1. string
    2. number
    3. boolean : True or False
    4. null
    5. undefined
    6. bigint
    7. symbol
*/

var num = 3000;
//console.log(variable, num);

/*
    ?Arithmetic Operators : toan tu so hoc
    + addition
    - subtraction
    * multiplication
    / division
    ** mu 
    % modulo: tra ve phan du
    += ghep cong



    ?comparison Operators : toan tu so sanh
    > greater than
    < less than
    == equal to
    === equal to value: return true or false
    != not equal to
    !== not equal to value: return true or false

    ?Logical Operators : toan tu logic
    && (va): ca 2 ve deu True
    || (hoac): 1 trong 2 True
    ! (not): tra ve false neu ket qua (result) true

    True/False
*/

//console.log(2>3);


// ! Condition : if, else, else if, switch
var a = 1, b = 2, c = 3;
if (a > b && a < c) {
    console.log("a > b & < c");
}else{
    console.log("Something went wrong");
}

var month = 12;
switch (month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Default");
        break;
}

// ! Loop: vong lap : for, while

for (var i = 0; i < 10; i++) {
    console.log(i);
}

var i = 0;
while(i < 10) {
    console.log(i);
    i+=1;
}

for (var i = 1; i < 11; i++){
    if(i == 1){
        console.log("Gold medal");
    } else if(i == 2){
        console.log("Silver medal");
    } else if(i == 3){
        console.log("Bronze medal");
    } else {
        console.log(i);
    }
}

// ! Object & For of
/*
    Object.keys(obj)
    Object.values(obj)
    Object.entries(obj)
*/

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}

//! Assignment
// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
function logDairy() {
    for (var dr of dairy) {
        console.log(dr);
    }
}
logDairy();

// Task 2
const animal = {
    canJump: true
};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
function birdCan() {
    for (var key of Object.keys(bird)) {
        console.log(`${key}: ${bird[key]}`);
    }
}
birdCan();

// Task 3
function animalCan() {
    for (var b in bird) {
        console.log(`${b}: ${bird[b]}`);
    }
}
animalCan();