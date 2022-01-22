let target = 24
let target1 = target
let target2 = target
let number1 = [-1, 3, 8, 2, 9, 5]
let number2 = [4, 1, 2, 10, 5, 20]
let pairs = [
    
]
let stopnow = false
number1.sort((a, b) => a - b);
number2.sort((a, b) => a - b);


while (stopnow == false) {
for (let i = 0; i < number1.length; i++) {
    if (target1 == target2) {
        if (number2.includes(target -number1[i]) == true) {
            pairs.push([number1[i], target -number1[i] , target ])
            stopnow = true
        }    
    } else {
        if (number2.includes(target1 -number1[i]) == true) {
        pairs.push([number1[i], target1 -number1[i] , target1 ])
        stopnow = true
    }
    if (number2.includes(target2 -number1[i]) == true) {
        pairs.push([number1[i], target2 -number1[i] , target2 ])
        stopnow = true
    }
    }
    
    
    
}
target1--
target2++ 
}
console.log(pairs)