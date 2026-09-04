/**
 * Endgame-13 Sprint-3 Problem Solving
 * File: EG-13_Sprint-3_PS.js
 */


/* =========================================================
   01. Contains Duplicate
   ========================================================= */

/**
 * Write a validation function that determines whether an array
 * contains any duplicate values. Return true if any value appears
 * more than once, otherwise return false.
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function (nums) {
    const seen = new Set();

    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }

        seen.add(num);
    }

    return false;
};


/* =========================================================
   02. Move Zeroes
   ========================================================= */

/**
 * Write a transformation function that moves all zero values
 * to the end of an array while maintaining the relative order
 * of the non-zero elements.
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    let index = 0;

    for (const num of nums) {
        if (num !== 0) {
            nums[index] = num;
            index++;
        }
    }

    while (index < nums.length) {
        nums[index] = 0;
        index++;
    }
};


/* =========================================================
   03. Valid Anagram
   ========================================================= */

/**
 * Write a validation function that determines whether
 * two strings are anagrams of each other.
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const count = new Map();

    for (const char of s) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    for (const char of t) {
        if (!count.has(char)) {
            return false;
        }

        count.set(char, count.get(char) - 1);

        if (count.get(char) < 0) {
            return false;
        }
    }

    return true;
};


/* =========================================================
   04. Ransom Note
   ========================================================= */

/**
 * Write a validation function that determines whether a ransom
 * note can be constructed using characters from a given magazine
 * string. Each character can only be used once.
 *
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
    const count = new Map();

    for (const char of magazine) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    for (const char of ransomNote) {
        const available = count.get(char) || 0;

        if (available === 0) {
            return false;
        }

        count.set(char, available - 1);
    }

    return true;
};


/* =========================================================
   05. Majority Element
   ========================================================= */

/**
 * Write a function that identifies the element that appears
 * more than n / 2 times in an array.
 *
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
    let candidate = null;
    let count = 0;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += num === candidate ? 1 : -1;
    }

    return candidate;
};


/* =========================================================
   06. 3Sum
   ========================================================= */

/**
 * Write a function that finds all unique triplets in an array
 * whose three values add up to zero. The solution must not
 * contain duplicate triplets.
 *
 * @param {number[]} nums
 * @return {number[][]}
 *
 * NOTE:
 * The provided task document incorrectly uses
 * `majorityElement` as the function name here.
 * `threeSum` is the correct function name for this problem.
 */
const threeSum = function (nums) {
    nums.sort((a, b) => a - b);

    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                left++;
                right--;

                while (
                    left < right &&
                    nums[left] === nums[left - 1]
                ) {
                    left++;
                }

                while (
                    left < right &&
                    nums[right] === nums[right + 1]
                ) {
                    right--;
                }
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};


/* =========================================================
   07. Subarray Sum Equals K
   ========================================================= */

/**
 * Write a function that counts the total number of continuous
 * subarrays whose elements add up exactly to a given integer k.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function (nums, k) {
    const prefixCount = new Map();

    prefixCount.set(0, 1);

    let prefixSum = 0;
    let result = 0;

    for (const num of nums) {
        prefixSum += num;

        const needed = prefixSum - k;

        if (prefixCount.has(needed)) {
            result += prefixCount.get(needed);
        }

        prefixCount.set(
            prefixSum,
            (prefixCount.get(prefixSum) || 0) + 1
        );
    }

    return result;
};


/* =========================================================
   08. Top K Frequent Elements
   ========================================================= */

/**
 * Write a function that returns the k most frequent elements
 * from an integer array.
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
    const frequency = new Map();

    for (const num of nums) {
        frequency.set(num, (frequency.get(num) || 0) + 1);
    }

    const buckets = Array.from(
        { length: nums.length + 1 },
        () => []
    );

    for (const [num, count] of frequency) {
        buckets[count].push(num);
    }

    const result = [];

    for (
        let i = buckets.length - 1;
        i >= 0 && result.length < k;
        i--
    ) {
        for (const num of buckets[i]) {
            result.push(num);

            if (result.length === k) {
                break;
            }
        }
    }

    return result;
};


/* =========================================================
   09. Longest Consecutive Sequence
   ========================================================= */

/**
 * Write a function that finds the length of the longest
 * sequence of consecutive integers in an unsorted array.
 * The solution should aim for linear time complexity.
 *
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
    const numbers = new Set(nums);

    let longest = 0;

    for (const num of numbers) {
        if (!numbers.has(num - 1)) {
            let current = num;
            let length = 1;

            while (numbers.has(current + 1)) {
                current++;
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;
};


/* =========================================================
   10. Sort Colors
   ========================================================= */

/**
 * Write an in-place sorting function that sorts an array
 * containing only 0, 1, and 2 so that the same colors are
 * grouped together in ascending order.
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];

            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];

            high--;
        }
    }
};