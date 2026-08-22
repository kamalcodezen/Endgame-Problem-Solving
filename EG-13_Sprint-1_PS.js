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


// ````````````````````````````



/**
 * 03. Calculate the Greatest Common Divisor (GCD)
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function findGCD(a, b) {
    while (b !== 0) {
        const remainder = a % b;
        a = b;
        b = remainder;
    }

    return a;
}



// ```````````````````````````````


/**
 * 04. Calculate the Least Common Multiple (LCM)
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function findLCM(a, b) {
    return (a * b) / findGCD(a, b);
}




// ``````````````````````````````````


/**
 * 05. Check if a Number is Prime
 *
 * @param {number} num
 * @return {boolean}
 */
function isPrime(num) {
    if (num < 2) {
        return false;
    }

    if (num === 2) {
        return true;
    }

    if (num % 2 === 0) {
        return false;
    }

    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}






// `````````````````````````````````````

/**
 * 06. Merge Two Sorted Arrays into One Sorted Array
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
function mergeSortedArrays(arr1, arr2) {
    const result = [];

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}



// ````````````````````````````````````


/**
 * 07. Find the Median of an Unsorted Array
 *
 * @param {number[]} nums
 * @return {number}
 */
function findMedian(nums) {
    const sortedNums = [...nums].sort((a, b) => a - b);

    const middleIndex = Math.floor(sortedNums.length / 2);

    if (sortedNums.length % 2 === 0) {
        return (
            (sortedNums[middleIndex - 1] + sortedNums[middleIndex]) / 2
        );
    }

    return sortedNums[middleIndex];
}


// `````````````````````````````````


/**
 * 08. Find the Second Largest Number in an Array
 *
 * @param {number[]} nums
 * @return {number|null}
 */
function findSecondLargest(nums) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (const num of nums) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;
}



// ````````````````````````````````



