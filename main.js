// Function to ask the user for a number and print its multiplication table
function printMultiplicationTable() {
    // Prompt the user to enter a number
    var number = prompt("Enter a number:");

    // Convert the input to a number
    number = parseInt(number);

    // Check if the input is a valid number
    if (!isNaN(number)) {
        // Print the multiplication table of the entered number up to 10
        console.log("Multiplication table for " + number + ":");
        for (var i = 1; i <= 10; i++) {
            console.log(number + " * " + i + " = " + (number * i));
        }
    } else {
        // If the input is not a valid number, display an error message
        console.log("Invalid input. Please enter a valid number.");
    }
}

// Call the function to ask for a number and print its multiplication table
printMultiplicationTable();
