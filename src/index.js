module.exports = function toReadable(number) {
    let numFirst = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    let numSecond = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let numThird = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let num = number + "";
    let result = [];
    let numInArr = num.split("");

    for (let i = 0; i < numInArr.length; i++) {
        if (num === "0") {
            return "zero";
        }
        if (numInArr.length === 3) {
            result.push(numFirst[numInArr[i] - 1]);
            result.push("hundred");
            numInArr.shift();
            num = num.substr(1);
        }
        if (
            numInArr.length === 2 &&
            numInArr[numInArr.length - 2] === "0" &&
            numInArr[numInArr.length - 1] === "0"
        ) {
            return result.join(" ");
        }
        if (numInArr.length === 1 || numInArr[numInArr.length - 2] === "0") {
            result.push(numFirst[num - 1]);
            return result.join(" ");
        }
        if (numInArr.length === 2 && numInArr[numInArr.length - 1] === "0") {
            result.push(numSecond[numInArr[i] - 1]);
            return result.join(" ");
        }
        if (num > 10 && num < 20) {
            result.push(numThird[numInArr[numInArr.length - 1] - 1]);
            return result.join(" ");
        }
        if (numInArr.length === 2) {
            result.push(numSecond[numInArr[i] - 1]);
            result.push(numFirst[numInArr[numInArr.length - 1] - 1]);
            return result.join(" ");
        }
    }
};
