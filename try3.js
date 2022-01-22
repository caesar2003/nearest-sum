let target = 24
let number1 = [-1, 3, 8, 2, 9, 5]
let number2 = [4, 1, 2, 10, 5, 20]
let pairs = [
   [0,0,0] 
]
number1.sort((a, b) => a - b);
number2.sort((a, b) => a - b);
let p = 1
let x = 0
let schleife = true
while (schleife == true) {

    if (number1[number1.length-p] + number2[x] < target) {
        if (Math.abs(target - pairs[0][2])  >  Math.abs(target - (number1[number1.length-p] + number2[x]))) {
            pairs = []
         pairs.push([number1[number1.length-p], number2[x] , number1[number1.length-p] + number2[x]])


    }else if(Math.abs(target - pairs[0][2])  == Math.abs(target - (number1[number1.length-p] + number2[x]))) {
        pairs.push([number1[number1.length-p], number2[x] , number1[number1.length-p] + number2[x]])
    } 




    x++



    } else { 
        if (Math.abs(target - pairs[0][2])  >  Math.abs(target - (number1[number1.length-p] + number2[x]))) {
            pairs = []
         pairs.push([number1[number1.length-p], number2[x] , number1[number1.length-p] + number2[x]])


    }else if(Math.abs(target - pairs[0][2])  == Math.abs(target - (number1[number1.length-p] + number2[x]))) {
        pairs.push([number1[number1.length-p], number2[x] , number1[number1.length-p] + number2[x]])
    } 
    p++ 
    }
    if (p > number1.length || x > number2.length) {
        schleife = false
    }
    
}





console.log(pairs)