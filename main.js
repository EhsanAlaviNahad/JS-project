<!DOCTYPE html>
<html>
<body>

<center>
<img src="https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Logo.png" width="220" height="130" alt="HTML">
</center>
<hr>

<h1 style="color: darkgoldenrod;">What Can JavaScript Do?</h1>

<p id="text0">JavaScript can change HTML content.</p>
<button type="button" onclick='document.getElementById("text0").innerHTML = "Hello JavaScript!"'>Click Me!</button>

<p id="e1">It can change the Size</p>
<button type="button" onclick="document.getElementById('e1').style.fontSize='35px'">Click Me!</button>

<p id="e2">It can also remove HTML Elements</p>
<button type="button" onclick="document.getElementById('e2').style.display='none'">Click Me!</button>

<p id="Text1">Or maybe lets see hidden HTML Elements..</p>
<p id="e3" style="display:none">Hello JavaScript!</p>
<button type="button" onclick="document.getElementById('e3').style.display='block'">Click me too!</button>
<hr>

<h1>Script Syntax</h1>
<p id="demo0"></p>
<script>
document.getElementById("demo0").innerHTML = "My First Javascript With the Script Syntax"
</script>

<head>
<script>
function myfunc() {
    document.getElementById("demo1").innerHTML = "Updated The Text"
}
</script>
</head>
</body>
<hr>

<h1>Using The Function Command</h1>
<p id="demo1" style="font-size: 22px;">Text</p>

<button type="button" onclick="myfunc()">Try It</button>
<hr>

<h1>Equations</h1>

<p id="demo2"></p>

<script>
document.getElementById('demo2').innerHTML = 5 + 6
</script>
<hr>

<h1>Equations using Document.write</h1>
<h3>This should only be used for testing (this removes the entire html document when clicked)</h3>

<button type="button" onclick="document.write(5 + 6)">Try me</button>

<h2>Print This Page</h2>

<button type="button" onclick="window.print()">Print This Page</button>

<p>A <b>JavaScript program</b> is a list of <b>statements</b> to be executed by a computer.</p>
<p id="demo3"></p>
<script>
let x, y, z; //statment 1
x = 5;  //statment 2
y = 6;  //statment 3
z = x + y;  //statment 4
document.getElementById('demo3').innerHTML = 
"The value of z is " + z + ".";
</script>
<hr>

<h2>Semicolons</h2>
<h3>Semicolons separate JavaScript statements.</h3>

<p id="demo4"></p>
<script>
let a, b, c;
a = 5; b = 6; c = a + b;
document.getElementById('demo4').innerHTML = c;
</script>
<hr>

<h2>Code Blocks</h2>
<h3>JavaScript code blocks are written between { and }</h3>

<button type="button" onclick="myfunction()">click me!</button>

<p id="demo5"></p>
<p id="demo6"></p>

<script>
function myfunction() {
    document.getElementById('demo5').innerHTML = "hello World!";
    document.getElementById('demo6').innerHTML = "How are you?"
}
</script>
<hr>

<h2>JavaScript Numbers</h2>
<h3>Number can be written with or without decimals.</h3>

<p id="demo7"></p>

<script>
document.getElementById('demo7').innerHTML = 10.50;
</script>
<hr>

<h2>JavaScript Strings</h2>
<h3>Strings can be written with double or single quotes.</h3>

<p id="demo8"></p>

<script>
document.getElementById('demo8').innerHTML = 'John Doe';
</script>
<hr>

<h3>The charAt() Method</h3>
<p>The charAt() method returns the character at a given position in a string:</p>

<p id="demo35"></p>
<script>
var text = "HELLO WORLD";
document.getElementById('demo35').innerHTML = text.charAt(0);
</script>

<h3>The charCodeAt() Method</h3>
<p>The charCodeAt() method returns the unicode of the character at a given position in a string:</p>

<p id="demo37"></p>
<script>
let text7 = "HELLO WORLD";
document.getElementById("demo37").innerHTML = text7.charCodeAt(0);
</script>
<hr>

<h2>JavaScript Operators</h2>
<b>JavaScript uses arithmetic operators to compute values (just like algebra).</b>

