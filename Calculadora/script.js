let runningTotal = 0;
let buffer = "0";
let previouesOperator;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value)){
        handlesSymbol(value);
    }else{
        handleNumber(value);    
    }
    screen.innerText = buffer;
}

function handlesSymbol(symbol){
    switch(symbol){
            case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if(previouesOperator === null){
                return
            }
            flushOperation(parseInt(buffer));
            previouesOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '←':
            if(buffer.length ==1){
                buffer = '0';
            }else{
                buffer = buffer.toString(0, buffer.length -1);
            }
            break;
        case '+':
        case '-':
        case '*':
        case 'X':
        case '÷':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol){
    if(buffer === '0'){
        return;
    }

    const intBuffer = prarseIn(buffer);

    if(runningTotal === 0){
        runningTotal = intBuffer;
    }else{
        flushOperation(intBuffer);
    }
    previouesOperator = symbol;
    buffer = '0';
    
}

function flushOperation(intBuffer){
    if(previouesOperator === '+'){
        runningTotal += intBuffer;
    }else if(previouesOperator === '-'){
        runningTotal -= intBuffer;
    }else if(previouesOperator === 'X'){
        runningTotal *= intBuffer;
    }else if(previouesOperator === '÷'){
        runningTotal /= intBuffer;
    }
}

function handleNumber(numberString){
    if(buffer === "0"){
        buffer = numberString;
    }else{
        buffer += numberString;
    }
}

function int(){
    document.querySelector('.calc-buttons').addEventListener('click', function(event){
       buttonClick(event.target.innerText); 
    })
}

init();


//ainda não está completo...(os botões não estão funcionando)
