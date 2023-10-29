module.exports = function toReadable(number) {
    let digits = {
        0: 'zero',
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: 'hundred',
        1000: 'thousand',
        1000000: 'billion',
    }
    if(number === 0) return digits[number];
    let div = number % 100 < 20 && number % 100 > 9 ? 100 : 10;
    let past = 0;
    let res;
    let arr = [];
    while (number >= div / 10) {
        res = number % div - past;
        if (res !== 0) {
            if (div > 100) {
            arr.push(digits[div / 10]);
            arr.push(digits[res / (div / 10)]);
        }else{
            arr.push(digits[res]);
        }
        }
        div *= 10;
        past = past + res;
    }
    return arr.reverse().join(' ');
}
