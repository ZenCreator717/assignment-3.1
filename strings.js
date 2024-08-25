document.addEventListener('DOMContentLoaded', function() {
    function checkPalindrome() {
        let continueChecking = true;

        while (continueChecking) {
            let userInput = prompt("Enter a string to check if it's a palindrome:");

            if (userInput === null) {
                break; // Exit the loop if the user cancels the prompt
            }

            let cleanedInput = userInput.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
            let reversedInput = cleanedInput.split('').reverse().join('');

            if (cleanedInput === reversedInput) {
                alert(`"${userInput}" is a palindrome!`);
            } else {
                alert(`"${userInput}" is not a palindrome.`);
            }

            continueChecking = confirm("Do you want to check another string?");
        }
    }

    // Attach event listener to the palindrome check button
    const palindromeButton = document.getElementById('palindromeButton');
    if (palindromeButton) {
        palindromeButton.addEventListener('click', checkPalindrome);
    } else {
        console.log("Palindrome button element not found");
    }

    const form = document.getElementById('secretForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            console.log("Form submitted");
            event.preventDefault();

            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const zipCode = document.getElementById('zipCode').value;

            console.log("Inputs:", firstName, lastName, zipCode);

            const expectedFirstName = 'John';
            const expectedLastName = 'Doe';
            const expectedZipCode = '12345';

            if (!firstName || !lastName || !zipCode) {
                alert('All fields are required.');
                return;
            }

            if (firstName === expectedFirstName && lastName === expectedLastName && zipCode === expectedZipCode) {
                // Show the secret message
                const secretMessage = document.getElementById('secretMessage');
                if (secretMessage) {
                    secretMessage.classList.remove('hidden');
                    console.log("Secret message revealed");
                } else {
                    console.log("Secret message element not found");
                }
            } else {
                alert('Incorrect details. Please try again.');
                // Hide the secret message if it was previously shown
                const secretMessage = document.getElementById('secretMessage');
                if (secretMessage) {
                    secretMessage.classList.add('hidden');
                }
            }
        });
    } else {
        console.log("Form element not found");
    }
});
      
    





