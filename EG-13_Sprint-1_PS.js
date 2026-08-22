/**
 * 01. Check if a Year is a Leap Year
 *
 * @param {number} year
 * @return {boolean}
 */
function isLeapYear(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}