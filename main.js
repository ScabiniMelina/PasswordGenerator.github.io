const passwordElement = document.getElementById("password");
const lengthElement = document.getElementById("length");
const uppercaseElement = document.getElementById("uppercase");
const lowercaseElement  = document.getElementById("lowercase");
const numberElement  = document.getElementById("number");
const symbolsElement =  document.getElementById("symbols");
const generateElement =  document.getElementById("generate");
const copyElement = document.getElementById("copy");
const lowercaseLetter = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetter = lowercaseLetter.toUpperCase();
const symbols = '!"#$%&/()@_+=';

generateElement.addEventListener("click",generatePassword);

function generatePassword(){
    const length = lengthElement.value;
    let password = "";
    for (let i = 0; i < length; i++) {
        password += getLetter();
    }
    passwordElement.innerText = password;
}

function getLetter(){
    const randomLetters = [];
    
    if(lowercaseElement.checked){
        randomLetters.push(lowercaseLetter[Math.floor(Math.random()* lowercaseLetter.length)]);
    }
    
    if(uppercaseElement.checked){
        randomLetters.push(uppercaseLetter[Math.floor(Math.random()* uppercaseLetter.length)]);
    }
    
    if(numberElement.checked){
        randomLetters.push(Math.floor(Math.random()*9));
    }

    if(symbolsElement.checked){
        randomLetters.push(symbols[Math.floor(Math.random()*symbols.length)]);
       
    }
    
    if(randomLetters.length == 0) return "";
    
    return randomLetters[Math.floor(Math.random()* randomLetters.length)];
}

copy.addEventListener("click", ()=>{
    if(passwordElement.innerText !== ""){
        // Crea un campo de texto "oculto"
        let aux = document.createElement("input");

        // Asigna el contenido del elemento especificado al valor del campo
        aux.value = passwordElement.innerText;

        // Añade el campo a la página
        document.body.appendChild(aux);

        // Selecciona el contenido del campo
        aux.select();

        // Copia el texto seleccionado
        document.execCommand("copy");

        // Elimina el campo de la página
        document.body.removeChild(aux);
        alert("Password copied to clipboard")
    }

})