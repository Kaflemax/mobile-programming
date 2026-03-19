function calculateResult(){
    let marks1 = Number(document.getElementById("m1").value)
    let marks2 = Number(document.getElementById("m2").value)
    let marks3 = Number(document.getElementById("m3").value)
    let marks4 = Number(document.getElementById("m4").value)
    let marks5 = Number(document.getElementById("m5".value))
    let marks6 = Number(document.getElementById("m6").value)
    let marks7 = Number(document.getElementById("m7").value)
    let marks8 = Number(document.getElementById("m8").value);

    let totalMarks = marks1+marks2+marks3+marks4+marks5+marks6+marks7+marks8;

    let totalText = document.getElementById("total");
    let resultText = document.getElementById("result");

    totalText.innerHTML = "Total Marks:" + totalMarks + "/800";

    if(totalMarks>=700){
        document.getElementById("result").innerHTML = "DISTINCTION";
        document.getElementById("result").style.color = "green";
    }
    else if(totalMarks >= 600){
        document.getElementById("result").innerHTML = "First Division";
    }
    else if(totalMarks >= 500){
        document.getElementById("result").innerHTML = "Second Division";
    }
    else if(totalMarks >= 400){
        document.getElementById("result").innerHTML = "Third Division";
    }
    else{
        document.getElementById("result").innerHTML = "FAIL";
        document.getElementById("result").style.color = "red";
    }
}