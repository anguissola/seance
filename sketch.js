//v2

let submarine = ['I', 'WAS', 'FRESH', '&nbsp;', 'BUT', 'STILL', 'INHABITING']
let trespassers = ['HAVE', 'YOUR', 'CHILDREN', 'FOLLOWED', 'IT', 'ANY', 'BETTER']
let bystander = ['SET', 'PLEASURE', 'ASIDE', 'EVERY', '&nbsp;', 'BRANCH', 'BREAK']
let fumes = ['MY', 'BETTER', 'HALF', 'SWEETHEART', "WASN'T", 'THAT', 'REVEALING']
let soldiers = ["EYES", '&nbsp;', "FORMED", "UNDER", "VILLAINOUS", "TOUCHES", '&nbsp;']
let derailment = ["INTO", "YESTERDAY", "BROKEN", "GROUND", "AT", "THE WINDOW", "PANE"]
let baby = ["YOU", "HONEY", "THINGS", '&nbsp;', "LEAST", "YOU'RE", "QUICK"]

let index = 0;

function setup() {
  noCanvas()

  //column 1
  let button1 = createButton("SUBMARINE");
  button1.mouseClicked(mite);

  //column2
  let button2 = createButton("TRESPASSERS");
  button2.mouseClicked(cricket);

  //column3
  let button3 = createButton("BYSTANDER");
  button3.mouseClicked(moth);

  //column4
  let button4 = createButton("FUMES");
  button4.mouseClicked(katydid);

  //column5
  let button5 = createButton("SOLDIERS");
  button5.mouseClicked(bumblebee);

  //column6
  let button6 = createButton("DERAILMENT");
  button6.mouseClicked(beetle);

  //column7
  let button7 = createButton("BABY");
  button7.mouseClicked(fly);
  }



function mite(){
  //add one to index
  createP( submarine[index] );
  index++;
  console.log("Column 1 functional!!")
}

function cricket(){
  createP (trespassers[index]);
  index++;
  console.log("Column 2 functional!")
}

function moth(){
  createP (bystander[index]);
  index++;
  console.log("Column 3 functional!")
}

function katydid(){
  createP (fumes[index]);
  index++;
  console.log("Column 4 functional!")
}

function bumblebee(){
  createP (soldiers[index]);
  index++;
  console.log("Column 5 functional!")
}

function beetle(){
  createP (derailment[index]);
  index++;
  console.log("Column 6 functional!")
}

function fly(){
  createP (baby[index]);
  index++;
  console.log("Column 7 functional!")
}


// //1 make button 2button.mouseClicked(fn) <-- make paragraph createP()