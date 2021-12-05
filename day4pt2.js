(async() => {
  const response = await fetch("https://adventofcode.com/2021/day/4/input");
  let responseText = await response.text();

  const [numbers, ...rows] = responseText.split("\n");
  const numbersArr = numbers.split(",");

  const collection = {};
  let currentIndex = 0;

  class Board {
    constructor() {
      this.rows = [];
    }

    addRow(row) {
      if (Array.isArray(row)) {
        this.rows.push(row);
      }
      if (typeof row === 'string') {
        this.rows.push(row.split(/\s+/).filter(Boolean));
      }
    }

    indexOf(value) {
      for (let i = 0; i < this.rows.length; i++) {
        const row = this.rows[i];
        for (let j = 0; j < row.length; j++) {
          const cell = row[j];
          if (cell != value) continue;
          return [i, j];
        }
      }
    }

    checkForBingo() {
      let bingo = false;
      const rows = {};
      const columns = {};

      for (let i = 0; i < 5; i++) {
        rows[i] = 0;
        columns[i] = 0;
      }

      for (let i = 0; i < this.rows.length; i++) {
        const row = this.rows[i];
        for (let j = 0; j < row.length; j++) {
          const cell = row[j];
          if (cell) continue;
          rows[i]++;
          columns[j]++;
          if (rows[i] == 5 || columns[j] == 5) {
            return true;
          }
        }
      }
      return bingo;
    }
  }

  // set up the boards
  rows.forEach((row) => {
      if (!row) {
        currentIndex++; 
        return;
      }
      let board = collection[currentIndex];
      if (!board) {
        board = collection[currentIndex] = new Board();
      }
      board.addRow(row);
  });

  const boards = Object.values(collection);

  let winners = [];
  let lastCalled = null;
  
  for (let i = 0; i < numbersArr.length; i++) {
    lastCalled = numbersArr[i];
    let j = boards.length;
    while (j--) {
      const board = boards[j];

      const boardPosition = board.indexOf(lastCalled);
      if (boardPosition) {
        const [row, column] = boardPosition;
        board.rows[row][column] = null;

        const isBingo = board.checkForBingo();

        if (isBingo) {
          winners.push(board);
          boards.splice(j, 1);
        }
      }
    }
    if (!boards.length) break;
  }

  const lastWinner = winners[winners.length - 1];
  const sumOfUnmarked = lastWinner.rows.reduce((acc, curr) => {
    for (let i = 0; i < curr.length; i++) {
      if (!curr[i]) continue;
      acc += parseInt(curr[i], 10); 
    }
    return acc;
  }, 0);
  
  const answer = sumOfUnmarked * lastCalled;
  console.log(answer);
})();