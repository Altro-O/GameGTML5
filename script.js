// Функция для генерации случайного числа
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для генерации игрового поля
function generateGameGrid() {
  const gameGrid = document.getElementById('game-grid');
  for (let i = 0; i < 36; i++) {
    const gameCell = document.createElement('div');
    gameCell.classList.add('game-cell');
    gameCell.innerHTML = getRandomNumber(1, 6);
    gameGrid.appendChild(gameCell);
  }
}

// Функция для обновления игрового поля
function updateGameGrid() {
  const gameGrid = document.getElementById('game-grid');
  const gameCells = gameGrid.children;
  for (let i = 0; i < gameCells.length; i++) {
    const gameCell = gameCells[i];
    gameCell.innerHTML = getRandomNumber(1, 6);
  }
}

// Функция для проверки победы
function checkWin() {
  const gameGrid = document.getElementById('game-grid');
  const gameCells = gameGrid.children;
  let win = true;
  for (let i = 0; i < gameCells.length; i++) {
    const gameCell = gameCells[i];
    if (gameCell.innerHTML!== '6') {
      win = false;
      break;
    }
  }
  if (win) {
    alert('Победа!');
  }
}

// Добавление событий к игровым элементам
document.addEventListener('DOMContentLoaded', generateGameGrid);
document.getElementById('game-grid').addEventListener('click', updateGameGrid);
document.getElementById('game-grid').addEventListener('click', checkWin);