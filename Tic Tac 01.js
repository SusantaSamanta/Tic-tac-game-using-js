
window.onload = function () {
  restartMoveMent();
  setTimeout(() => {
    playAgainBottonMovement();
  }, 900)
  setTimeout(function () {
    cell_1.style.translate = '0vw 0vw';
    cell_2.style.translate = '0vw 0vw';
    cell_3.style.translate = '0vw 0vw';
    cell_4.style.translate = '0vw 0vw';
    cell_6.style.translate = '0vw 0vw';
    cell_7.style.translate = '0vw 0vw';
    cell_8.style.translate = '0vw 0vw';
    cell_9.style.translate = '0vw 0vw';
    outSideTopBorder.style.transform = 'rotate(0deg)';
    outSideTopBorder.style.translate = '0vw 0vw';
    outSideRightBorder.style.transform = 'rotate(0deg)';
    outSideRightBorder.style.translate = '0vw 0vw';
    outSideBottomBorder.style.transform = 'rotate(0deg)';
    outSideBottomBorder.style.translate = '0vw 0vw';
    outSideLeftBorder.style.transform = 'rotate(0deg)';
    outSideLeftBorder.style.translate = '0vw 0vw';
  }, 50);
};

let cell_1_lock = cell_2_lock = cell_3_lock = cell_4_lock = cell_5_lock = cell_6_lock = cell_7_lock = cell_8_lock = cell_9_lock = 1;
let v1, v2, v3, v4, v5, v6, v7, v8, v9;
let playAgainActive = 0;
let roundCount = 1;
let c1 = c2 = c3 = c4 = c5 = c6 = c7 = c8 = c9 = 0;
let palyerXWinCount = 0, palyerOWinCount = 0;



document.addEventListener('click', (event) => {
  if (event.target.tagName === 'DIV' && event.target.id == 'cell_1' && cell_1_lock == 1) {

    cell_1_lock = 0;
    v1 = pieceSwapControl();
    cell_1.innerHTML = c1 = v1.substring(0, 1);
    winChecker(c1, c2, c3, c4, c5, c6, c7, c8, c9);
    cell_1.style.color = v1.substring(1, v1.length);

    playAgainActivation();
  }
  else if (event.target.tagName === 'DIV' && event.target.id == 'cell_2' && cell_2_lock == 1) {

    cell_2_lock = 0;
    v2 = pieceSwapControl();
    cell_2.innerHTML = c2 = v2.substring(0, 1);
    winChecker(c1, c2, c3, c4, c5, c6, c7, c8, c9);
    cell_2.style.color = v2.substring(1, v2.length);

    playAgainActivation();
  }
  else if (event.target.tagName === 'DIV' && event.target.id == 'cell_3' && cell_3_lock == 1) {

    cell_3_lock = 0;
    v3 = pieceSwapControl();
    cell_3.innerHTML = c3 = v3.substring(0, 1);
    winChecker(c1, c2, c3, c4, c5, c6, c7, c8, c9);
    cell_3.style.color = v3.substring(1, v3.length);

    playAgainActivation();
  }
  else if (event.target.tagName === 'DIV' && event.target.id == 'cell_4' && cell_4_lock == 1) {

    cell_4_lock = 0;

    v4 = pieceSwapControl();
    cell_4.innerHTML = c4 = v4.substring(0, 1);
    winChecker(c1, c2, c3, c4, c5, c6, c7, c8, c9);
    cell_4.style.color = v4.substring(1, v4.length);

    playAgainActivation();
  }
  else if (event.target.tagName === 'DIV' && event.target.id == 'cell_5' && cell_5_lock == 1) {

    cell_5_lock = 0;
    v5 = pieceSwapControl();
    cell_5.innerHTML = c5 = v5.substring(0, 1);
    winChecker(c1, c2, c3, c4, c5, c6, c7, c8, c9);
    cell_5.style.color = v5.substring(1, v5.length)

    playAgainActivation();
  }
  else if (event.target.tagName === 'DIV' && event.target.id == 'cell_6' && cell_6_lock == 1) {

    cell_6_lock = 0;
    v6 = pieceSwapControl();
    cell_6.innerHTML = c6 = v6.substring(0, 1);
    winChecker(c1, c2, c3, c4, c5, c6, c7, c8, c9);
    cell_6.style.color = v6.substring(1, v6.length);

    playAgainActivation();
  }
  else if (event.target.tagName === 'DIV' && event.target.id == 'cell_7' && cell_7_lock == 1) {

    cell_7_lock = 0;
    v7 = pieceSwapControl();
    cell_7.innerHTML = c7 = v7.substring(0, 1);
    winChecker(c1, c2, c3, c4, c5, c6, c7, c8, c9);
    cell_7.style.color = v7.substring(1, v7.length);

    playAgainActivation();
  }

  else if (event.target.tagName === 'DIV' && event.target.id == 'cell_8' && cell_8_lock == 1) {

    cell_8_lock = 0;
    v8 = pieceSwapControl();
    cell_8.innerHTML = c8 = v8.substring(0, 1);
    winChecker(c1, c2, c3, c4, c5, c6, c7, c8, c9);
    cell_8.style.color = v8.substring(1, v8.length);

    playAgainActivation();

  }
  else if (event.target.tagName === 'DIV' && event.target.id == 'cell_9' && cell_9_lock == 1) {

    cell_9_lock = 0;
    v9 = pieceSwapControl();
    cell_9.innerHTML = c9 = v9.substring(0, 1);
    winChecker(c1, c2, c3, c4, c5, c6, c7, c8, c9);
    cell_9.style.color = v9.substring(1, v9.length);

    playAgainActivation();   //after all cell click or win play agen active
  }

  else if (event.target.tagName === 'DIV' && event.target.id == 'playAgain' && playAgainActive == 1) {
    cell_content_remove();
    playAgain.style.background = "var(--restartBtnDefaultBg)";
    playAgain.style.color = "var(--restartBtnDefaultTextColor)";
    playAgainActive = 0;
    playAgainActivation_fun_count = 0;
    pieceNumberCount1 = pieceNumberCount2 = 1;
    roundCount++;
    initialBorderOf_X_O();   // after one round by defalut bodre apply on the player box 
  }

  // else if (event.target.tagName === 'DIV' && event.target.id == 'restart') {
  //   it use at the Last part of the program 
  //}

})


