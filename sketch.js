//v2

let submarine = ['I', 'WAS', 'FRESH', '&nbsp;', 'BUT', 'STILL', 'INHABITING']
let trespassers = ['HAVE', 'YOUR', 'CHILDREN', 'FOLLOWED', 'IT', 'ANY', 'BETTER']
let bystander = ['SET', 'PLEASURE', 'ASIDE', 'EVERY', '&nbsp;', 'BRANCH', 'BREAK']
let fumes = ['MY', 'BETTER', 'HALF', 'SWEETHEART', "WASN'T", 'THAT', 'REVEALING']
let soldiers = ["EYES", '&nbsp;', "FORMED", "UNDER", "VILLAINOUS", "TOUCHES", '&nbsp;']
let derailment = ["INTO", "YESTERDAY", "BROKEN", "GROUND", "AT", "THE WINDOW", "PANE"]
let baby = ["YOU", "HONEY", "THINGS", '&nbsp;', "LEAST", "YOU'RE", "QUICK"]

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
  let d1 = createDiv();
  d1.position(100,50);

  let d2 = createDiv();
  d2.position(150,50);

  let button1 = createImg('https://64.media.tumblr.com/eff016a22aa1a22ff9cc50a9f7b3725e/ae15ce1256d1e444-20/s400x600/ad68ef9b11e270ae66f2166bb5e14a5fa0083587.pnj');
  button1.size(80, 26.6);
  // button1.position(50, 100);
  button1.mouseClicked(mite);
 

  //column2
  let button2 = createImg('https://64.media.tumblr.com/eff016a22aa1a22ff9cc50a9f7b3725e/ae15ce1256d1e444-20/s400x600/ad68ef9b11e270ae66f2166bb5e14a5fa0083587.pnj');
  button2.size(80, 26.6);
  button2.mouseClicked(cricket);

  //column3
  let button3 = createImg('https://64.media.tumblr.com/eff016a22aa1a22ff9cc50a9f7b3725e/ae15ce1256d1e444-20/s400x600/ad68ef9b11e270ae66f2166bb5e14a5fa0083587.pnj');
  button3.size(80, 26.6);
  button3.mouseClicked(moth);

  //column4
  let button4 = createImg('https://64.media.tumblr.com/eff016a22aa1a22ff9cc50a9f7b3725e/ae15ce1256d1e444-20/s400x600/ad68ef9b11e270ae66f2166bb5e14a5fa0083587.pnj');
  button4.size(80, 26.6);
  button4.mouseClicked(katydid);

  //column5
  let button5 = createImg('https://64.media.tumblr.com/eff016a22aa1a22ff9cc50a9f7b3725e/ae15ce1256d1e444-20/s400x600/ad68ef9b11e270ae66f2166bb5e14a5fa0083587.pnj');
  button5.size(80, 26.6);
  button5.mouseClicked(bumblebee);

  //column6
  let button6 = createImg('https://64.media.tumblr.com/eff016a22aa1a22ff9cc50a9f7b3725e/ae15ce1256d1e444-20/s400x600/ad68ef9b11e270ae66f2166bb5e14a5fa0083587.pnj');
  button6.size(80, 26.6);
  button6.mouseClicked(beetle);

  //column7
  let button7 = createImg('https://64.media.tumblr.com/eff016a22aa1a22ff9cc50a9f7b3725e/ae15ce1256d1e444-20/s400x600/ad68ef9b11e270ae66f2166bb5e14a5fa0083587.pnj');
  button7.size(80, 26.6);
  button7.mouseClicked(fly);

}



function mite() {
  console.log(index1);
  //add one to index
  createP(submarine[index1]);
  index1++;
  console.log("Column 1 functional!!")
}

function cricket() {
  console.log(index2);
  createP(trespassers[index2]);
  index2++;
  console.log("Column 2 functional!");
}

function moth() {
  console.log(index3);
  createP(bystander[index3]);
  index3++;
  console.log("Column 3 functional!")
}

function katydid() {
  console.log(index4);
  createP(fumes[index4]);
  index4++;
  console.log("Column 4 functional!")
}

function bumblebee() {
  console.log(index5);
  createP(soldiers[index5]);
  index5++;
  console.log("Column 5 functional!")
}

function beetle() {
  console.log(index6);
  createP(derailment[index6]);
  index6++;
  console.log("Column 6 functional!")
}

function fly() {
  console.log(index7);
  createP(baby[index7]);
  index7++;
  console.log("Column 7 functional!")
}


// //1 make button 2button.mouseClicked(fn) <-- make paragraph createP()