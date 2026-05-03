const myNum = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10];

// const newNum = myNum.filter( (num) => {
//    return num > 4;
// })

newNum = []

myNum.forEach( (num) => {
    if(num > 4) {
        newNum.push(num);
    }

})

console.log(newNum);


