let gpc = 1;
let gps = 0;

let gift = document.querySelector(".gifts");
let parsedGift = parseFloat(gift.innerHTML);

let lps = document.getElementById('lps')
let lpc = document.getElementById('lpc')

let puuro = false
let sormikkaat = false
let apuuro = false

function incrementGift() {
  if (sormikkaat === false) {
  gift.innerHTML = Math.round(parsedGift += gpc);
  } else {
    gift.innerHTML = Math.round(parsedGift += gpc*2);
  }
}

function buyHands() {

  let hintaelement = document.getElementById('hinta-hand')
  let hinta = parseFloat(hintaelement.innerHTML)

  let tasoelement = document.getElementById('taso-hand');
  let taso = parseFloat(tasoelement.innerHTML);

  if (parsedGift >= hinta) {
    gpc++
    parsedGift -= hinta

    taso += 1
    tasoelement.innerHTML = taso

    hinta = hinta + hinta*0.35
    hintaelement.innerHTML = Math.round(hinta)

  }
}

function buyPuuTonttu() {

  let hintaelement = document.getElementById('hinta-ptonttu')
  let hinta = parseFloat(hintaelement.innerHTML)

  let tasoelement = document.getElementById('taso-ptonttu');
  let taso = parseFloat(tasoelement.innerHTML);

  if (parsedGift >= hinta) {
    gps++
    parsedGift -= hinta

    taso += 1
    tasoelement.innerHTML = taso

    hinta = hinta + hinta*0.35
    hintaelement.innerHTML = Math.round(hinta)

  }
}

function buyJTonttu() {

  let hintaelement = document.getElementById('hinta-jtonttu')
  let hinta = parseFloat(hintaelement.innerHTML)

  let tasoelement = document.getElementById('taso-jtonttu');
  let taso = parseFloat(tasoelement.innerHTML);

  if (parsedGift >= hinta) {
    gps += 5
    parsedGift -= hinta

    taso += 1
    tasoelement.innerHTML = taso

    hinta = hinta + hinta*0.35
    hintaelement.innerHTML = Math.round(hinta)

  }
}

function buyKTonttu() {

  let hintaelement = document.getElementById('hinta-ktonttu')
  let hinta = parseFloat(hintaelement.innerHTML)

  let tasoelement = document.getElementById('taso-ktonttu');
  let taso = parseFloat(tasoelement.innerHTML);

  if (parsedGift >= hinta) {
    gps += 25
    parsedGift -= hinta

    taso += 1
    tasoelement.innerHTML = taso

    hinta = hinta + hinta*0.35
    hintaelement.innerHTML = Math.round(hinta)
  }
}

function buySTonttu() {

  let hintaelement = document.getElementById('hinta-stonttu')
  let hinta = parseFloat(hintaelement.innerHTML)

  let tasoelement = document.getElementById('taso-stonttu');
  let taso = parseFloat(tasoelement.innerHTML);

  if (parsedGift >= hinta) {
    gps += 125
    parsedGift -= hinta

    taso += 1
    tasoelement.innerHTML = taso

    hinta = hinta + hinta*0.35
    hintaelement.innerHTML = Math.round(hinta)
  }
}

function buyMTonttu() {

  let hintaelement = document.getElementById('hinta-mtonttu')
  let hinta = parseFloat(hintaelement.innerHTML)

  let tasoelement = document.getElementById('taso-mtonttu');
  let taso = parseFloat(tasoelement.innerHTML);

  if (parsedGift >= hinta) {
    gps += 1000
    parsedGift -= hinta

    taso += 1
    tasoelement.innerHTML = taso

    hinta = hinta + hinta*0.35
    hintaelement.innerHTML = Math.round(hinta)
  }
}

function buyRTonttu() {

  let hintaelement = document.getElementById('hinta-rtonttu')
  let hinta = parseFloat(hintaelement.innerHTML)

  let tasoelement = document.getElementById('taso-rtonttu');
  let taso = parseFloat(tasoelement.innerHTML);

  if (parsedGift >= hinta) {
    gps += 2500
    parsedGift -= hinta

    taso += 1
    tasoelement.innerHTML = taso

    hinta = hinta + hinta*0.35
    hintaelement.innerHTML = Math.round(hinta)
  }
}

function buySormikkaat() {
  sormikkaat = true
  const psormi = document.getElementById('sormi')
  psormi.remove();
}

function buyKarkki() {
  gps = gps*2
  const pkarkki = document.getElementById('kark')
  pkarkki.remove();
}

function buyPuuro() {
  puuro = true
  const ppuuro = document.getElementById('puur')
  ppuuro.remove();
}

function buyAPuuro() {
  apuuro = true
  const apuur = document.getElementById('apuur')
  apuur.remove();
}

setInterval(() => {
  if (sormikkaat === false) {
  lpc.innerHTML = gpc
  } else {
    lpc.innerHTML = gpc*2
  }
  
  if (puuro === false && apuuro === false) {
    parsedGift += gps/10
    lps.innerHTML = gps
  } else if (puuro === true && apuuro === false){
    parsedGift += gps/5
    lps.innerHTML = gps*2
  } else if (puuro === false && apuuro === true) {
    let ugps = gps*8
    parsedGift += ugps/10
    lps.innerHTML = gps*8
  } else {
    parsedGift += gps
    lps.innerHTML = gps*10
  }
  gift.innerHTML = Math.round(parsedGift)

}, 100)

window.incrementGift = incrementGift
window.buyHands = buyHands
window.buyPuuTonttu = buyPuuTonttu
window.buyJTonttu = buyJTonttu
window.buyKTonttu = buyKTonttu
window.buySTonttu = buySTonttu
window.buyMTonttu = buyMTonttu
window.buyRTonttu = buyRTonttu

window.buySormikkaat = buySormikkaat
window.buyKarkki = buyKarkki
window.buyPuuro = buyPuuro
window.buyAPuuro = buyAPuuro