<p id="demo9"></p>

<script>
document.getElementById('demo9').innerHTML = (5 + 6) * 10;
</script>
<hr>

<h2>Javascript Expressions</h2>

<p id="demo10"></p>

<script>
document.getElementById('demo10').innerHTML = "John" + " " + "Doe"; 
</script>
<hr>

<h2>JavaScript Keywords</h2>

<b>Let Keyword</b>
<p id="demo11"></p>
<script>
let e, r;
e = 5 + 6;
r = e * 10;
document.getElementById('demo11').innerHTML = r;
</script>

<h2 style="color: darkcyan;">When to Use var, let, or const?</h2>
<p>1. Always declare variables</p>
<p>2. Always use const if the value should not be changed</p>
<p>3. Always use const if the type should not be changed (Arrays and Objects)</p>
<p>4. Only use let if you can't use const</p>
<p>5. Only use var if you MUST support old browsers.</p>

<h2 style="color: darkcyan;">When to use JavaScript const</h2>
<b>Always declare a variable with const when you know that the value should not be changed.</b>
<p>Use const when you declare</p>
<p>A new Array</p>
<p>A new Object</p>
<p>A new Function</p>
<p>A new RegExp</p>

<h2 style="color: darkcyan;">JavaScript Operators</h2>
<p>The Assignment Operator "=" assigns values</p>
<p>The Addition Operator "+" adds values</p>
<p>The Multiplication Operator "*" multiplies values</p>
<p>The Comparison Operator ">" compares values</p>

<h2>BigInt</h2>
<p id="demo13"></p>
<script>
let bigintnum = BigInt("1234567891234567891234567890");
document.getElementById('demo13').innerHTML = bigintnum;
</script>
<b>Without Bigint:</b>
<p id="demo14"></p>
<script>
let withoutbigint = 1234567891234567891234567890;
document.getElementById('demo14').innerHTML = withoutbigint;
</script>
<hr>

<h2 style="color: darkcyan;">JavaScript Booleans</h2>
<b>Booleans can have two values: true or false:</b>

<p id="demo15"></p>
<script>
let bool0 = 5;
let bool1 = 5;
let bool2 = 6;

document.getElementById("demo15").innerHTML = (bool0 == bool1) + "<br>" + (bool0 == bool2);
</script>

<h2 style="color: darkcyan;">JavaScript Arrays</h2>
<b>Array indexes are zero-based, which means the first item is [0].</b>

<p id="demo16"></p>
<script>
const cars = ["Mercedes","Volvo","BMW"]

document.getElementById('demo16').innerHTML = cars[0] 
</script>

<h2 style="color: darkcyan;">JavaScript Objects</h2>

<p id="demo17"></p>
<script>
const person = {fname : "John", lname : "Doe", age : "17", eyecolor : "Blue"};

document.getElementById("demo17").innerHTML = person.fname + " is " + person.age + " years old.";
</script>
<hr>

<h2>JavaScript Typeof Operator</h2>
<p>The typeof operator returns the type of a variable or an expression.</p>

<p id="demo18"></p>
<script>
document.getElementById('demo18').innerHTML =
typeof  "" + "<br>" + 
typeof "John" + "<br>" + 
typeof "John Doe";
</script>

<b>Typeof for Numbers</b>

<p id="demo19"></p>
<script>
document.getElementById("demo19").innerHTML = 
typeof 0 + "<br>" + 
typeof 314 + "<br>" +
typeof 3.14 + "<br>" +
typeof (3) + "<br>" +
typeof (3 + 4);
</script>
<hr>

<h2>Javascript Functions</h2>
<p>Call a function which performs a calculation and returns the result:</p>

<p id="demo20"></p>
<script>
function myfunc2(p1, p2) {
    return p1 * p2;
}

let result = myfunc2(4, 3)
document.getElementById("demo20").innerHTML = result;
</script>
<hr>

<h2 style="color: darkcyan;">Why Functions?</h2>
<p>With functions you can reuse code</p>
<p>You can write code that can be used many times.</p>
<p>You can use the same code with different arguments, to produce different results.</p>
<hr>

<h2 style="color: darkcyan;">Javascript Object Properties</h2>
<b>Deleting a Property</b>

