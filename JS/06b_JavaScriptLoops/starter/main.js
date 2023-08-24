let i = 1
for (i; i < 10; i++) {
    console.log(i);
}

let x = 2
let loopCounter = 0

while (x < 1000) {
    x = x**=2; 
    loopCounter++;
    console.log('X =' + x + 'Loop Counter' + loopCounter)

}

