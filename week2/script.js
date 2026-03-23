function calculateResult(){
    let totalMarks =
    Number(document.getElementById("s1").value)+ 
    Number(document.getElementById("s2").value) +
    Number(document.getElementById("s3").value) +
    Number(document.getElementById("s4").value) +
    Number(document.getElementById("s5").value) +
    Number(document.getElementById("s6").value) +
    Number(document.getElementById("s7").value) +
    Number(document.getElementById("s8").value);
  let totalBox = document.getElementById("total");
  totalBox.innerHTML = "Total Marks: " + totalMarks +" / 800";
  let resultBox = document.getElementById("result");
  if(totalMarks>=700){
    resultBox.innerHTML = "You got Distinction";
    resultBox.style.color="green";
  }
  else if(totalMarks>=600){
    resultBox.innerHTML = "You got First Division";
  }
  else if(totalMarks>=500){
    resultBox.innerHTML = "You Second Division";
  }
  else if(totalMarks >= 400){
    resultBox.innerHTML = "You Third Division";
  }
  else{
    resultBox.innerHTML="You are Failed";
    resultBox.style.color="red";
  }
}