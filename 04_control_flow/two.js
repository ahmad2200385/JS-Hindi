const number = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10];

// const newNum = number.map( (num) => num + 10)

// newNum = []
// number.forEach( (num) => {
//     newNum.push(num + 10);
// })

const newNum = number.map ( (num) => num * 10)
                     .map ( (num) => num + 1)
                     .filter ( (num) => num >= 40 )

console.log(newNum);



// How to copy reference values

// var a = [1, 2, 3];

// var b = a; // b is a reference to the same array as a

// b.pop(); // This will modify the array that both a and b reference

// spread operator

var a = [1, 2, 3];

var b = [...a]; // b is a new array that is a copy of a

b.pop(); // This will only modify b, not a

var obj = { name: 'Alice', age: 30 };

var objCopy = { ...obj }; // objCopy is a new object that is a copy of obj

objCopy.name = 'Bob'; // This will only modify objCopy, not obj


//falsey values: 0, '', null, undefined, NaN, false , document.all