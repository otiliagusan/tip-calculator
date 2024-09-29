// Targeting elements
const billAmountInput = document.querySelector('.bill-input'); // Selecting bill input field
const procentButtons = document.querySelectorAll('.tip-buttons .btn'); // Selecting all tip percentage buttons
const peopleInput = document.querySelector('.people-input'); // Selecting people input field
const resetButton = document.querySelector('.reset'); // Selecting reset button
const tipAmountDisplay = document.querySelectorAll('.tip-value p')[0]; // Displaying tip amount per person
const totalDisplay = document.querySelectorAll('.tip-value p')[2]; // Displaying total amount per person

// Function to calculate and display the tip amount and total per person
function calculateTip(tipPercentage) {
    const billAmount = parseFloat(billAmountInput.value); // Convert bill amount to a float number
    const numberOfPeople = parseInt(peopleInput.value); // Convert number of people to an integer

    if (billAmount > 0 && numberOfPeople > 0) {
        const tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
        const totalAmount = (billAmount / numberOfPeople) + tipAmount;

        // Display results
        tipAmountDisplay.textContent = tipAmount.toFixed(2); // Display tip amount per person
        totalDisplay.textContent = totalAmount.toFixed(2); // Display total amount per person
    }
}

// Event listener to validate the bill amount input on 'Enter' key press
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') { // Check if 'Enter' is pressed
        event.preventDefault(); // Prevent any default action (e.g., form submission)
        inputValueCheck(billAmountInput); // Call the function to check input
        console.log('Enter key pressed, validation function called.');
    }
});

// Add event listeners to each tip percentage button
procentButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tipPercentage = parseFloat(button.textContent); // Get the value of the percentage from button text
        calculateTip(tipPercentage); // Call function to calculate the tip
    });
});

// Reset button functionality
resetButton.addEventListener('click', () => {
    // Clear input fields
    billAmountInput.value = '';
    peopleInput.value = '';
    // Reset displayed values
    tipAmountDisplay.textContent = '0';
    totalDisplay.textContent = '0';
    // Clear error messages and reset styles
    span.textContent = '';
    billAmountInput.style.border = 'solid 2px transparent';
});

