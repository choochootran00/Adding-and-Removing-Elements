var newEl = document.createElement('li');

// Create a text node and store it in a variable.
var newText = document.createTextNode("Travis");

// Attach the new text node to the new element.
newEl.appendChild(newText);

// Find the position where the new element should be added.
var position = document.getElementsByTagName("ul")[0];

// Insert the new element into its position.
position.appendChild(newEl);

// ----------------------------------------//

var removeEl = document.getElementsByTagName("li")[0];
var containerEl = removeEl.parentNode;

containerEl.removeChild(removeEl);