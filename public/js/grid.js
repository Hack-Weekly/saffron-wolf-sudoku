// Only lets numbers be entered into the grid
const gridInputHandler = (square) => {
    if (square.value.length > 1) {
        // Replaces current value with last character entered
        square.value = square.value.slice(-1);
    }
    if (square.value.length === 1) {
        // Replaces any non-numeric characters with an empty string
        square.value = square.value.replace(/[^1-9]/g, "");
    }
    // Checks rows, cols, and squares for duplicates
    if (gridHasDuplicates(square)) {
        square.value = "";
        square.classList.remove("grid-square");
        square.classList.add("grid-invalid");
        setTimeout(() => {
            square.classList.remove("grid-invalid");
            square.classList.add("grid-square");
        }, 400);
        return;
    }

    square.style.color = "rgb(173, 173, 173)";
};

// Checks rows, cols, and squares for duplicates
const gridHasDuplicates = (square) => {
    const row = square.id[5];
    const col = square.id[7];
    const startingSquare = getStartingSquare(square.id);
    const squareArr = getSquareArr(startingSquare[0], startingSquare[1]);
    const rowArr = getRowArr(row);
    const colArr = getColArr(col);
    const squareDuplicates = checkForDuplicatesInArr(squareArr);
    const rowDuplicates = checkForDuplicatesInArr(rowArr);
    const colDuplicates = checkForDuplicatesInArr(colArr);
    console.log(rowArr, colArr, squareArr)
    if (squareDuplicates || rowDuplicates || colDuplicates) {
        square.style.color = "red";
        return true;
    }
    return false;
}

// Gets square number
const getStartingSquare = (id) => {
    const row = id[5];
    const col = id[7];
    if (row <= 3 && col <= 3) {
        return [1, 1];
    } else if (row <= 3 && col <= 6) {
        return [1, 4];
    } else if (row <= 3 && col <= 9) {
        return [1, 7];
    } else if (row <= 6 && col <= 3) {
        return [4, 1];
    } else if (row <= 6 && col <= 6) {
        return [4, 4];
    } else if (row <= 6 && col <= 9) {
        return [4, 7];
    } else if (row <= 9 && col <= 3) {
        return [7, 1];
    } else if (row <= 9 && col <= 6) {
        return [7, 4];
    } else if (row <= 9 && col <= 9) {
        return [7, 7];
    }
}

// Gets square array
const getSquareArr = (startingRow, startingCol) => {
    let squareArr = [];
    for (let i = startingRow; i < startingRow + 3; i++) {
        for (let j = startingCol; j < startingCol + 3; j++) {
            let value = document.getElementById(`grid_${i}.${j}`);
            if (value && value.value !== "") {
                squareArr.push(value.value);
            }
        }
    }
    return squareArr;
}

// Gets row array
const getRowArr = (row) => {
    let rowArr = [];
    for (let i = 1; i <= 9; i++) {
        let value = document.getElementById(`grid_${row}.${i}`);
        if (value && value.value !== "") {
            rowArr.push(value.value);
        }
    }
    return rowArr;
}

// Gets column array
const getColArr = (col) => {
    let colArr = [];
    for (let i = 1; i <= 9; i++) {
        let value = document.getElementById(`grid_${i}.${col}`);
        if (value && value.value !== "") {
            colArr.push(value.value);
        }
    }
    return colArr;
}

// Checks for duplicates in an row
const checkForDuplicatesInArr = (arr) => {
    const arrCopy = arr.slice();
    arrCopy.sort();
    for (let i = 0; i < arrCopy.length - 1; i++) {
        if (arrCopy[i] === arrCopy[i + 1]) {
            return true;
        }
    }
    return false;
}
