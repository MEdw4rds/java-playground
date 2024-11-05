
// Vanilla JavaScript Function //------------------------------------------------------------

// function addTwoNumbers(a,b) {
//     //code block
//     return a + b;
// }

// let sum = addTwoNumbers(1,3)
// console.log(sum)



// // Arrow Function With Parameters //------------------------------------------------------------

// const addTwoNumbers2 = (a,b) => {
//     return a + b;
// } 

// let sum2 = addTwoNumbers2(1,3);
// console.log(sum2);



// // Single Line Arrow Function With Parameters //------------------------------------------------------------

// // const addTwoNumbers3 = (a,b) => (a + b);  also valid
// const addTwoNumbers3 = (a,b) => a + b;
// let sum3 = addTwoNumbers2(1,3);
// console.log(sum3);



// // Implicit Returns //------------------------------------------------------------

// const saySomething = message => console.log(message);
// saySomething("Hello there!");

// const sayHello = () => console.log("hello");



// // Returning Multiple Lines //------------------------------------------------------------

// const returnMultipleLines = () => (
//     `<p>
// This is a multi line string
// </p>`
// )

// console.log(returnMultipleLines())


//------------------------------------------------------------

// let students = [
//     {
//         name: 'John',
//         subjects: ['maths', 'english', 'cad'],
//         teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
//         results: {maths: 90, english: 75, cad: 87},
//     },
//     {
//         name: 'Emily',
//         subjects: ['science', 'maths','english', 'art'],
//         teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
//         results: {science: 93, maths: 95, english: 80, art: 95},
//     },
//     {
//         name: 'Adam',
//         subjects: ['science', 'maths', 'art'],
//         teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
//         results: {science: 63, maths: 79, art: 95},
//     }
// ];


//------------------------------------------------------------

// const averagePoints = (arr,subject) => { 
//     let resultCount = 0;
//     let count = 0;
//     for (let student of arr){
//         if (subject in student.results) {
//             for(let subj in student.results){
//                 if(subj == subject) {
//                     ++count;
//                     resultCount = resultCount + student.results[subject];
//                 }
//             }
//         }
//     }
//     return resultCount / count;
// }

// let averageMarks  = averagePoints(students,"english")

// console.log(averageMarks)

// for(let i in arr){
// console.log(arr[i].results[subject]);
//     let sum = 0;
//     sum =+ arr[i].results[subject];
//     // console.log(sum)
// }
// return sum / arr[i].results[subject].length;



//------------------------------------------------------------


// function basicOp(operation, value1, value2){
//     if (operation === "add"){
//         result = value1 + value2;
//         return result;
//     }else if (operation === "subtract"){
//         result = value1 - value2;
//         return result;
//     }else if (operation === "multiply"){
//         result = value1 * value2;
//         return result;
//     }else if (operation === "divide"){
//         result = value1 / value2;
//         return result;
//     } else {
//         result = "Please use add,subtract,multiply,divide and two numbers"
//         return result;
//     }
// }

// console.log(basicOp("multiply", 45, 2));




//------------------------------------------------------------

function findOutlier(integers) {
    let evens = [];
    let odds = [];

    integers.forEach(a => {
        if(a % 2 == 0) {
            evens.push(a);
        } else {
            odds.push(a);
        }
    })

    if(evens.length == 1){
        return evens[0]
    } else if (odds.length == 1){
        return odds[0]
    }
    return "The array has no outlier."
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2, 6, 8, 10, 3]));
console.log(findOutlier([0, 0, 3, 0, 0]));
console.log(findOutlier([1, 1, 0, 1, 1]));

//------------------------------------------------------------


