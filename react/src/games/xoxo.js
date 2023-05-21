document.addEventListener('DOMContentLoaded', () => {
  const board = document.createElement('div');
  board.classList.add('board');
  document.body.appendChild(board);

  const message = document.createElement('div');
  message.classList.add('message');
  document.body.appendChild(message);

  let currentPlayer = 'X';
  let gameActive = true;
  let gameState = ['', '', '', '', '', '', '', '', ''];

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  function handleCellClick(e) {
    const cellIndex = parseInt(e.target.getAttribute('data-cell-index'));

    if (gameState[cellIndex] !== '' || !gameActive) {
      return;
    }

    gameState[cellIndex] = currentPlayer;
    e.target.textContent = currentPlayer;
    e.target.classList.add(currentPlayer);

    if (checkWin()) {
      message.textContent = `${currentPlayer} wins!`;
      gameActive = false;
      return;
    }

    if (checkDraw()) {
      message.textContent = "It's a draw!";
      gameActive = false;
      return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.textContent = `${currentPlayer}'s turn`;
  }

  function checkWin() {
    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];

      if (
        gameState[a] !== '' &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        return true;
      }
    }

    return false;
  }

  function checkDraw() {
    return !gameState.includes('');
  }

  function initializeGame() {
    board.innerHTML = '';
    message.textContent = `${currentPlayer}'s turn`;
    gameState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-cell-index', i);
      cell.addEventListener('click', handleCellClick);
      board.appendChild(cell);
    }
  }

  initializeGame();
});
