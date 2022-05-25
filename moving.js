function Moving(input){
  let width=Number(input[0]);
  let lenght=Number(input[1]);
  let height=Number(input[2]);
  let doneCommand=" ";
  let boxes;
  let availableSpace=width*lenght*height;
  let ocupiedSpace=0;
  let index=3;
  while(doneCommand!=="Done"){
    // width=input[index++];
    // length=input[index++];
    // height=input[index++];
    boxes=Number(input[index++]);
    ocupiedSpace=boxes[index]+ocupiedSpace;
    if(availableSpace<ocupiedSpace){
      let neededSpace=ocupiedSpace-availableSpace;
      console.log(`No more free space! You need ${neededSpace} Cubic meters more.`)
      break;
    }
    doneCommand=input[index++];
  }
  let spaceLeft=availableSpace-ocupiedSpace;
  console.log(`${spaceLeft} Cubic meters left.`);
}
Moving(["10","10","2","20","20","20","20","122"]);