let btnCalc = document.getElementById('btn-calc');
btnCalc.addEventListener('click', gradeScale);

btn-add.addEventListener('click', function() {
    let newInput = document.createElement('input');
    input.appendchild(newInput);
})
btn-rem.addEventListener('click', function() {
    
})



function gradeScale() {
    let grade = document.getElementById('input') .value;
    let result = document.getElementById('output');
    let btnAdd = document.getElementById('btn-add');
    let btnRem = document.getElementById('btn-rem');

    if (grade >= 80 && grade <= 100){
        result.innerHTML ="You got an 'A'. Excellent!";
    }
    else if(grade >= 60 && grade <80){
        result.innerHTML = "You got a 'B'. Great!";
    }
    else if(grade >= 50 && grade <60){
        result.innerHTML = "You got a 'C'. Aim Higher.";
    }
    else if(grade >= 40 && grade <50){
        result.innerHTML = "You got a 'D'. You need to study";
    }
    else if(grade >= 35 && grade <40){
        result.innerHTML = "You got a 'E'. You need to study";
    }
    else if(grade < 35){
        result.innerHTML = "You got an 'F'. You have failed the class";
    }
    else{
        result.innerHTML = "Invalid grade. please enter a numeric grade.";
    }
}

