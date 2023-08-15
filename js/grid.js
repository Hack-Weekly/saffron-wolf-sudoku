// Only lets numbers be entered into the grid
const inputEventHandler = (element) => {
    const square = element
    if (square.value.length > 1) {
        // Replaces current value with last character entered
        square.value = square.value.slice(-1);
    }
    if (square.value.length === 1) {
        // Replaces any non-numeric characters with an empty string
        square.value = square.value.replace(/[^1-9]/g, "");
    }
};
