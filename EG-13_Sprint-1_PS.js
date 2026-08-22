/**
 * 01. Check if a Year is a Leap Year
 *
 * @param {number} year
 * @return {boolean}
 */
function isLeapYear(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}



// ``````````````````````````````````````


/**
 * 01. Check if a Year is a Leap Year
 *
 * @param {number} year
 * @return {boolean}
 */
function isLeapYear(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}



// ``````````````````````````````````````



/**
 * 02. Generate Fibonacci Sequence Up to N Terms
 *
 * @param {number} n
 * @return {number[]}
 */
function generateFibonacci(n) {
    const result = [];

    if (n <= 0) {
        return result;
    }

    if (n >= 1) {
        result.push(0);
    }

    if (n >= 2) {
        result.push(1);
    }

    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }

    return result;
}