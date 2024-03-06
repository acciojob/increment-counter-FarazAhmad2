//your JS code here. If required.
 const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');

    // Counter variable to store the value
    let counterValue = 0;

    // Function to update the counter text
    function updateCounter() {
      counterElement.textContent = counterValue;
    }

    // Event listener for the button click
    incrementBtn.addEventListener('click', function() {
      // Display the current counter value in an alert
      alert(counterValue);
      
      // Increment the counter value
      counterValue++;
      
      // Update the counter text
      updateCounter();
    });