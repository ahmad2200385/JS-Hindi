const number = [1, 2, 3, 4, 5]; 

// const sum =number.reduce (function (acc , curval) {
//     console.log(`acc: ${acc} and curval is ${curval}` );
    
//     return acc + curval
    
// } , 0)

const sum = number.reduce ( (acc , curval) => acc + curval , 0)

console.log(sum);
