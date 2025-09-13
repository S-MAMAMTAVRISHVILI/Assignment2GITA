function getDigitsSum(num) {
    num = Math.abs(num)
    if(num / 10 < 1) {
        return num
    }
    return getDigitsSum(Math.floor(num / 10)) + num % 10
}

//few checks
console.log(getDigitsSum(123))
console.log(getDigitsSum(-123))
console.log(getDigitsSum(7))
console.log(getDigitsSum(-7))
console.log(getDigitsSum(0))
console.log(getDigitsSum(19))
console.log(getDigitsSum(123456789))