let pieceNumberCount1 = 1;

const pieceValue1 = () => {
  if (pieceNumberCount1 % 2 == 0 && pieceNumberCount1 < 10) {
    pieceNumberCount1++;
    if (pieceNumberCount1 < 10)
      player_X_Border();
    player_O_Border_Off();
    return 'O var(--O_piece_color)';
  }
  else if (pieceNumberCount1 % 2 != 0 && pieceNumberCount1 < 10) {
    pieceNumberCount1++;
    if (pieceNumberCount1 < 10)
      player_O_Border();    // after 9 move border are not apply
    player_X_Border_Off();
    // if (pieceNumberCount1 == 10) {
    //   pieceNumberCount1 = 1;
    //   console.log('end '+pieceNumberCount1);
    // }
    return 'X var(--X_piece_color)';

  }
}

let pieceNumberCount2 = 1;

const pieceValue2 = () => {
  if (pieceNumberCount2 % 2 == 0 && pieceNumberCount2 < 10) {
    pieceNumberCount2++;
    if (pieceNumberCount2 < 10)
      player_O_Border();    // after 9 move border are not apply
    player_X_Border_Off();
    return 'X var(--X_piece_color)';
  }
  else if (pieceNumberCount2 % 2 != 0 && pieceNumberCount2 < 10) {
    pieceNumberCount2++;
    if (pieceNumberCount2 < 10)  // after 9 move border are not apply
      player_X_Border();
    player_O_Border_Off();

    return 'O var(--O_piece_color)';
  }
}


const pieceSwapControl = () => {
  if (roundCount % 2 == 0) {
    return pieceValue2();
  }
  else {
    return pieceValue1();
  }
}


