
function updateText()
{
    console.log("This button is working");
   let header = document.getElementById("heading");
   
   header.innerHTML = "Javascript is for stealing credentials";
}

function playCraps()
{
    let results = document.getElementById("crapsResults");
    // Generate a number between 1 and 6 and store a variable
    let die1 = Math.floor(Math.random() * 6) + 1;

    let die2 = Math.floor(Math.random() * 6) + 1;

    console.log("Die 1: " + die1);

    console.log("Die 2: " + die2);

    let sum = die1 + die2;

    // OR operator
    if (sum == 7 || sum == 11)
    {
        console.log("CRAPS - you lose!");
        results.innerHTML = "CRAPS - you lose!";
    } // AND operator
    else if (die1 == die2 && die1 % 2 == 0)
    {
        console.log("You won!");
        results.innerHTML = "You won!";
    }
    else
    {
        console.log("You pushed");
        results.innerHTML = "You pushed!";
    }
}

function CheckForPalindrome()
{
    // Check the palindrome with this function
    
    let inputField = document.getElementById("palindromeField");
    
    let results = document.getElementById("palindromeResults");

    console.log(inputField);
    results.innerHTML 
    
    // Sets the desired input value

    let inputValue = inputField.value;

    let stringLength = inputValue.length;

    if (stringLength > 0)
    {
        let iterationCount = Math.floor(stringLength/2);
        
        let lastCharacterIndex = inputValue.length - 1;

        let palindromeCheckResult = true;
        // Allowed to continue our palindrome
        for(let i = 0; i < iterationCount; i++)
        {
            if (inputValue[i] !== inputValue[lastCharacterIndex - i])
            {
                console.log("NOT A PALINDROME");
                results.innerHTML = "NOT A PALINDROME";
                palindromeCheckResult = false;
                break;
            }
        }
            if (palindromeCheckResult)
            {
                console.log("THIS IS A PALINDROME");
                results.innerHTML = "THIS IS A PALINDROME";
                
            }   
    }
}

function userInfoValidation()
{
    console.log("Checking user info");

    // Same concept as palindrome elements
    let firstNameField = document.getElementById("firstNameField");
    
    let lastNameField = document.getElementById("lastNameField");

    let results = document.getElementById("userInfoResults");

    let zipCodeField = document.getElementById("zipCodeField");

    results.innerHTML = "";

    let firstNameValue = firstNameField.value;

    let lastNameValue = lastNameField.value;

    let zipCodeValue = zipCodeField.value;


    // concatanation time
    let firstLastName = firstNameValue + " " + lastNameValue;

    console.log(firstLastName);

    if (firstLastName.length > 20)
    {
        // Hidden Message
        results.innerHTML = "Sock check foo!"

        return;
    }

    if (zipCodeValue.length !== 5)
    {
        // Second Hidden Message
        results.innerHTML = "Digits are over 9000! Stick to 5 and below!"

        return;
    }

    let zipCodeNumValue = parseInt(zipCodeValue);

    console.log(zipCodeNumValue);

    console.log("Input validated");
    
}
