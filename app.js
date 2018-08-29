console.log("hello world");
//Here is a comment
/*double line*/
//Value or data type
console.log("Hello from Javascript");
console.log("Lets do some math");
console.log(4 + 7);
console.log(12 / 0);
console.log("Goodbye");


let a = 3.14;
console.log(a);

const temp1 = 34.3;
const temp2 = 76.9;
const temp3 = 37.1;
console.log (temp1, temp2, temp3);

let c = 0; //C contains 0
c+=1;// C contains 1
c++; // C contains 2
console.log(c); //Shows 2

let num1 = 0;
{num1 = 1; //ok: num1 is declared in the parent block
const num2 = 0;}
console.log(num1);

//Template literal
const country = "France";
console.log(`I live in ${country}`);
const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`);

console.log(4 + 5);
console.log("4 + 5");
console.log("4" + "5");
console.log(4 + "5");
const g = "five" * 2;
console.log(g);

const h = "5";
console.log(h+1);
const i= Number(h);
console.log (i + 1);
const j = 6;
console.log("5" + String(j));
console.log(Number("dog"));

let num = 0;
let str = "0";

console.log(num ===num); //true
console.log (str ===str); //true
console.log(num === str); //false
console.log(num == str); //true

const z = "abc";
switch (z) {
    case "abc":
    console.log ("x = abc");
   // break;
    case "def":
    console.log("x = def");
    break;

}
console.log("dog");
//changes
console.log("cat");












