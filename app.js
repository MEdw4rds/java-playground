// let person = {
//     firstName: "Matt",
//     lastName: "Edwards",
//     age: 23,
//     fullName: function(){
//         return this.firstName = " " + this.lastName;
//     },
// }

//function add(a,b) {return a + b;}



let maths = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },

    test: function(i,n1,n2) {   // i = index number n1 and n2 for numbers
        let mathLib = [this.add, this.subtract, this.multiply, this.divide]
        console.log(mathLib[i](n1,n2)); //works
        return mathLib;
    }
}

maths.test(2,6,3);

console.log(maths.test(1,3,5)); // shows answer and undefined

maths.mathLib[1](1,4,5);

// console.dir(person)

// names = ["mark","matt","arun"]
// delete names[1];

// names.splice(1,1)
// console.log(names)
// console.log(names[1])



// numbers = [1,2,3,4,5]

// result = numbers.reduce(ourfunc)

// function ourfunc(total, value) {
//     return total + value
// }

// console.log(result)
