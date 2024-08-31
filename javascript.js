// Create the container and add it to the document body
const container = document.createElement("div");
container.className = "grid";
document.body.appendChild(container);

// Function to populate the grid with specified rows and columns
function populate(rows, cols) {
    // Clear existing grid boxes
    container.innerHTML = '';

    // Create and append new grid boxes
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const newDiv = document.createElement("div");
            newDiv.className = "grid-box";
            container.appendChild(newDiv);
        }
    }

    // Re-attach event listeners to new grid boxes
    const gridBoxes = document.querySelectorAll(".grid-box"); // Correct class name
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener('mouseover', (event) => {
            let target = event.target;
            target.style.backgroundColor = "blue";
        });

        // Add click event to reset the background color
        gridBox.addEventListener('click', (click) => {
            let target = click.target;
            target.style.backgroundColor = "white";
        });
    });
}

// Create and append the prompt button
const buttonDiv = document.createElement("div");
const promptBtn = document.createElement("button");
buttonDiv.className = "button-div";
promptBtn.textContent = "Grid Layout";
buttonDiv.appendChild(promptBtn);
document.body.appendChild(buttonDiv);

// Add event listener to the button
promptBtn.addEventListener('click', () => {
    let height = parseInt(prompt("Enter a grid height (max 100): "), 10);
    let width = parseInt(prompt("Enter a grid width (max 100): "), 10);

    // Validate inputs
    if (isNaN(height) || isNaN(width) || height <= 0 || width <= 0 || height >= 100 || width >= 100) {
        alert("Please enter valid positive numbers less than 100 for height and width.");
        return;
    }

    // Populate the grid with the new size
    populate(height, width);
});

// Initial population of the grid
populate(4, 4);
