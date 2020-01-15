const mainContainer = document.getElementById('main-container');
const randomBtn = document.getElementById('random-btn');
const blackBtn = document.getElementById('black-color');
const clearBtn = document.getElementById('clear');
const sizeBtn = document.getElementById('size-btn');

// Add A Default Start Grid
for (let i = 0; i < (36 ** 2); i += 1) {
  mainContainer.setAttribute('style', 'grid-template-columns: repeat(36, 1fr); grid-template-rows: repeat(36, 1fr)');
  const squareDiv = document.createElement('div');
  mainContainer.appendChild(squareDiv);
}
const divSquares = document.querySelectorAll('#main-container div');
const resolution = document.querySelector('div h1');
resolution.textContent = `Resolution = ${Math.sqrt(divSquares.length)} x ${Math.sqrt(divSquares.length)}`;

// Default Color
mainContainer.addEventListener('mouseover', (e) => {
  if (e.target.parentElement.id === 'main-container') {
    e.target.style.backgroundColor = 'black';
  }
});

// Random Color Button
randomBtn.addEventListener('click', () => {
  mainContainer.addEventListener('mouseover', (e) => {
    if (e.target.parentElement.id === 'main-container') {
      e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    }
  });
});

// Black Color Button
blackBtn.addEventListener('click', () => {
  mainContainer.addEventListener('mouseover', (e) => {
    if (e.target.parentElement.id === 'main-container') {
      e.target.style.backgroundColor = 'black';
    }
  });
});

// Clear Button
clearBtn.addEventListener('click', () => {
  const clearBG = document.querySelectorAll('#main-container div');
  clearBG.forEach((div) => {
    const backGround = div;
    backGround.style.backgroundColor = 'white';
  });
});

// Size Button
sizeBtn.addEventListener('click', () => {
  const promptSize = prompt('Enter a number');
  if (promptSize === '' || promptSize === null) {
    return;
  }
  while (mainContainer.firstChild) {
    mainContainer.removeChild(mainContainer.firstChild);
  }
  const gridSize = +promptSize; // Return a number from prompt()
  for (let i = 0; i < (gridSize ** 2); i += 1) {
    mainContainer.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr)`);
    const squareDiv = document.createElement('div');
    mainContainer.appendChild(squareDiv);
  }
  const newDivSquares = document.querySelectorAll('#main-container div');
  const newResolution = document.querySelector('div h1');
  newResolution.textContent = `Resolution = ${Math.sqrt(newDivSquares.length)} x ${Math.sqrt(newDivSquares.length)}`;
});
