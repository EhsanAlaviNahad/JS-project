<!DOCTYPE html>
<html>
<body>

<h1>What Can JavaScript Do?</h1>

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
    document.getElementById("demo1").innerHTML = "Updated"
}
</script>
</head>
</body>

<h1>Using The Function Command</h1>
<p id="demo1" style="font-size: 22px;">Updated Text</p>

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

</body>
</html> 
