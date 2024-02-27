let gridSize

let isBorders = true
let borderDisplay = document.querySelector('.border-display')
borderDisplay.textContent = `Borders : On`

let penColor = document.querySelector('#pen-color')

allGridCells = document.querySelectorAll('.grid-cell')

let gridContainer = document.querySelector('.grid-container')
gridContainer.style.display = `grid`

let gridSizeInput = document.querySelector('#grid-size-input')
gridSizeInput.addEventListener('change', () => {
	resetGrid()
})

gridSizeInput.addEventListener('input', () => {
	gridSizeDisplay.textContent = `${gridSizeInput.value} x ${gridSizeInput.value}`
})

let gridSizeDisplay = document.querySelector('.grid-size-display')
gridSizeDisplay.textContent = `${gridSizeInput.value} x ${gridSizeInput.value}`

function isBordersToggle() {
	isBorders = !isBorders
}
let toggleCellBordersButton = document.querySelector('.toggle-cell-borders-button')

toggleCellBordersButton.addEventListener('click', () => {
	isBordersToggle()
	if (isBorders === true) {
		borderDisplay.textContent = `Borders : On`
	} else {
		borderDisplay.textContent = `Borders : Off`
	}
	allGridCells.forEach((element) => {
		if (isBorders === true) {
			element.style.border = `1px solid var(--lightblack)`
		} else {
			element.style.border = `none`
		}
	})
})

let resetGridButton = document.querySelector('.reset-grid-button')

resetGridButton.addEventListener('click', () => {
	resetGrid()
})

function createGrid(gridSize) {
	gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
	gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
}

function createGridCells(gridSize, isBorders) {
	for (let i = 0; i < gridSize ** 2; i++) {
		newGridCell = document.createElement('div')
		newGridCell.style.backgroundColor = `black`
		newGridCell.classList.add('grid-cell')
		if (isBorders === true) {
			newGridCell.style.border = `1px solid var(--lightblack)`
		} else {
			newGridCell.style.border = `none`
		}
		gridContainer.append(newGridCell)
	}
	allGridCells = document.querySelectorAll('.grid-cell')
	allGridCells.forEach((element) => {
		element.addEventListener('mouseover', () => {
			element.style.backgroundColor = `${penColor.value}`
		})
	})
}


function resetGrid() {
	gridContainer.textContent = ''
	createGrid(gridSizeInput.value, isBorders)
	createGridCells(gridSizeInput.value, isBorders)
}

createGrid(gridSizeInput.value, isBorders)
createGridCells(gridSizeInput.value, isBorders)