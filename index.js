
  let openprice, onePip, pipValue, volume, pipV, takeProfitLevel,tp, takeLossLevel, tL; 
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
    tp = (takeProfitLevel/pipValue)*volume;
    document.getElementById("first").textContent = tp;
  }

function takeLoss() {
    volume = document.getElementById("four").value;
     openprice = document.getElementById("five").value;
  takeLossLevel = document.getElementById("seven").value;
    pipValue =(onePip/ openprice)*volume;
  tL = (takeLossLevel/pipValue)*volume;
  document.getElementById("second").textContent = tL;
  
  
}


