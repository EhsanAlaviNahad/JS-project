<!DOCTYPE html>
<html>
<body>

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

<h1>Using The Function Command</h1>
<p id="demo1" style="font-size: 22px;">Text</p>

<button type="button" onclick="myfunc()">Try It</button>

<h1>Equations</h1>

<p id="demo2"></p>

<script>
document.getElementById('demo2').innerHTML = 5 + 6
</script>

<h1>Equations using Document.write</h1>
<h3>This should only be used for testing (this removes the entire html document when clicked)</h3>

<button type="button" onclick="document.write(5 + 6)">Try me</button>

<script>
alert(5 + 6);
</script>

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

<h2>Semicolons</h2>
<h3>Semicolons separate JavaScript statements.</h3>


<p id="demo4"></p>
<script>
let a, b, c;
a = 5; b = 6; c = a + b;
document.getElementById('demo4').innerHTML = c;
</script>

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

<h2>JavaScript Numbers</h2>
<h3>Number can be written with or without decimals.</h3>

<p id="demo7"></p>

<script>
document.getElementById('demo7').innerHTML = 10.50;
</script>

<h2>JavaScript Strings</h2>
<h3>Strings can be written with double or single quotes.</h3>

<p id="demo8"></p>

<script>
document.getElementById('demo8').innerHTML = 'John Doe';
</script>

<h2>JavaScript Operators</h2>
<b>JavaScript uses arithmetic operators to compute values (just like algebra).</b>

<p id="demo9"></p>

<script>
document.getElementById('demo9').innerHTML = (5 + 6) * 10;
</script>

<h2>Javascript Expressions</h2>

<p id="demo10"></p>

<script>
document.getElementById('demo10').innerHTML = "John" + " " + "Doe"; 
</script>

<h2>JavaScript Keywords</h2>

<b>Let Keyword</b>
<p id="demo11"></p>
<script>
let e, r;
e = 5 + 6;
r = e * 10;
document.getElementById('demo11').innerHTML = r;
</script>

<h2 style="color: darkgoldenrod;">When to Use var, let, or const?</h2>
<p>1. Always declare variables</p>
<p>2. Always use const if the value should not be changed</p>
<p>3. Always use const if the type should not be changed (Arrays and Objects)</p>
<p>4. Only use let if you can't use const</p>
<p>5. Only use var if you MUST support old browsers.</p>

<h2 style="color: darkgoldenrod;">When to use JavaScript const</h2>
<b>Always declare a variable with const when you know that the value should not be changed.</b>
<p>Use const when you declare</p>
<p>A new Array</p>
<p>A new Object</p>
<p>A new Function</p>
<p>A new RegExp</p>

<h2 style="color: darkgoldenrod;">JavaScript Operators</h2>
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

<h2 style="color: crimson;">JavaScript Booleans</h2>
<b>Booleans can have two values: true or false:</b>

<p id="demo15"></p>
<script>
let bool0 = 5;
let bool1 = 5;
let bool2 = 6;

document.getElementById("demo15").innerHTML = (bool0 == bool1) + "<br>" + (bool0 == bool2);
</script>

<h2 style="color: crimson;">JavaScript Arrays</h2>
<b>Array indexes are zero-based, which means the first item is [0].</b>

<p id="demo16"></p>
<script>
const cars = ["Mercedes","Volvo","BMW"]

document.getElementById('demo16').innerHTML = cars[0] 
</script>

<h2 style="color: crimson;">JavaScript Objects</h2>

<p id="demo17"></p>
<script>
const person = {fname : "John", lname : "Doe", age : "17", eyecolor : "Blue"};

document.getElementById("demo17").innerHTML = person.fname + " is " + person.age + " years old.";
</script>

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

<h2 style="color: darkcyan;">Why Functions?</h2>
<p>With functions you can reuse code</p>
<p>You can write code that can be used many times.</p>
<p>You can use the same code with different arguments, to produce different results.</p>

</body>
</html> 
