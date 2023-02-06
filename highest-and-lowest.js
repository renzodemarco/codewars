// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// My Solution:

const highAndLow = (numbers) => {
    let array = numbers.split(" ");
    return Math.min(...array) + " " + Math.max(...array);
}