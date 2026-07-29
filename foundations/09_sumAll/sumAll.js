const sumAll = function(num1, num2) {
    let array = [num1, num2].sort((a,b) => a - b);
    let result = 0;
    for (let i = 1; i <= array[1]; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;