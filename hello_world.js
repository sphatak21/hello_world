function sayHelloConsole() {
  console.log("Hello, World!");
}
function sayHelloPopup() {
  alert("Hello, World!")
}
function sayHelloBrowser() {
  var p = document.getElementById("hello");
  p.innerHTML="Hello, World!";
}
function sayHelloStranger(){
  var i = prompt("Please enter your name", "Dad")
  alert("Hello " + i)
}