const cell_content_remove = () => {
  cell_1.innerHTML = cell_2.innerHTML = cell_3.innerHTML = cell_4.innerHTML = cell_5.innerHTML = cell_6.innerHTML = cell_7.innerHTML = cell_8.innerHTML = cell_9.innerHTML = '';
  cell_1_lock = cell_2_lock = cell_3_lock = cell_4_lock = cell_5_lock = cell_6_lock = cell_7_lock = cell_8_lock = cell_9_lock = 1;
  v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8 = v9 = 0;
  c1 = c2 = c3 = c4 = c5 = c6 = c7 = c8 = c9 = 0;
  allCellColorReset();
  player_X_Border_Off();
  player_O_Border_Off();
}

let playAgainActivation_fun_count = 0;
const playAgainActivation = () => {
  playAgainActivation_fun_count++;
  // console.log(playAgainActivation_fun_count)
  if (playAgainActivation_fun_count == 9) {
    playAgain.style.background = 'white';
    playAgain.style.color = 'black';
    playAgainActive = 1;
  }
}

const allCellColorReset = () => {
  cell_1.style.color = cell_2.style.color = cell_3.style.color = cell_4.style.color = cell_5.style.color = cell_6.style.color = cell_7.style.color = cell_8.style.color = cell_9.style.color = '#4b4b4bc6';
}



const allCellLock = () => {
  cell_1_lock = cell_2_lock = cell_3_lock = cell_4_lock = cell_5_lock = cell_6_lock = cell_7_lock = cell_8_lock = cell_9_lock = 0;
}

const winChecker = (c1, c2, c3, c4, c5, c6, c7, c8, c9) => {
  if (testThreeCell(c1, c2, c3)) {
    // if(c1 == c2 && c2 == c3 && c1 != 0 && c2 != 0 && c3 != 0){
    console.log('r1 win');
    actionAfterWin();
    winSignFind(c1);    // if t can find the sign , that is store in c1
    allCellColorDown(3, 2, 1);   // large value giv, because the index will not change if i remove first value  
  }
  else if (testThreeCell(c4, c5, c6)) {
    console.log('r2 win');
    actionAfterWin();
    winSignFind(c4);
    allCellColorDown(6, 5, 4);
  }
  else if (testThreeCell(c7, c8, c9)) {
    console.log('r3 win');
    actionAfterWin();
    winSignFind(c7);
    allCellColorDown(9, 8, 7);
  }
  else if (testThreeCell(c1, c4, c7)) {
    console.log('c1 win');
    actionAfterWin();
    winSignFind(c1);
    allCellColorDown(7, 4, 1);
  }
  else if (testThreeCell(c2, c5, c8)) {
    console.log('c2 win');
    actionAfterWin();
    winSignFind(c2);
    allCellColorDown(8, 5, 2);
  }
  else if (testThreeCell(c3, c6, c9)) {
    console.log('c3 win');
    actionAfterWin();
    winSignFind(c3);
    allCellColorDown(9, 6, 3);
  }
  else if (testThreeCell(c1, c5, c9)) {
    console.log('d1 win');
    actionAfterWin();
    winSignFind(c1);
    allCellColorDown(9, 5, 1);
  }
  else if (testThreeCell(c3, c5, c7)) {
    console.log('d2 win');
    actionAfterWin();
    winSignFind(c3);
    allCellColorDown(7, 5, 3);
  }
  else if (c1 != 0 && c2 != 0 && c3 != 0 && c4 != 0 && c5 != 0 && c6 != 0 && c7 != 0 && c8 != 0 && c9 != 0) {  //initialy all cell have 0 value after click value change x or o that means all cell clicked but above condition not match
    console.log('draw');
    turnSign.innerHTML = '';
    turnOrWin.innerHTML = 'Match Draw'
  }

}


const testThreeCell = (a, b, c) => {
  if (a == b && b == c && a != 0 && b != 0 && c != 0)
    return true;
  else
    return false;
}



const actionAfterWin = () => {
  allCellLock();
  playAgain.style.background = 'white';
  playAgain.style.color = 'black';
  playAgainActive = 1;
  player_X_Border_Off();
  player_O_Border_Off();
  playerWinSave();
  setTimeout(() => {
    turnOrWin.innerHTML = 'Win'
  }, 220);
}