<p id="demo21"></p>
<script>
const person1 = {
    fname: "John",
    lname: "Doe",
    age: 50,
    eyecolor: "Blue"
};

delete person1.age;

document.getElementById("demo21").innerHTML =
person1.fname + " is " + person1.age + " years old.";
</script>

<b>Accessing Nested Objects</b>

<p id="demo22"></p>
<script>
const myObj = {
    name: "John",
    age: "22",
    mycars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}

document.getElementById('demo22').innerHTML = "John has a " + myObj.mycars.car2
</script>
<hr>

<h2 style="color: darkcyan;">Javascript Display Objects</h2>

<p id="demo23"></p>

<script>
const person2 = {
    name: "John",
    age: 30,
    city: "New York"
}
//display object
document.getElementById('demo23').innerHTML = person2;
</script>
<hr>

<h2>More Javascript Objects</h2>

<p id="demo24"></p>
<script>
const person3 = {
    name: "John",
    age: 30,
    city: "New York"
};

let text = "";
for (let x in person3) {
    text += person3[x] + " ";
};

document.getElementById("demo24").innerHTML = text;
</script>

<b>The Object.entries() Method</b>

<p id="demo25"></p>
<script>
    const fruits = {Bananas:300, Oranges:200, Apples:500}; 
    
    let text1 = "";
    for (let [fruit, amount] of Object.entries(fruits)) {
      text1 += fruit + ": " + amount + "<br>";
    }
    
    document.getElementById("demo25").innerHTML = text1;
</script>
<hr>

<h2 style="color: darkcyan;">JavaScript Object Constructors</h2>
<p id="demo26"></p>
<script>
function Person(first, last, age, eye) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyecolor = eye;
    this.nationality = "English";
}

const myfriend = new Person("John", "Doe", "16", "Blue");
const myfriend2 = new Person("Sam", "Doe", "14", "Brown");

document.getElementById('demo26').innerHTML = 
"My Friend is " + myfriend.age + "." + " " + "My Other Friend is " + myfriend2.age + "." + "They are " + " " + myfriend2.nationality
</script>
<hr>

<h2>JavaScript HTML Events</h2>
<h4>The onclick Attribute</h4>

<button onclick="this.innerHTML=Date()">The time is?</button>

<h2>JavaScript onmouseover</h2>
<button onmouseover="this.innerHTML=Date()">The time is?</button>
<hr>

<h2>Javascript Strings</h2>

<p id="demo27"></p>
<script>
let carname1 = "BMW";   //double quotes
let carname2 = 'Pagani'; //single quotes
document.getElementById("demo27").innerHTML = carname1 + " " + "&" + " " + carname2;
</script>
<hr>

<h3>Quotes Inside Quotes</h3>

<p id="demo28"></p>
<script>
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

document.getElementById('demo28').innerHTML = 
answer1 + "<br>" + answer2 + "<br>" + answer3;
</script>
<hr>

<b>String Length</b>

<p id="demo29"></p>
<script>
let text2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text2.length; 

document.getElementById('demo29').innerHTML = text2.length;
</script>
<hr>

<h2>JavaScript Statements</h2>

<p id="demo30"></p>
<script>
document.getElementById('demo30').innerHTML =
"Hello World!";
</script>
<hr>

<h2>JavaScript Template Strings</h2>

<p id="demo31"></p>
<script>
let text3 = 

`The quick
brown fox
jumps over
the lazy dog`;

document.getElementById('demo31').innerHTML = text3;
</script>
<hr>

<h2>JavaScript Objects</h2>

<p id="demo32"></p>
<p id="demo33"></p>
<p id="demo34"></p>
<script>
let text4 = "John";     // text4 is a String
let text5 = new String("John");     //text5 is a Object
let text6 = new String("John")

document.getElementById('demo32').innerHTML = 
typeof text4 + "<br>" + typeof text5;

document.getElementById('demo33').innerHTML = (text4 == text5);     //this shows that "Strings" & "Objects" aren't the same

document.getElementById('demo34').innerHTML = (text5 == text6)      //Comparing two JavaScript objects always returns false.
</script>

</body>
</html>
