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

</body>
</html>