const player_X_Border = () => {
  player1.style.border = "var(--playerBorderSize) solid var(--playerActiveBorderColor)";
  turnOrWin.innerHTML = 'Turn';
  turnSignMoveUpDown('X', 'var(--X_piece_color)')

}


const player_X_Border_Off = () => {
  player1.style.border = "var(--playerBorderSize) solid #38383800";
}

const player_O_Border = () => {
  player2.style.border = "var(--playerBorderSize) solid var(--playerActiveBorderColor)";
  turnOrWin.innerHTML = 'Turn';
  turnSignMoveUpDown('O', 'var(--O_piece_color)')
}

const player_O_Border_Off = () => {
  player2.style.border = "var(--playerBorderSize) solid #38383800";
}

const turnSignMoveUpDown = (sign, color) => {
  setTimeout(() => {
    turnSign.style.translate = "0vw -9vw";
  }, 100);  // turn sign go up 
  setTimeout(() => {
    turnSign.innerHTML = sign;
    turnSign.style.color = color;
  }, 120);   // color change 
  setTimeout(() => {
    turnSign.style.translate = "0vw -1.2vw";
  }, 220);   // move to default position 
  turnSign.style.transition = "all .05s ease";
}

const initialBorderOf_X_O = () => {
  if (roundCount % 2 == 0)
    player_O_Border();
  else
    player_X_Border();
}

const playAgainBottonMovement = () => {
  setTimeout(function () {
    playAgain.style.translate = '0 -6vh';
    playAgain.style.transition = 'all .3s ease';
  }, 1)
  setTimeout(function () {
    playAgain.style.translate = '0 6.5vh';
    playAgain.style.transition = 'all .3s ease';
  }, 300)
  setTimeout(function () {
    playAgain.style.translate = '0 -5vh';
    playAgain.style.transition = 'all .2s ease';
  }, 600)
  setTimeout(function () {
    playAgain.style.translate = '0 4vh';
    playAgain.style.transition = 'all .2s ease';
  }, 800)
  setTimeout(function () {
    playAgain.style.translate = '0 -2vh';
    playAgain.style.transition = 'all .1s ease';
  }, 1000)
  setTimeout(function () {
    playAgain.style.translate = '0 1vh';
    playAgain.style.transition = 'all .1s ease';
  }, 1100)
  setTimeout(function () {
    playAgain.style.translate = '0 0vh';
    playAgain.style.transition = 'all .1s ease';
  }, 1200)
}


const winSignFind = (test) => {
  if (test == 'X') {
    palyerXWinCount++;
    turnSignMoveUpDown('X', 'var(--X_piece_color)');
    console.log("X win");
  }
  else {
    palyerOWinCount++;
    console.log("O win");
    turnSignMoveUpDown('O', 'var(--O_piece_color)');
  }
}


const allCellColorDown = (a, b, c) => {
  let arrayCell = ["cell_1", "cell_2", "cell_3", "cell_4", "cell_5", "cell_6", "cell_7", "cell_8", "cell_9"];
  arrayCell.splice(a - 1, 1);
  arrayCell.splice(b - 1, 1);   // a,b,c remove becalue this are win
  arrayCell.splice(c - 1, 1);
  arrayCell.forEach((cellId) => {
    let cell = document.getElementById(cellId);
    if (cell.innerHTML == 'X')
      cell.style.color = 'var(--X_piece_color_low)';
    else
      cell.style.color = 'var(--O_piece_color_low)';

  });
};

const restartMoveMent = () => {
  setTimeout(() => {
    restart.style.translate = '0 0vh';
    restart.style.transition = 'all 1s ease';
  }, 1100)
}

const playerWinSave = () => {
  setTimeout(() => {
    X_win_count.innerHTML = `${palyerXWinCount}/${roundCount}`
    O_win_count.innerHTML = `${palyerOWinCount}/${roundCount}`
  }, 10);

}


const actionForRestart = () => {
  location.reload();
}

restart.addEventListener('touchstart', () => {
  setTimeout(actionForRestart, 1000);
  restartButtonBack.style.width = "100%"
  restartButtonBack.style.transition = "all 1s ease";
  restart.style.color = "black"
});





