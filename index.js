const promptSize = prompt('Enter a number');
const gridSize = +promptSize; // Return a number from prompt()

// Create the grid of square
for (let i = 0; i < (gridSize ** 2); i += 1) {
  const mainContainer = document.getElementById('main-container');
  mainContainer.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr)`);
  const squareDiv = document.createElement('div');
  mainContainer.appendChild(squareDiv);
}
