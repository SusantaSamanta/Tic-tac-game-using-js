  let o_or_x = 1;
  
  let pieceNumberCount = 1;
  const pieceValue = () => {
    if(pieceNumberCount % 2 == 0 && pieceNumberCount < 10){
      if(o_or_x % 2 == 0)
        console.log('o');
      else
        console.log('x');
      pieceNumberCount ++;
      return;
    }
    else if(pieceNumberCount % 2 != 0 && pieceNumberCount < 10){
      //console.log('ok '+pieceNumberCount);
      if(o_or_x % 2 != 0)
        console.log('o');
      else
        console.log('x');
      pieceNumberCount ++;
      return;
    }
    else {
      console.log('end '+pieceNumberCount);
      pieceNumberCount = 1;
      o_or_x++;
    }

  }
 
 
 
 let i;
 for(i=0;i<50;i++){
  pieceValue();
 }
 
 
 

 
 
 