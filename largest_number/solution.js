const largestNumber = (num) => {
    if (num === 0) {
        return 0;
    }

    if(num > 0) {
        let largestNumber = "9";
        return parseInt(largestNumber.repeat(num))
    }
}

console.log(largestNumber(0));
console.log(largestNumber(1));
console.log(largestNumber(7));