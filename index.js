
  
function display()
{
  
//document.getElementById("first").innerHTML = document.getElementById("fullname").value;
document.getElementById("second").innerHTML = document.getElementById("age").value;
document.getElementById("third").innerHTML = document.getElementById("industry").value;
document.getElementById("fourth").innerHTML = document.getElementById("six").value;
document.getElementById("fith").innerHTML = document.getElementById("seven").value;
}

let OnePip = 0.0001;
let vol,openprice,netSal;


function netSalary() {
    openprice = document.getElementById("seven").value;
     netSal = openprice*50;
     document.getElementById("seventh").textContent = netSal;
    vol = document.getElementById("six").value;
    let PipValue = OnePip / openprice * vol;
    document.getElementById("sixth").textContent = PipValue;
  if(document.getElementById("fullname").value === "USD"){
    document.getElementById("first").textContent = PipValue;
  }
  else{
      document.getElementById("seventh").textContent = netSal;
  }
}


