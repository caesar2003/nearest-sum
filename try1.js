

let target = 24
let number1 = [-1, 3, 8, 2, 9, 5]
let number2 = [4, 1, 2, 10, 5, 20]
let pairs = [
    [0, 0, 0],
]


number1.sort((a, b) => a - b);
number2.sort((a, b) => a - b);

for (let i = 0; i < number1.length; i++) {
    for (let p = 0; p < number2.length; p++) {
        if (Math.abs(target - pairs[0][2])  >  Math.abs(target - (number1[i] + number2[p])) ) {
            pairs = []    
            pairs = [
                [number1[i], number2[p], number1[i] + number2[p]]
            ]   
        } else if(Math.abs(target - pairs[0][2])  ==  Math.abs(target - (number1[i] + number2[p]))){
            pairs.push([number1[i], number2[p], number1[i] + number2[p]])     
        }      
    }    
    
}
console.log(pairs)