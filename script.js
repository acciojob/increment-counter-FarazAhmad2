//your JS code here. If required.
let elem = document.getElementById("counter");
alert(parseInt(elem.innerHTML))
function increment() {
  parseInt(elem.innerHTML++);
  alert(elem.innerHTML);
}
