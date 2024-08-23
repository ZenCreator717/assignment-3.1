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