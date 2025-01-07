/** Övning 3 */

/**
 * Skriv en funktion som tar tre parametrar. 
 * De första två är två tal och den sista är en operator d.v.s antingen '+', '-', '/', '*'. 
 * Utför beräkningen och returnera summan och skriv ut. 
 * Det ska enbart gå att skicka med siffror (förutom operanden som är en sträng då) 
 * och varje operation ska vara sin egen funktion. 
 * Tips! Här kan typeof vara bra att använda
 * */

/**
 * 1. Ta in två tal och en sträng som säger vad vi ska göra med dessa tal
 * 2. Kolla att de två första talen är siffror
 * 3. Kolla vilken operation som ska göras (addition, subtraktion etc) och anropa korrekt funktion
 * 4. Gör uträkning och returnera summan
 * 5. Skriv ut summan
 */

// Detta är testdata som du inte behöver göra någonting med
calculate(5, 10, '+');
calculate(5, 10, '-');
calculate(5, 10, '/');
calculate(5, 10, '*');
calculate('hej', 10);
calculate(10, 'Hej');

function calculate(firstNumber, secondNumber, operation) {
}

function add() {
}

function subtract() {
}

function divide() {
}

function multiply() {
}