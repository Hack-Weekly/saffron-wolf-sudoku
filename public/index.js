// BUTTON STUFF

let getHintButton = document.querySelector(".button");

getHintButton.addEventListener("click", getHint);

function getHint() {
  console.log("This Button Works");
}

// parsing the form-data
const submitBtn = document.getElementById("submitBtn");
let sudoku = [];

submitBtn.addEventListener('click', () => {
  for (let i = 1; i <= 9; i++) {
    let row = [];
    for (let j = 1; j <= 9; j++) {
      let iterator = `grid_${i}.${j}`;
      let val = document.getElementById(iterator);
      row.push(val.value);
    }
    sudoku.push(row);
  }

  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/send-request');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
          if (xhr.status === 200) {
              const responseData = JSON.parse(xhr.responseText);
              console.log(responseData.message); // Handle the response from the server
          } else {
              console.error('An error occurred:', xhr.statusText);
          }
      }
  };

  const data = JSON.stringify({sudoku: sudoku});
  xhr.send(data);
});

// fetch("/", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ sudoku: sudoku }),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     // Handle the response from the server
//   })
//   .catch((error) => {
//     // Handle errors
//   });