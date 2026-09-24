/**
 * Endgame-13 Sprint-5 Problem Solving Task
 * EG-13_Sprint-5_PS.js
 */


/* =========================================================
   01. Remove Duplicates from Sorted Array
   ========================================================= */

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};


/* =========================================================
   02. Binary Search
   ========================================================= */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};


/* =========================================================
   03. Search Insert Position
   ========================================================= */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};


/* =========================================================
   04. Maximum Depth of Binary Tree
   ========================================================= */

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
    if (root === null) {
        return 0;
    }

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return 1 + Math.max(leftDepth, rightDepth);
};


/* =========================================================
   05. Invert Binary Tree
   ========================================================= */

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
    if (root === null) {
        return null;
    }

    const temp = root.left;

    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
};


/* =========================================================
   06. Product of Array Except Self
   ========================================================= */

/**
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


/* =========================================================
   07. Rotate Array
   ========================================================= */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void}
 */
const rotate = function (nums, k) {
    const n = nums.length;

    if (n <= 1) {
        return;
    }

    k = k % n;

    if (k === 0) {
        return;
    }

    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
};

/**
 * Helper function
 *
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
const reverse = function (nums, left, right) {
    while (left < right) {
        const temp = nums[left];

        nums[left] = nums[right];
        nums[right] = temp;

        left++;
        right--;
    }
};


/* =========================================================
   08. Min Stack
   ========================================================= */

/**
 * @return {void}
 */
const MinStack = function () {
    this.stack = [];
    this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val);

    if (
        this.minStack.length === 0 ||
        val <= this.minStack[this.minStack.length - 1]
    ) {
        this.minStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const value = this.stack.pop();

    if (value === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1];
};


/* =========================================================
   09. Continuous Subarray Sum
   ========================================================= */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum = function (nums, k) {
    const remainderIndex = new Map();

    remainderIndex.set(0, -1);

    let prefixSum = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        let remainder;

        if (k === 0) {
            remainder = prefixSum;
        } else {
            remainder = prefixSum % k;
        }

        if (remainderIndex.has(remainder)) {
            const previousIndex = remainderIndex.get(remainder);

            if (i - previousIndex >= 2) {
                return true;
            }
        } else {
            remainderIndex.set(remainder, i);
        }
    }

    return false;
};

/* =========================================================
   10. Daily Temperatures
   ========================================================= */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (
            stack.length > 0 &&
            temperatures[i] > temperatures[stack[stack.length - 1]]
        ) {
            const previousIndex = stack.pop();

            result[previousIndex] = i - previousIndex;
        }

        stack.push(i);
    }

    return result;
};