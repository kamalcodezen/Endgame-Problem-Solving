/**
 * ============================================================
 * Endgame-13 Sprint-2 Problem Solving
 * ============================================================
 *
 * File Name:
 * EG-13_Sprint-2_PS.js
 *
 * Total Problems: 10
 * ============================================================
 */


/**
 * ============================================================
 * 1. Reverse a String
 * ============================================================
 *
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}


/**
 * ============================================================
 * 2. Find Maximum
 * ============================================================
 *
 * @param {number[]} nums
 * @return {number}
 */
function findMax(nums) {
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return max;
}


/**
 * ============================================================
 * 3. Check for Palindrome
 * ============================================================
 *
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}



/**
 * ============================================================
 * 4. Sum Array Elements
 * ============================================================
 *
 * @param {number[]} nums
 * @return {number}
 */
function sumArray(nums) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    return sum;
}


/**
 * ============================================================
 * 5. Count Vowels
 * ============================================================
 *
 * @param {string} str
 * @return {number}
 */
function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}


/**
 * ============================================================
 * 6. Two Sum
 * ============================================================
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
    }

    return [];
}


/**
 * ============================================================
 * 7. Flatten a Nested Array
 * ============================================================
 *
 * @param {Array} arr
 * @return {Array}
 */
function flattenArray(arr) {
    const result = [];

    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flattenArray(item));
        } else {
            result.push(item);
        }
    }

    return result;
}


/**
 * ============================================================
 * 8. Group Anagrams
 * ============================================================
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    const groups = new Map();

    for (const str of strs) {
        const key = str.split("").sort().join("");

        if (!groups.has(key)) {
            groups.set(key, []);
        }

        groups.get(key).push(str);
    }

    return Array.from(groups.values());
}


/**
 * ============================================================
 * 9. Longest Substring Without Repeating Characters
 * ============================================================
 *
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    const seen = new Set();

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left]);
            left++;
        }

        seen.add(s[right]);

        const currentLength = right - left + 1;

        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }

    return maxLength;
}


/**
 * ============================================================
 * 10. Deep Clone an Object
 * ============================================================
 *
 * @param {Object} obj
 * @return {Object}
 */
function deepClone(obj) {
    // Handle primitive values and null
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    // Handle arrays
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    // Handle objects
    const clonedObject = {};

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            clonedObject[key] = deepClone(obj[key]);
        }
    }

    return clonedObject;
}


/**
 * ============================================================
 * TEST CASES
 * ============================================================
 *
 * These tests are only for checking your solutions locally.
 * They can be removed before submission if you want a cleaner
 * submission file.
 * ============================================================
 */


console.log("========== Endgame-13 Sprint-2 Tests ==========\n");


/**
 * Problem 1
 */
console.log("1. Reverse a String");
console.log(reverseString("hello"));
// Expected: "olleh"


/**
 * Problem 2
 */
console.log("\n2. Find Maximum");
console.log(findMax([3, 7, 2, 9, 5]));
// Expected: 9


/**
 * Problem 3
 */
console.log("\n3. Check for Palindrome");
console.log(isPalindrome("racecar"));
// Expected: true


/**
 * Problem 4
 */
console.log("\n4. Sum Array Elements");
console.log(sumArray([10, 20, 30, 40]));
// Expected: 100


/**
 * Problem 5
 */
console.log("\n5. Count Vowels");
console.log(countVowels("javascript"));
// Expected: 3


/**
 * Problem 6
 */
console.log("\n6. Two Sum");
console.log(twoSum([2, 7, 11, 15], 9));
// Expected: [0, 1]


/**
 * Problem 7
 */
console.log("\n7. Flatten a Nested Array");
console.log(flattenArray([1, [2, [3, 4], 5]]));
// Expected: [1, 2, 3, 4, 5]


/**
 * Problem 8
 */
console.log("\n8. Group Anagrams");
console.log(
    groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
);
// Expected: [["eat","tea","ate"],["tan","nat"],["bat"]]


/**
 * Problem 9
 */
console.log("\n9. Longest Substring Without Repeating Characters");
console.log(lengthOfLongestSubstring("abcabcbb"));
// Expected: 3


/**
 * Problem 10
 */
console.log("\n10. Deep Clone an Object");

const originalObject = {
    a: 1,
    b: {
        c: 2
    }
};

const clonedObject = deepClone(originalObject);

console.log(clonedObject);
// Expected: { a: 1, b: { c: 2 } }

// Verify that nested object has a different reference
console.log(
    "Same nested reference:",
    originalObject.b === clonedObject.b
);
// Expected: false


console.log("\n========== All Tests Completed ==========");