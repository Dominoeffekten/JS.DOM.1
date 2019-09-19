'use strict'; 

let roll1 = 0;
let roll2 = 0;
let roll3 = 0;
let roll4 = 0;
let roll5 = 0;
let roll6 = 0;
let flip;



let i = 0;
while(i < 10){
    flip = Math.random();
    flip = Math.floor( flip * 6 + 1 );
    switch (flip) {
        case 1:
            roll1++;
            break;
        default:
            roll2++;
            break;
        case 3: 
            roll3++;
            break;
        case 4: 
            roll4++;
            break;
        case 5: 
            roll5++;
            break;
        case 6:
            roll6++;
            break;
    }
    i++;
}

console.log('Terningen landede på 1: ' + roll1);
console.log('Terningen landede på 2: ' + roll2);
console.log('Terningen landede på 3: ' + roll3);
console.log('Terningen landede på 4: ' + roll4);
console.log('Terningen landede på 5: ' + roll5);
console.log('Terningen landede på 6: ' + roll6);