// Create and append the main container and grid container dynamically
const mainContainer = document.createElement("div");
mainContainer.className = "container";
document.body.appendChild(mainContainer);

const gridContainer = document.createElement("div");
gridContainer.className = "grid";
mainContainer.appendChild(gridContainer);

// Function to populate the grid with specified rows and columns
function populate(rows, cols) {
    gridContainer.innerHTML = ''; // Clear any existing grid boxes

    // Adjust container width if columns exceed 50
    if (cols > 50) {
        mainContainer.style.maxWidth = "100vw"; // Allow the grid to grow wider
    } else {
        mainContainer.style.maxWidth = "90vmin"; // Constrain the grid to the smaller dimension
    }

    // Set CSS variables for rows and columns
    gridContainer.style.setProperty('--cols', cols);
    gridContainer.style.setProperty('--rows', rows);

    // Create and append grid boxes
    for (let i = 0; i < rows * cols; i++) {
        const newDiv = document.createElement("div");
        newDiv.className = "grid-box";
        gridContainer.appendChild(newDiv);
    }

    // Attach event listeners to grid boxes
    const gridBoxes = document.querySelectorAll(".grid-box");
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = "blue";
        });

        gridBox.addEventListener('click', (event) => {
            event.target.style.backgroundColor = "lightGray";
        });
    });
}

// Create and append the button for grid layout dynamically
const buttonDiv = document.createElement("div");
buttonDiv.className = "button-div";
const promptBtn = document.createElement("button");
promptBtn.textContent = "Grid Layout";
buttonDiv.appendChild(promptBtn);
mainContainer.appendChild(buttonDiv);

// Add event listener to the button to prompt for grid size
promptBtn.addEventListener('click', () => {
    let height = parseInt(prompt("Enter a grid height (max 100): "), 10);
    let width = parseInt(prompt("Enter a grid width (max 100): "), 10);

    // Validate input
    if (isNaN(height) || isNaN(width) || height <= 0 || width <= 0 || height > 100 || width > 100) {
        alert("Please enter valid positive numbers less than or equal to 100 for height and width.");
        return;
    }

    // Populate the grid with the new size
    populate(height, width);
});

// Initial population of the grid
populate(4, 4);
