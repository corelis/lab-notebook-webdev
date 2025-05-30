// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event

const userInput1 = document.getElementById("userInput1");
const copyButton = document.getElementById("copy");
const output1 = document.querySelector(
  "section h2 + label + input + input + p + .output"
);

copyButton.addEventListener("click", () => {
  output1.textContent = userInput1.value;
});
// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

// add an event listener on the target element

// callback function to handle event
const userInput2 = document.getElementById("userInput2");
const output2 = document.querySelector("#inputEventExample p");

userInput2.addEventListener("input", (e) => {
  output2.textContent = e.target.value;
});
