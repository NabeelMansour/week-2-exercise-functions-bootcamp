# Functions Bootcamp

## Övning 1

Skriv en funktion som loggar ut "Hello function!" i konsollen.

function greeting(){
  console.log("Hello function!")
}

## Övning 2

Skapa variabeln `count` och sätt den till valfritt nummer. Skicka variabeln till funktionen `ìncrease` där variabeln tas emot som parameter. Öka på värdet med 1 och returnera resultatet. Logga sedan ut din variabel `count` i konsollen.

let count = 5;

function increase(num){
  count++
  return count
}
console.log(increase(count))

```javascript
let count = 0;
function increase(c) {}
```

## Övning 3

Skapa en funktion som tar emot två parametrar, ett minimital och ett maxtal. Din funktion skall sedan slumpa fram ett nummer mellan dina två tal, samt returnera resultatet.
function minMax(min, max){
  let result = Math.floor(Math.random() * (max - min + 1) + min)
  return result
}
const myResult = minMax(1, 6)
console.log(myResult)

<details>
<summary>Tips!</summary>
Math.floor(Math.random() * 6 + 1) kommer slumpa fram ett tal mellan 1 och 6.
</details>
## Övning 4

Skriv en funktion som tar en sträng som parameter och returnerar längden på en sträng.
Anropa funktion och console.log svaret. Tips! Du kan skriva `.length` på en variabel som är en sträng för att få längden.

function stringFunction(string){
  if(typeof string === 'string'){
    return string
  } else{
    return 'This is not a string'
  }
}
console.log(stringFunction('5'))

## Övning 5

Skriv en funktion som plockar ut året från en sträng i datumformat. Använd `substring(startIndex, endIndex)` https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring.
Funktionen ska ta en parameter, som ska vara en sträng. Strängen ska alltid ha 10 tecken och följa mönstret 'YYYY-MM-DD'. Man ska kunna skriva year('2019-10-14') och få talet 2019 som resultat.

function stringFunction(string){
  if(typeof string === 'string' && string.length === 10){
    if(string[4] === '-' && string[7] === '-'){
      return string.substring(0, 4)
    }
  }
}
console.log(stringFunction('1997-03-01'))


## Övning 6

Skriv en funktion som tar tre parametrar. De första två är två tal och den sista är en operator d.v.s antingen '+', '-', '/', '\*'.
Utför beräkningen och returnera summan och skriv ut. Det ska enbart gå att skicka med siffror (förutom operanden som är en sträng då) och varje operation ska vara sin egen funktion.
Tips! Här kan `typeof` vara bra att använda https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
Grunden till denna övning, samt intruktioner finner du i mappen miniräknare.

function stringFunction(num1, num2, operator){
  let numOne = Number(num1)
  let numTwo = Number(num2)
  
  
  if(operator === '+'){
    return add(numOne, numTwo)
  } else if(operator === '-'){
    return subtract(numOne, numTwo)
  } else if(operator === '/'){
    return divide(numOne, numTwo)
  } else if(operator === '*'){
    return multiply(numOne, numTwo)
  }
}

function add(num1, num2){
  return num1 + num2
}

function subtract(num1, num2){
  return num1 - num2
}

function divide(num1, num2){
  return num1 / num2
}

function multiply(num1, num2){
  return num1 * num2
}


let sum = stringFunction(5, 5, '-')
console.log(sum)

## Övning 7

Gör om ditt sten, sax och påse - spel så du använder funktioner och försöker återanvända kod.

## Övning 8

Gör om valfritt annat spel i Computational Thinking Games så att det använder sig av funktioner. Vilka delar av programmen kan man abstrahera till egna funktioner?
