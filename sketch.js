//establishing columns
// let column1Div;
// let column2Div;
// let column3Div;
// let column4Div;
// let column5Div;
// let column6Div;
// let column7Div;
// //esablishing column content
// let submarine = ['I', 'WAS', 'FRESH', ' ', 'BUT', 'STILL', 'INHABITING']
// let trespassers = ['HAVE', 'YOUR', 'CHILDREN', 'FOLLOWED', 'IT', 'ANY', 'BETTER']
// let bystander = ['SET', 'PLEASURE', 'ASIDE', 'EVERY', ' ', 'BRANCH', 'BREAK']
// let fumes = ['MY', 'BETTER', 'HALF', 'SWEETHEART', "WASN'T", 'THAT', 'REVEALING']
// let soldiers = ["EYES", " ", "FORMED", "UNDER", "VILLAINOUS", "TOUCHES", " "]
// let derailment = ["INTO", "YESTERDAY", "BROKEN", "GROUND", "AT", "THE WINDOW", "PANE"]
// let baby = ["YOU", "HONEY", "THINGS", " ", "LEAST", "YOU'RE", "QUICK"]

// //establishing button things


// //establishing button labels
// // let txt, word, keywords = ["SUBMARINE", "TRESPASSERS", "BYSTANDERS", "FUMES", "SOLDIERS", "DERAILMENT", "BABY"
// // ]

// function setup() {
//   noCanvas();
// }

// function draw() {
//   //drawing columns
//   column1Div = select("#column1");
//   column2Div = select("#column2");
//   column3Div = select("#column3");
//   column4Div = select("#column4");
//   column5Div = select("#column5");
//   column6Div = select("#column6");
//   column7Div = select("#column7");
//   //drawing comlumn content
//   column1Div.html(join(submarine, " "));
//   column2Div.html(join(trespassers, " "));
//   column3Div.html(join(bystander, " "));
//   column4Div.html(join(fumes, " "));
//   column5Div.html(join(soldiers, " "));
//   column6Div.html(join(derailment, " "));
//   column7Div.html(join(baby, " "));
// }

// function createButtons() {
//   }


//class test

let submarine = ['I', 'WAS', 'FRESH', '&nbsp;', 'BUT', 'STILL', 'INHABITING']
let trespassers = ['HAVE', 'YOUR', 'CHILDREN', 'FOLLOWED', 'IT', 'ANY', 'BETTER']
let bystander = ['SET', 'PLEASURE', 'ASIDE', 'EVERY', '&nbsp;', 'BRANCH', 'BREAK']

let index = 0;

function setup() {
  noCanvas()

  //column 1
  let button = createButton("SUBMARINE");
  button.mouseClicked(mite);

  //column2
  let button2 = createButton("TRESPASSERS");
  button.mouseClicked(cricket);

  //column3
  let button3 = createButton("BYSTANDER");
  button.mouseClicked(moth);
  }

  //column1
function mite(){
  //add one to index
  createP( submarine[index] );
  index++;
  console.log("Column 1 functional!!")
}

//column2
function cricket(){
  createP (trespassers[index]);
  index++;
  console.log("Column 2 functional!")
}

//column3
function moth(){
  createP (bystander[index]);
  index++;
  console.log("Column 3 functional!")
}

// //1 make button 2button.mouseClicked(fn) <-- make paragraph createP()