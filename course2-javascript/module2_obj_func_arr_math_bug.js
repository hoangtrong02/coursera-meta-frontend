//? Object
var object = {name: "babylon", version: "1.1", type: "Number"};
object.color = "red";
object["size"] = 30;
console.log(object);
console.log("Version:", object.version);

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

//? Function
function myFunction(a, b) {
    return a + b;
}
console.log(myFunction(10, 15));

//? Array
function myArray(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match){
            console.log("Found " + match, "at index " + (i+1), "of " + word); 
        } else{
            console.log("Not found " + match, "at index " + (i+1), "of " + word);
        }
    }
}
myArray("test", "t");

/*
Array :
    push() : add to last
    pop() : delete last
*/
function arrayBuilder(a, b, c) {
    var arr = [];
    arr.push(a);
    arr.push(b);
    arr.push(c);
    return arr;
}
var array = arrayBuilder("a", "b", "c");
console.log(array);

//? Math
/*
Lam tron so:
    Math.ceil(): lam tron len so nguyen gan nhat
    Math.floor(): lam tron xuong so nguyen gan nhat
    Math.round(): lam tron len so nguyen gan nhat neu > 0.5 nguoc lai lam tron xuong
    Math.trunc(): cat so thap phan, giu lai so nguyen

So hoc va giai tich:
    Math.pow(2,3)  - tính số  2  lũy thừa  3 , kết quả là  8 
    Math.sqrt(16)  - tính căn bậc hai của  16 , kết quả là  4 
    Math.cbrt(8)  - tìm căn bậc ba của  8 , kết quả là  2 
    Math.abs(-10)  - trả về giá trị tuyệt đối, kết quả là  10 
    Các phương pháp logarit:  Math.log() ,  Math.log2() ,  Math.log10() 
    Trả về giá trị tối thiểu và tối đa của tất cả các dữ liệu đầu vào:  Math.min(9,8,7)  trả về  7 ,  Math.max(9,8,7)  trả về  9 .
    Các phương pháp lượng giác:  Math.sin() ,  Math.cos() ,  Math.tan() , v.v.

Hang so:
    Số PI:  Math.PI  xấp xỉ 3,14159
    Hằng số Euler:  Math.E  xấp xỉ 2,718
    Logarit tự nhiên của 2:  Math.LN2 xấp xỉ 0,693   

String cheat
    charAt() 
    indexOf() 
    concat() 
    split() 
    lastIndexOf() 
    toLowerCase()  
    toUpperCase() 
*/

//? Object Methods
/*//example of adding properties and methods to an object
    var car = {};
    car.mileage = 98765;
    car.color = "red";
    console.log(car);
    car.turnTheKey = function() {
        console.log("The engine is running")
    }
    car.lightsOn = function() {
        console.log("The lights are on.")
    }
    console.log(car);
    car.turnTheKey();
    car.lightsOn()
*/

/* 
?Bug - Error
!Try - catch
    ReferenceError : Lỗi tham chiếu
        !console.log(username);
        !Uncaught ReferenceError: username is not defined
    SyntaxError : Lỗi cú pháp
        !var a "there's no assignment operator here";
        !Uncaught SyntaxError: Unexpected string
    TypeError : Loại Lỗi
        !"hello".pop() // Uncaught TypeError: "hello".pop is not a function
    RangeError : Phạm vi Lỗi
        !(10).toString(2); // '1010'
        !(10).toString(8); // 12
        !(10).toString(100); // Uncaught RangeError: toString() radix argument must be between 2 and 36
    AggregateError : Lỗi tổng hợp
    Error : Lỗi
    InternalError : Lỗi bên trong
    URIError : Lỗi URI
*/

function addTwoNums(a, b){
    try{
        if(typeof(a) != "number"){
            throw new ReferenceError("The first argument is not a number")
        } else if(typeof(b) != "number"){
            throw new ReferenceError("The second argument is not a number")
        } else{
            console.log(a+b);
        }
    } catch(err){
        console.log("Error!", err);
    }
}
addTwoNums(5, 5);
console.log("It still works!")

try {
    throw new Error();
    console.log('Hello');
  } catch(err) {
    console.log('Goodbye');
  }

var str = "Hello";
console.log(str.match("jello"));

try {
    Number(5).toPrecision(300)
} catch(e) {
    console.log("There was an error")
}
