alert('Working alert');
console.log('Yes');

let currentresult = 0;
let logentries = [];

function getUserInput(){
    return +userInput.value;
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
    const logentry = {
        operation : operationIdentifier,
        prevResult : prevResult,
        number : operationNumber,
        newResult : newResult
    };
    logentries.push(logentry);
}

function createAndWriteOutput(operator, before, input){
    const description = `${before} ${operator} ${input}`;
    outputResult(currentresult, description);
}

function calculateResult(operation){
    const userNumber = getUserInput();
    const initialresult = currentresult;
    let operator;
    switch(operation){
        case 'ADD':
            operator = '+';
            currentresult += userNumber;
            break;
        case 'SUBTRACT':
            operator = '-';
            currentresult -= userNumber;
            break;
        case 'MULTIPLY':
            operator = '*';
            currentresult *= userNumber;
            break;
        case 'DIVIDE':
            if(userNumber==0){
                operator = 'Cannot divide by';
                break;
            }
            operator = '/';
            currentresult /= userNumber;
            break;
        default:
            operator = 'Error';
            break;
    }
    createAndWriteOutput(operator, initialresult, userNumber);
    writeToLog(operation,initialresult,userNumber,currentresult);
}

function add(){
    calculateResult('ADD');
}

function subtract(){
    calculateResult('SUBTRACT');
}

function multiply(){
    calculateResult('MULTIPLY');
}

function divide(){
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);

