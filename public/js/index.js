// BUTTON STUFF

// Hint button listener
let getHintButton = document.querySelector(".button");

getHintButton.addEventListener("click", getHint);

function getHint() {
  console.log("This Button Works");
}

// Clear board listener
const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener('click', () => {
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      let iterator = `grid_${i}.${j}`;
      let val = document.getElementById(iterator);
      val.value = "";
    }
  }
});

// Get sudoku solution from server, then display to user 
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener('click', async () => {
  let sudoku = [];
  for (let i = 1; i <= 9; i++) {
    let row = [];
    for (let j = 1; j <= 9; j++) {
      let iterator = `grid_${i}.${j}`;
      let val = document.getElementById(iterator);
      if (val.value === "") {
        row.push('.');
        continue;
      }
      row.push(parseInt(val.value, 10));
    }
    sudoku.push(row);
  }

  const response = await fetch("http://localhost:8080/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*' // allow CORS
    },
    body: JSON.stringify({ sudoku: sudoku }),
  }).then((response) => response.json())
  .catch((error) => {
    console.error("Error:", error);
  });
  
  // Displays solution to user
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      let iterator = `grid_${i}.${j}`;
      let val = document.getElementById(iterator);
      if (val.value === "") {
        val.style.color = "green";
      }
      val.value = response.sudoku[i-1][j-1];
    }
  }
});


