const container = document.getElementById('container');
const colorButton = document.getElementById('colorMode');
const rainbowButton = document.getElementById('rainbowMode');
const eraserButton = document.getElementById('eraser');

// Fixed grid size (N x N) 
const N = 8;

// Nested loops to create grid squares within the container
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    // Calculate the width of each grid square based on the grid size (N)
    const flexValue = 100 / N;

    // Create a new div element for the grid square
    const gridSquare = document.createElement('div');

    // Add the 'grid' class to the grid square for styling
    gridSquare.classList.add('gridSquare');

    // Set the flex property to control the width of the grid square
    gridSquare.style.flex = `0 0 ${flexValue}%`;

    // Append the grid square to the container div
    container.appendChild(gridSquare);
  }
}

// Add event listeners to toggle buttons on/off

colorButton.addEventListener('click', () => {
    colorButton.classList.add('active');
    rainbowButton.classList.remove('active');
    eraserButton.classList.remove('active');
});

rainbowButton.addEventListener('click', () => {
    colorButton.classList.remove('active');
    rainbowButton.classList.add('active');
    eraserButton.classList.remove('active');
});

eraserButton.addEventListener('click', () => {
    colorButton.classList.remove('active');
    rainbowButton.classList.remove('active');
    eraserButton.classList.add('active');
});

