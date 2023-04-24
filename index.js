
  let openprice, onePip, pipValue, volume, pipV, takeProfitLevel,tp, takeLossLevel, tL, tpP,tlP; 
  onePip = 0.0001;
  function pipUsd(){
    volume = document.getElementById("four").value;
    openprice = document.getElementById("five").value;
   pipValue =(onePip/ openprice)*volume;
   pipValue = pipValue.toFixed(3);
    document.getElementById("zero").textContent = pipValue;
  }

  function takeProfit() {
    volume = document.getElementById("four").value;
    openprice = document.getElementById("five").value;
    takeProfitLevel =document.getElementById("six").value;
    pipValue =(onePip/ openprice)*volume;
    tp = (pipValue/takeProfitLevel)*volume;
    tp = tp.toFixed(3);
    document.getElementById("first").textContent = tp;
  }

function takeLoss() {
    volume = document.getElementById("four").value;
     openprice = document.getElementById("five").value;
  takeLossLevel = document.getElementById("seven").value;
    pipValue =(onePip/ openprice)*volume;
  tL = (pipValue/takeLossLevel)*volume;
  tL = tL.toFixed(3);
  document.getElementById("second").textContent = tL;

}
function takeprofitPip() {
volume = document.getElementById("four").value;
    openprice = document.getElementById("five").value;
    takeProfitLevel = document.getElementById("six").value;
   tp = (pipValue/takeProfitLevel)*volume;
  tp = tp.toFixed(3);
   tpP = tp - openprice;
  tpP = tpP.toFixed(3);
  document.getElementById("third").textContent =  tpP;
 
}

function takeLossPip() {
  volume = document.getElementById("four").value;
    openprice = document.getElementById("five").value;
   takeLossLevel = document.getElementById("seven").value;
  pipValue =(onePip/ openprice)*volume;
    tL = (pipValue/takeLossLevel)*volume;
  tlP = tL - openprice;
  tlP =tlP.toFixed(3);
   document.getElementById("fourth").textContent = tlP;
}


