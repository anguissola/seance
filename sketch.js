//v2

let submarine = ['I', 'WAS', 'FRESH', '&nbsp;', 'BUT', 'STILL', 'INHABITING']
let trespassers = ['HAVE', 'YOUR', 'CHILDREN', 'FOLLOWED', 'IT', 'ANY', 'BETTER']
let bystander = ['SET', 'PLEASURE', 'ASIDE', 'EVERY', '&nbsp;', 'BRANCH', 'BREAK']
let fumes = ['MY', 'BETTER', 'HALF', 'SWEETHEART', "WASN'T", 'THAT', 'REVEALING']
let soldiers = ["EYES", '&nbsp;', "FORMED", "UNDER", "VILLAINOUS", "TOUCHES", '&nbsp;']
let derailment = ["INTO", "YESTERDAY", "BROKEN", "GROUND", "AT", "THE WINDOW", "PANE"]
let baby = ["YOU", "HONEY", "THINGS", '&nbsp;', "LEAST", "YOU'RE", "QUICK"]

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

  let backdrop = createImg('https://64.media.tumblr.com/75fa68ce1dfc8137c5f4b830deafdea4/6552574412a6de9a-ed/s2048x3072/b28dd87dca44acf48e75bea13967735ea68fa6e3.pnj');
  backdrop.size(1024,610);

  let button1 = createImg('https://64.media.tumblr.com/eff016a22aa1a22ff9cc50a9f7b3725e/ae15ce1256d1e444-20/s400x600/ad68ef9b11e270ae66f2166bb5e14a5fa0083587.pnj');
  button1.size(60, 20);
  button1.position(273,407);
  //button positioning, position of button does not affect position of correalated column! :)
  // button1.position(50, 100);
  button1.mouseClicked(mite);
 

  //column2
  let button2 = createImg('https://64.media.tumblr.com/eff016a22aa1a22ff9cc50a9f7b3725e/ae15ce1256d1e444-20/s400x600/ad68ef9b11e270ae66f2166bb5e14a5fa0083587.pnj');
  button2.size(60, 20);
  button2.position(343,407);
  button2.mouseClicked(cricket);

  //column3
  let button3 = createImg('https://64.media.tumblr.com/eff016a22aa1a22ff9cc50a9f7b3725e/ae15ce1256d1e444-20/s400x600/ad68ef9b11e270ae66f2166bb5e14a5fa0083587.pnj');
  button3.size(60, 20);
  button3.position(413,407);
  button3.mouseClicked(moth);

  //column4
  let button4 = createImg('https://64.media.tumblr.com/eff016a22aa1a22ff9cc50a9f7b3725e/ae15ce1256d1e444-20/s400x600/ad68ef9b11e270ae66f2166bb5e14a5fa0083587.pnj');
  button4.size(60, 20);
  button4.position(483,407);
  button4.mouseClicked(katydid);

  //column5
  let button5 = createImg('https://64.media.tumblr.com/eff016a22aa1a22ff9cc50a9f7b3725e/ae15ce1256d1e444-20/s400x600/ad68ef9b11e270ae66f2166bb5e14a5fa0083587.pnj');
  button5.size(60, 20);
  button5.position(553,407);
  button5.mouseClicked(bumblebee);

  //column6
  let button6 = createImg('https://64.media.tumblr.com/eff016a22aa1a22ff9cc50a9f7b3725e/ae15ce1256d1e444-20/s400x600/ad68ef9b11e270ae66f2166bb5e14a5fa0083587.pnj');
  button6.size(60, 20);
  button6.position(623,407);
  button6.mouseClicked(beetle);

  //column7
  let button7 = createImg('https://64.media.tumblr.com/eff016a22aa1a22ff9cc50a9f7b3725e/ae15ce1256d1e444-20/s400x600/ad68ef9b11e270ae66f2166bb5e14a5fa0083587.pnj');
  button7.size(60, 20);
  button7.position(693,407);
  button7.mouseClicked(fly);

  let specialButton = createImg('https://64.media.tumblr.com/240bd2a7cab5f69d7fbb9011401f2aa5/7487fb949dcbdc54-34/s250x400/93bf6df8a914ca6085475a843ceb8a57ed77de98.pnj');
  specialButton.position(950,550);
  specialButton.size(30,30);
  // specialButton.position(900,0);
  specialButton.mouseClicked(openUp);

}



function mite() {
  console.log(index1);
  //add one to index
  let miteBlock = createP(submarine[index1]);
  miteBlock.position(277,225);
  index1++;
  console.log("Column 1 functional!!")
}

function cricket() {
  console.log(index2);
  let cricketBlock = createP(trespassers[index2]);
  cricketBlock.position(347,225);
  index2++;
  console.log("Column 2 functional!");
}

function moth() {
  console.log(index3);
  let mothBlock = createP(bystander[index3]);
  mothBlock.position(417,225);
  index3++;
  console.log("Column 3 functional!")
}

function katydid() {
  console.log(index4);
  let katydidBlock=createP(fumes[index4]);
  katydidBlock.position(487,225);
  index4++;
  console.log("Column 4 functional!")
}

function bumblebee() {
  console.log(index5);
  let bumblebeeBlock = createP(soldiers[index5]);
  bumblebeeBlock.position(557,225);
  index5++;
  console.log("Column 5 functional!")
}

function beetle() {
  console.log(index6);
  let beetleBlock = createP(derailment[index6]);
  beetleBlock.position(627,225)
  index6++;
  console.log("Column 6 functional!")
}

function fly() {
  console.log(index7);
  let flyBlock = createP(baby[index7]);
  flyBlock.position(697,225);
  index7++;
  console.log("Column 7 functional!")
}

function openUp() {
  let lightsOn = createImg('https://64.media.tumblr.com/6bdc3948eaffd94d7c2fb3ed819b6c50/9be40a6325b6df81-30/s640x960/ab0d8cafba9f3265b6d3b780b935c49194fffb01.pnj');
  lightsOn.position(490,70);
  lightsOn.size(60,60);
  let newTitle = createImg('https://64.media.tumblr.com/27408d9381ec57972d0fc5e0f5814fbb/008236fa6de67378-97/s2048x3072/81aa460d4e9ee4bcb61d1a0322999a39f80b70df.pnj');
  newTitle.position(415,485);
  newTitle.size(210,105);
}
