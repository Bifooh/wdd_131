
const PI = 3.14159;
let radius = 3;

let area = PI * radius * radius;

console.log("The area of the circle is: " + area);

///////////////////////////////////////////////////////


const one = 1;
const two = '2';
console.log(one + two); //outputs 12, not 3, because of type coercion

///////////////////////////////////////////////////////
                        
let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed with in the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block