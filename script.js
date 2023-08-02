const shiftInput = document.getElementById("shiftInput");
const plaintextInput = document.getElementById("plaintextInput");
const cyphertextInput = document.getElementById("cyphertextInput");
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const alphabetArr = [...alphabet];
let newAlphabetArr = [...alphabet];

function shiftHandler(num){
    newAlphabetArr = [...alphabet];
    num>25?shiftInput.value=25:(num<1?shiftInput.value=1:num);

    for(let i=0; i<num; i++){
        let firstElement = newAlphabetArr.shift();
        newAlphabetArr.push(firstElement);
    }
    console.log(newAlphabetArr)
}

function cypherInputHandler(val){
    let stringArr = val.split('');
    let newString = ''
    for(let i=0; i<stringArr.length; i++){
        for(let j=0; j<alphabetArr.length; j++){
            if(stringArr[i] == newAlphabetArr[j]){
                newString += alphabetArr[j];
            }
        }
        if(stringArr[i] == ' '){
            newString += ' ';
        }
    }
    plaintextInput.value = newString;
}

function plainInputHandler(val){
    let stringArr = val.split('');
    let newString = ''
    for(let i=0; i<stringArr.length; i++){
        for(let j=0; j<alphabetArr.length; j++){
            if(stringArr[i] == alphabetArr[j]){
                newString += newAlphabetArr[j];
            }
        }
        if(stringArr[i] == ' '){
            newString += ' ';
        }
    }
    cyphertextInput.value = newString;
}   
