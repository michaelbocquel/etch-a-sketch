let gridSize

let gridContainer = document.querySelector('.grid-container')
gridContainer.style.display = `grid`

let gridSizeInput = document.querySelector('#grid-size-input')
gridSizeInput.addEventListener('change', () => {
	createGrid(gridSizeInput.value)
})

let resetGridButton = document.querySelector('.reset-grid-button')

resetGridButton.addEventListener('click', () => {
	resetGrid
	createGrid(gridSizeInput.value)
})

function createGrid(gridSize) {
	resetGrid()
	gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
	gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
	for (let i = 0; i < gridSize ** 2; i++) {
		newGridCell = document.createElement('div')
		newGridCell.style.backgroundColor = `black`
		newGridCell.style.border = `1px solid var(--lightblack)`
		gridContainer.append(newGridCell)
	}
}

function resetGrid() {
	gridContainer.textContent = ''
}