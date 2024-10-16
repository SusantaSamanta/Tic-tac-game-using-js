
window.onload = function () {
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

document.addEventListener('click', (event) => {
  if (event.target.tagName === 'DIV' && event.target.id == 'cell_1' && cell_1_lock == 1) {

    cell_1_lock = 0;
    v1 = pieceSwapControl();
    cell_1.innerHTML = v1.substring(0, 1);
    cell_1.style.color = v1.substring(1, v1.length);

    playAgainActivation();
  }
  else if (event.target.tagName === 'DIV' && event.target.id == 'cell_2' && cell_2_lock == 1) {

    cell_2_lock = 0;
    v2 = pieceSwapControl();
    cell_2.innerHTML = v2.substring(0, 1);
    cell_2.style.color = v2.substring(1, v2.length);

    playAgainActivation();
  }
  else if (event.target.tagName === 'DIV' && event.target.id == 'cell_3' && cell_3_lock == 1) {

    cell_3_lock = 0;
    v3 = pieceSwapControl();
    cell_3.innerHTML = v3.substring(0, 1);
    cell_3.style.color = v3.substring(1, v3.length);

    playAgainActivation();
  }
  else if (event.target.tagName === 'DIV' && event.target.id == 'cell_4' && cell_4_lock == 1) {

    cell_4_lock = 0;

    v4 = pieceSwapControl();
    cell_4.innerHTML = v4.substring(0, 1);
    cell_4.style.color = v4.substring(1, v4.length);

    playAgainActivation();
  }
  else if (event.target.tagName === 'DIV' && event.target.id == 'cell_5' && cell_5_lock == 1) {

    cell_5_lock = 0;
    v5 = pieceSwapControl();
    cell_5.innerHTML = v5.substring(0, 1);
    cell_5.style.color = v5.substring(1, v5.length)

    playAgainActivation();
  }
  else if (event.target.tagName === 'DIV' && event.target.id == 'cell_6' && cell_6_lock == 1) {

    cell_6_lock = 0;
    v6 = pieceSwapControl();
    cell_6.innerHTML = v6.substring(0, 1);
    cell_6.style.color = v6.substring(1, v6.length);

    playAgainActivation();
  }
  else if (event.target.tagName === 'DIV' && event.target.id == 'cell_7' && cell_7_lock == 1) {

    cell_7_lock = 0;
    v7 = pieceSwapControl();
    cell_7.innerHTML = v7.substring(0, 1);
    cell_7.style.color = v7.substring(1, v7.length);

    playAgainActivation();
  }

  else if (event.target.tagName === 'DIV' && event.target.id == 'cell_8' && cell_8_lock == 1) {

    cell_8_lock = 0;
    v8 = pieceSwapControl();
    cell_8.innerHTML = v8.substring(0, 1);
    cell_8.style.color = v8.substring(1, v8.length);

    playAgainActivation();

  }
  else if (event.target.tagName === 'DIV' && event.target.id == 'cell_9' && cell_9_lock == 1) {

    cell_9_lock = 0;
    v9 = pieceSwapControl();
    cell_9.innerHTML = v9.substring(0, 1);
    cell_9.style.color = v9.substring(1, v9.length);

    playAgainActivation();
  }

  else if (event.target.tagName === 'DIV' && event.target.id == 'playAgain' && playAgainActive == 1) {
    cell_content_remove();
    playAgain.style.opacity = '20%';
    allCellColorReset();
    playAgainActive = 0;
    playAgainActivation_fun_count = 0;
    pieceNumberCount1 = pieceNumberCount2 = 1;
    roundCount++;
  }

})


let pieceNumberCount1 = 1;

const pieceValue1 = () => {
  if (pieceNumberCount1 % 2 == 0 && pieceNumberCount1 < 10) {
    pieceNumberCount1++;
    return 'O var(--O_piece_color)';
  }
  else if (pieceNumberCount1 % 2 != 0 && pieceNumberCount1 < 10) {
    pieceNumberCount1++;
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
    return 'X var(--X_piece_color)';
  }
  else if (pieceNumberCount2 % 2 != 0 && pieceNumberCount2 < 10) {
    pieceNumberCount2++;
    return 'O var(--O_piece_color)';
  }
}


const pieceSwapControl = () => {
  if (roundCount % 2 == 0) 
    return pieceValue2();
  else 
    return pieceValue1();
}




const cell_content_remove = () => {
  cell_1.innerHTML = cell_2.innerHTML = cell_3.innerHTML = cell_4.innerHTML = cell_5.innerHTML = cell_6.innerHTML = cell_7.innerHTML = cell_8.innerHTML = cell_9.innerHTML = '';
  cell_1_lock = cell_2_lock = cell_3_lock = cell_4_lock = cell_5_lock = cell_6_lock = cell_7_lock = cell_8_lock = cell_9_lock = 1;
  v1 = v2 = v3 = v4 = v5 = v6 = v7 = v8 = v9 = 0;
}

let playAgainActivation_fun_count = 0;
const playAgainActivation = () => {
  playAgainActivation_fun_count++;
  // console.log(playAgainActivation_fun_count)
  if (playAgainActivation_fun_count == 9) {
    playAgain.style.opacity = '100%';
    playAgainActive = 1;
  }
}

const allCellColorReset = () => {
  cell_1.style.color = cell_2.style.color = cell_3.style.color = cell_4.style.color = cell_5.style.color = cell_6.style.color = cell_7.style.color = cell_8.style.color = cell_9.style.color = '#4b4b4bc6';
}



const winChecker = () => {

}

const turnOf_X = () => {

}



