/**
 * Endgame-13 Sprint-4 Problem Solving
 * File: EG-13_Sprint-4_PS.js
 */

/**
 * 01. Isomorphic Strings
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const mapST = new Map();
    const mapTS = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (
            (mapST.has(charS) && mapST.get(charS) !== charT) ||
            (mapTS.has(charT) && mapTS.get(charT) !== charS)
        ) {
            return false;
        }

        mapST.set(charS, charT);
        mapTS.set(charT, charS);
    }

    return true;
};


/**
 * 02. Word Pattern
 *
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function (pattern, s) {
    const words = s.split(" ");

    if (pattern.length !== words.length) {
        return false;
    }

    const patternToWord = new Map();
    const wordToPattern = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (
            (patternToWord.has(char) && patternToWord.get(char) !== word) ||
            (wordToPattern.has(word) && wordToPattern.get(word) !== char)
        ) {
            return false;
        }

        patternToWord.set(char, word);
        wordToPattern.set(word, char);
    }

    return true;
};


/**
 * 03. Find the Difference
 *
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function (s, t) {
    let result = 0;

    for (const char of s) {
        result ^= char.charCodeAt(0);
    }

    for (const char of t) {
        result ^= char.charCodeAt(0);
    }

    return String.fromCharCode(result);
};


/**
 * 04. Reverse Linked List
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
    let previous = null;
    let current = head;

    while (current !== null) {
        const next = current.next;

        current.next = previous;
        previous = current;
        current = next;
    }

    return previous;
};


/**
 * 05. Middle of the Linked List
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function (head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};


/**
 * 06. Product of Array Except Self
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
    const result = new Array(nums.length).fill(1);

    let prefix = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i];
    }

    return result;
};


/**
 * 07. Remove Nth Node From End of List
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
    const dummy = {
        next: head
    };

    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
};


/**
 * 08. Find First and Last Position of Element in Sorted Array
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
    const findFirst = function () {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                result = mid;
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    };

    const findLast = function () {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                result = mid;
                left = mid + 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    };

    return [findFirst(), findLast()];
};



/**
 * 09. Permutation in String
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    const count = new Array(26).fill(0);

    for (const char of s1) {
        count[char.charCodeAt(0) - 97]++;
    }

    let left = 0;

    for (let right = 0; right < s2.length; right++) {
        count[s2.charCodeAt(right) - 97]--;

        if (right - left + 1 > s1.length) {
            count[s2.charCodeAt(left) - 97]++;
            left++;
        }

        if (right - left + 1 === s1.length) {
            let valid = true;

            for (let i = 0; i < 26; i++) {
                if (count[i] !== 0) {
                    valid = false;
                    break;
                }
            }

            if (valid) {
                return true;
            }
        }
    }

    return false;
};


/**
 * 10. Find All Anagrams in a String
 *
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
    const result = [];

    if (p.length > s.length) {
        return result;
    }

    const count = new Array(26).fill(0);

    for (const char of p) {
        count[char.charCodeAt(0) - 97]++;
    }

    let left = 0;

    for (let right = 0; right < s.length; right++) {
        count[s.charCodeAt(right) - 97]--;

        if (right - left + 1 > p.length) {
            count[s.charCodeAt(left) - 97]++;
            left++;
        }

        if (right - left + 1 === p.length) {
            let valid = true;

            for (let i = 0; i < 26; i++) {
                if (count[i] !== 0) {
                    valid = false;
                    break;
                }
            }

            if (valid) {
                result.push(left);
            }
        }
    }

    return result;
};