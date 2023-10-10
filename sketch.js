//v2

let submarine = ['I', 'WAS', 'FRESH', '&nbsp;', 'BUT', 'STILL', 'INHABITING']
let trespassers = ['HAVE', 'YOUR', 'CHILDREN', 'FOLLOWED', 'IT', 'ANY', 'BETTER']
let bystander = ['SET', 'PLEASURE', 'ASIDE', 'EVERY', '&nbsp;', 'BRANCH', 'BREAK']
let fumes = ['MY', 'BETTER', 'HALF', 'SWEETHEART', "WASN'T", 'THAT', 'REVEALING']
let soldiers = ["EYES", '&nbsp;', "FORMED", "UNDER", "VILLAINOUS", "TOUCHES", '&nbsp;']
let derailment = ["INTO", "YESTERDAY", "BROKEN", "GROUND", "AT", "THE WINDOW", "PANE"]
let baby = ["YOU", "HONEY", "THINGS", '&nbsp;', "LEAST", "YOU'RE", "QUICK"]

let miteY = 211;
let cricketY = 211;
let mothY = 211;
let katydidY = 211;
let bumbleeY = 211;
let beetleY = 211;
let flyY = 211;

let backdrop;

let buttonHeight = 392;

//graphics
let glowingLight;
let powerButton;


let index1 = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;
let index5 = 0;
let index6 = 0;
let index7 = 0;

function setup() {
  noCanvas();

  //column 1
 
  backdrop = createImg('offmode3.png');
  backdrop.size(1024,588);

  let button1 = createImg('buttongraphic.png');
  button1.size(60, 20);
  button1.position(273,buttonHeight);
  button1.mouseClicked(mite);
 

  //column2
  let button2 = createImg('buttongraphic.png');
  button2.size(60, 20);
  button2.position(343,buttonHeight);
  button2.mouseClicked(cricket);

  //column3
  let button3 = createImg('buttongraphic.png');
  button3.size(60, 20);
  button3.position(413,buttonHeight);
  button3.mouseClicked(moth);

  //column4
  let button4 = createImg('buttongraphic.png');
  button4.size(60, 20);
  button4.position(483,buttonHeight);
  button4.mouseClicked(katydid);

  //column5
  let button5 = createImg('buttongraphic.png');
  button5.size(60, 20);
  button5.position(553,buttonHeight);
  button5.mouseClicked(bumblebee);

  //column6
  let button6 = createImg('buttongraphic.png');
  button6.size(60, 20);
  button6.position(623,buttonHeight);
  button6.mouseClicked(beetle);

  //column7
  let button7 = createImg('buttongraphic.png');
  button7.size(60, 20);
  button7.position(693,buttonHeight);
  button7.mouseClicked(fly);

  let laneternButton = createImg('lantern button.png');
  laneternButton.position(920,480);
  laneternButton.size(90,90);
  laneternButton.mouseClicked(openUp);

  // let ladyButton = createImg('lady no light.png');
  // ladyButton.size(170,290);
  // ladyButton.position(90,290);
  // ladyButton.mouseClicked(trickOfLight);

}

function openUp() {
  backdrop.attribute("src", 'onmode3.png');
  let light = createImg('glowing light.png');
  light.position(486,70);
  light.size(60,60);
  
  // let light2 = createImg('glowing light.png');
  // light2.position(210,320);
  // light2.size(60,60);

}

// function trickOfLight() {
// let newTitle = createImg('alt title.png');
//   newTitle.position(420,475);
//   newTitle.size(215,215/3);
// }

function mite() {
  console.log(index1);
  //oh god help me
  let miteBlock = createP(submarine[index1]);
  miteBlock.position(277,miteY);
  index1++;
  console.log("Column 1 functional!!");
  miteY += 25;
}

function cricket() {
  console.log(index2);
  let cricketBlock = createP(trespassers[index2]);
  cricketBlock.position(347,cricketY);
  index2++;
  console.log("Column 2 functional!");
  cricketY += 25;
}

function moth() {
  console.log(index3);
  let mothBlock = createP(bystander[index3]);
  mothBlock.position(417,mothY);
  index3++;
  console.log("Column 3 functional!");
  mothY += 25;
}

function katydid() {
  console.log(index4);
  let katydidBlock=createP(fumes[index4]);
  katydidBlock.position(487,katydidY);
  index4++;
  console.log("Column 4 functional!");
  katydidY += 25;
}

function bumblebee() {
  console.log(index5);
  let bumblebeeBlock = createP(soldiers[index5]);
  bumblebeeBlock.position(557,bumbleeY);
  index5++;
  console.log("Column 5 functional!");
  bumbleeY += 25;
}

function beetle() {
  console.log(index6);
  let beetleBlock = createP(derailment[index6]);
  beetleBlock.position(627,beetleY);
  index6++;
  console.log("Column 6 functional!");
  beetleY += 25;
}

function fly() {
  console.log(index7);
  let flyBlock = createP(baby[index7]);
  flyBlock.position(697,flyY);
  index7++;
  console.log("Column 7 functional!")
  flyY += 25;
}


