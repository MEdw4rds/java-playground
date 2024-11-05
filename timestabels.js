function timesTables(tabels,times){
    for (let i = 1; i <= tabels; i++){
        console.log(`${i} times tabel`);
        for (let j = 1; j <= times; j++){
            console.log(`${i} x ${j} = ${i * j}`)
        }
    console.log("----")
    }
}

timesTables(3,4)


const numbers = [43, 2, 90, 12, 14];

for (let number of numbers) {
    console.log(number * 2);
}

for (let i = 0; i < numbers.length; i++){
    numbers[i] = numbers[i] / 2;
}
console.log(numbers)