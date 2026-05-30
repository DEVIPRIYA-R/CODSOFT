const display = document.getElementById("display");

function appendNumber(number){

    display.value += number;

}

function appendOperator(operator){

    display.value += operator;

}

function clearDisplay(){

    display.value = "";

}

function backspace(){

    display.value =
    display.value.slice(0,-1);

}

function squareRoot(){

    try{

        display.value =
        Math.sqrt(Number(display.value));

    }

    catch{

        display.value = "Error";

    }

}

function square(){

    try{

        display.value =
        Math.pow(Number(display.value),2);

    }

    catch{

        display.value = "Error";

    }

}

function reciprocal(){

    try{

        display.value =
        1 / Number(display.value);

    }

    catch{

        display.value = "Error";

    }

}

function calculate(){

    if(display.value === ""){

        return;

    }

    else{

        try{
            display.value = eval(display.value);
        }

        catch{
            display.value = "Error";
        }

    }

}
document.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        calculate();
    }

});