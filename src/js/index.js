let body = document.querySelector('.body');

// Add the background image to the body
body.style.backgroundImage = 'url(https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1600)';
body.style.backgroundSize = 'cover';
body.style.backgroundPosition = 'center';
body.style.backgroundRepeat = 'no-repeat';

// // Create the "Return to Portfolio" button (this part is key)
const containerButton = document.createElement("div");
containerButton.classList.add("containerReturn");
body.appendChild(containerButton);

const returnButton = document.createElement('button');
returnButton.textContent = "Return to Portfolio";
returnButton.classList.add('buttonReturn');
containerButton.appendChild(returnButton);

// Add event listener for returning to the portfolio
returnButton.addEventListener("click", returnPortfolio);

//funtion return to Portfolio
function returnPortfolio() {
  window.location.href = "https://javyprogrameitor.github.io/Portfolio/";
}



// Create the result container
let resultElement = document.createElement('h1');
resultElement.innerText = 'Waiting for input...'; // Initial text
resultElement.classList.add('center-result', 'redColor'); // Initial color in red
body.appendChild(resultElement);

// Create the container
let container = document.createElement('div');
container.classList.add('center-flex');

// Create the title
let title = document.createElement('h2');
title.textContent = 'Application to shift characters';
title.classList.add('title')
container.appendChild(title);

// Create the input field (input)
let inputText = document.createElement('input');
inputText.setAttribute('type', 'text');
inputText.setAttribute('placeholder', 'Enter a phrase');
inputText.classList.add('input-text');
container.appendChild(inputText);


// Create the button
let button = document.createElement('button');
button.textContent = 'Click here';
container.appendChild(button);

// Create the image container
let imageContainer = document.createElement('div');
imageContainer.classList.add('image-container');

// Create an image and add it to the container
let image = document.createElement('img');
image.src = 'https://img.icons8.com/?size=100&id=123575&format=png&color=FA5252';  // Initial image
imageContainer.appendChild(image);

// Add the image container to the main container
container.appendChild(imageContainer);

// List of image URLs to alternate between
let images = [
    'https://img.icons8.com/?size=100&id=123575&format=png&color=FA5252',  // First image
    'https://img.icons8.com/?size=100&id=9fp9k4lPT8us&format=png&color=000000'   // Second image
];
let imageIndex = 0;


// Add the container to the body
body.appendChild(container)


/*Method to shift characters and capitalize them

function shiftCharacters(phrase) {
    let characters = phrase.toUpperCase().split('');

    for (let i = 0; i < characters.length; ++i) {
        let code = characters[i].charCodeAt();

        if (code >= 65 && code <= 90) { 
            characters[i] = String.fromCharCode((code - 65 + 1) % 26 + 65);
        } else if (code >= 97 && code <= 122) { // 
            characters[i] = String.fromCharCode((code - 97 + 1) % 26 + 97);
        } else if (code >= 48 && code <= 57) { // 
            characters[i] = String.fromCharCode((code - 48 + 1) % 10 + 48);
        }
    }

    alert(characters.join(''));
}
    */

function shiftCharacters(message) {
    //let message = window.prompt("Enter your message");
    let result = '';

    for (let position = 0; position < message.length; position++) {

        let character = message[position].toUpperCase();  // Convert to uppercase

        if (character === ' ') {
            // If the character is a space, add it as is
            result = result.concat(" ");
        } else if (character === 'Z') {
            // If the character is 'Z', convert it to 'A' (cycle)
            result = result.concat('A');
        } else if (character === '9') {
            // If the character is '9', convert it to '0' (numeric cycle)
            result = result.concat('0');
        } else if (character >= 'A' && character <= 'Y') {
            // For letters A to Y, shift to the next character
            let ascii = character.charCodeAt(0);
            // Method that returns a unicode value
            let nextAscii = String.fromCharCode(ascii + 1);
            result = result.concat(nextAscii);
        } else if (character >= '0' && character <= '8') {
            // For numbers 0 to 8, shift to the next number
            let ascii = character.charCodeAt(0);
            let nextAscii = String.fromCharCode(ascii + 1);
            result = result.concat(nextAscii);
        } else {
            // For any other character that is neither a letter nor a number
            result = result.concat(character);
        }
    }

    // Display the final result
    //alert(result);
    // Update the result instead of using alert
   
    resultElement.innerText = 'Your encoded phrase is: ' + result;

    // Toggle between color classes
    if (resultElement.classList.contains("greenColor")) {
        resultElement.classList.remove("greenColor");
        resultElement.classList.add("redColor");
    } else {
        resultElement.classList.remove("redColor");
        resultElement.classList.add("greenColor");
    }

}
// Function to reset the initial state
function resetState() {
    // Reset the input field
    inputText.value = '';
    inputText.placeholder = 'Enter a phrase';
    
    // Reset the result text and color
    resultElement.innerText = 'Waiting for input...';
    resultElement.classList.remove('greenColor');
    resultElement.classList.add('redColor');
    
    // Reset the image to the initial one
    image.src = images[0];
    imageIndex = 0;
}

// Variable to control the state (whether it is the first click or not)
let isFirstClick = true;


button.addEventListener("click", function () {
    let userInput = inputText.value;

    if (isFirstClick && userInput) {
        // Shift characters if it is the first click
        shiftCharacters(userInput);

        // Alternate images
        imageIndex = (imageIndex + 1) % images.length;
        image.src = images[imageIndex];

        // Change the state to indicate that the next click will reset
        isFirstClick = false;
    } else {
        // If it is the second click, reset the application
        resetState();
        
        // Reset the variable so that the next click is the "first click"
        isFirstClick = true;
    }
});
