const express = require('express')
const app = express()
const path = require('path')
const PORT = 5500

app.use(express.static('public'))

const router = require('./routes/parseInput')

app.use('/', router)

app.listen(PORT, ()=>{
  console.log(`app is running at http://localhost:${PORT}`);
})

// backtracking approach to solve a sudoku with some or no squares filled.

// function solveSudoku(board) {
//   solve(board);
// }

// function solve(board) {
//   for (let i = 0; i < board.length; i++) {
//       for (let j = 0; j < board[0].length; j++) {
//           if (board[i][j] === '.') {
//               for (let c = '1'; c <= '9'; c++) {
//                   if (isValid(board, i, j, c)) {
//                       board[i][j] = c;

//                       if (solve(board)) return true;
//                       else board[i][j] = '.';
//                   }
//               }
//               return false;
//           }
//       }
//   }
//   return true;
// }

// function isValid(board, row, col, c) {
//   for (let i = 0; i < 9; i++) {
//       if (board[i][col] === c) return false;

//       if (board[row][i] === c) return false;

//       if (board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + (i % 3)] === c) {
//           return false;
//       }
//   }
//   return true;
// }