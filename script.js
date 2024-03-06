//your JS code here. If required.
 let elem = document.getElementById("counter");
    // alert(parseInt(elem.innerHTML));

    function increment() {
        let currentValue = parseInt(elem.innerHTML);
        currentValue++;
        elem.innerHTML = currentValue; // Update innerHTML with the incremented value
        alert(currentValue);