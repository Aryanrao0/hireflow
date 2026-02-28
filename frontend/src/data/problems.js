export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    interviewType: "DSA",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers in the array such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0,1]",
      },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "-10⁹ ≤ target ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Expected: [1, 2]
console.log(twoSum([3, 3], 6)); // Expected: [0, 1]`,
      python: `def twoSum(nums, target):
    # Write your solution here
    pass

# Test cases
print(twoSum([2, 7, 11, 15], 9))  # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))  # Expected: [1, 2]
print(twoSum([3, 3], 6))  # Expected: [0, 1]`,
      java: `import java.util.*;

class Solution {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9))); // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6))); // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6))); // Expected: [0, 1]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    // Write your solution here
    
    return {};
}

int main() {
    vector<int> nums1 = {2, 7, 11, 15};
    vector<int> result1 = twoSum(nums1, 9);
    cout << "[" << result1[0] << "," << result1[1] << "]" << endl; // Expected: [0,1]
    
    vector<int> nums2 = {3, 2, 4};
    vector<int> result2 = twoSum(nums2, 6);
    cout << "[" << result2[0] << "," << result2[1] << "]" << endl; // Expected: [1,2]
    
    vector<int> nums3 = {3, 3};
    vector<int> result3 = twoSum(nums3, 6);
    cout << "[" << result3[0] << "," << result3[1] << "]" << endl; // Expected: [0,1]
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
      cpp: "[0,1]\n[1,2]\n[0,1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    interviewType: "DSA",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]',
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ascii character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
  
}

// Test cases
let test1 = ["h","e","l","l","o"];
reverseString(test1);
console.log(test1); // Expected: ["o","l","l","e","h"]

let test2 = ["H","a","n","n","a","h"];
reverseString(test2);
console.log(test2); // Expected: ["h","a","n","n","a","H"]`,
      python: `def reverseString(s):
    # Write your solution here
    pass

# Test cases
test1 = ["h","e","l","l","o"]
reverseString(test1)
print(test1)  # Expected: ["o","l","l","e","h"]

test2 = ["H","a","n","n","a","h"]
reverseString(test2)
print(test2)  # Expected: ["h","a","n","n","a","H"]`,
      java: `import java.util.*;

class Solution {
    public static void reverseString(char[] s) {
        // Write your solution here
        
    }
    
    public static void main(String[] args) {
        char[] test1 = {'h','e','l','l','o'};
        reverseString(test1);
        System.out.println(Arrays.toString(test1)); // Expected: [o, l, l, e, h]
        
        char[] test2 = {'H','a','n','n','a','h'};
        reverseString(test2);
        System.out.println(Arrays.toString(test2)); // Expected: [h, a, n, n, a, H]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void reverseString(vector<char>& s) {
    // Write your solution here
    
}

int main() {
    vector<char> test1 = {'h','e','l','l','o'};
    reverseString(test1);
    cout << "[";
    for(int i = 0; i < test1.size(); i++) {
        cout << test1[i];
        if(i < test1.size()-1) cout << ",";
    }
    cout << "]" << endl;
    
    vector<char> test2 = {'H','a','n','n','a','h'};
    reverseString(test2);
    cout << "[";
    for(int i = 0; i < test2.size(); i++) {
        cout << test2[i];
        if(i < test2.size()-1) cout << ",";
    }
    cout << "]" << endl;
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
      cpp: "[o,l,l,e,h]\n[h,a,n,n,a,H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    interviewType: "DSA",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      {
        input: 's = "A man, a plan, a canal: Panama"',
        output: "true",
        explanation: '"amanaplanacanalpanama" is a palindrome.',
      },
      {
        input: 's = "race a car"',
        output: "false",
        explanation: '"raceacar" is not a palindrome.',
      },
      {
        input: 's = " "',
        output: "true",
        explanation:
          's is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome.',
      },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
  
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log(isPalindrome("race a car")); // Expected: false
console.log(isPalindrome(" ")); // Expected: true`,
      python: `def isPalindrome(s):
    # Write your solution here
    pass

# Test cases
print(isPalindrome("A man, a plan, a canal: Panama"))  # Expected: True
print(isPalindrome("race a car"))  # Expected: False
print(isPalindrome(" "))  # Expected: True`,
      java: `class Solution {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
        System.out.println(isPalindrome("race a car")); // Expected: false
        System.out.println(isPalindrome(" ")); // Expected: true
    }
}`,
      cpp: `#include <iostream>
#include <string>
#include <cctype>
using namespace std;

bool isPalindrome(string s) {
    // Write your solution here
    
    return false;
}

int main() {
    cout << boolalpha;
    cout << isPalindrome("A man, a plan, a canal: Panama") << endl; // Expected: true
    cout << isPalindrome("race a car") << endl; // Expected: false
    cout << isPalindrome(" ") << endl; // Expected: true
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      cpp: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    interviewType: "DSA",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        output: "6",
        explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      },
      {
        input: "nums = [1]",
        output: "1",
        explanation: "The subarray [1] has the largest sum 1.",
      },
      {
        input: "nums = [5,4,-1,7,8]",
        output: "23",
        explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
  
}

// Test cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5,4,-1,7,8])); // Expected: 23`,
      python: `def maxSubArray(nums):
    # Write your solution here
    pass

# Test cases
print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # Expected: 6
print(maxSubArray([1]))  # Expected: 1
print(maxSubArray([5,4,-1,7,8]))  # Expected: 23`,
      java: `class Solution {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // Expected: 6
        System.out.println(maxSubArray(new int[]{1})); // Expected: 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8})); // Expected: 23
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxSubArray(vector<int>& nums) {
    // Write your solution here
    
    return 0;
}

int main() {
    vector<int> test1 = {-2,1,-3,4,-1,2,1,-5,4};
    cout << maxSubArray(test1) << endl; // Expected: 6
    
    vector<int> test2 = {1};
    cout << maxSubArray(test2) << endl; // Expected: 1
    
    vector<int> test3 = {5,4,-1,7,8};
    cout << maxSubArray(test3) << endl; // Expected: 23
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
      cpp: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    interviewType: "DSA",
    description: {
      text: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).",
      notes: [
        "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
        "Return the maximum amount of water a container can store.",
        "Notice that you may not slant the container.",
      ],
    },
    examples: [
      {
        input: "height = [1,8,6,2,5,4,8,3,7]",
        output: "49",
        explanation:
          "The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.",
      },
      {
        input: "height = [1,1]",
        output: "1",
      },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
  
}

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Expected: 49
console.log(maxArea([1,1])); // Expected: 1`,
      python: `def maxArea(height):
    # Write your solution here
    pass

# Test cases
print(maxArea([1,8,6,2,5,4,8,3,7]))  # Expected: 49
print(maxArea([1,1]))  # Expected: 1`,
      java: `class Solution {
    public static int maxArea(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // Expected: 49
        System.out.println(maxArea(new int[]{1,1})); // Expected: 1
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int maxArea(vector<int>& height) {
    // Write your solution here
    
    return 0;
}

int main() {
    vector<int> test1 = {1,8,6,2,5,4,8,3,7};
    cout << maxArea(test1) << endl; // Expected: 49
    
    vector<int> test2 = {1,1};
    cout << maxArea(test2) << endl; // Expected: 1
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
      cpp: "49\n1",
    },
  },

  "best-time-to-buy-sell-stock": {
    id: "best-time-to-buy-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Dynamic Programming",
    interviewType: "DSA",
    description: {
      text: "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
      notes: ["Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0."],
    },
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "In this case, no transactions are done and the max profit = 0.",
      },
    ],
    constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here
  
}

// Test cases
console.log(maxProfit([7,1,5,3,6,4])); // Expected: 5
console.log(maxProfit([7,6,4,3,1])); // Expected: 0`,
      python: `def maxProfit(prices):
    # Write your solution here
    pass

# Test cases
print(maxProfit([7,1,5,3,6,4]))  # Expected: 5
print(maxProfit([7,6,4,3,1]))  # Expected: 0`,
      java: `class Solution {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // Expected: 5
        System.out.println(maxProfit(new int[]{7,6,4,3,1})); // Expected: 0
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int maxProfit(vector<int>& prices) {
    // Write your solution here
    
    return 0;
}

int main() {
    vector<int> test1 = {7,1,5,3,6,4};
    cout << maxProfit(test1) << endl; // Expected: 5
    
    vector<int> test2 = {7,6,4,3,1};
    cout << maxProfit(test2) << endl; // Expected: 0
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "5\n0",
      python: "5\n0",
      java: "5\n0",
      cpp: "5\n0",
    },
  },

  "contains-duplicate": {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array • Hash Table",
    interviewType: "DSA",
    description: {
      text: "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [1,2,3,1]",
        output: "true",
      },
      {
        input: "nums = [1,2,3,4]",
        output: "false",
      },
      {
        input: "nums = [1,1,1,3,3,4,3,2,4,2]",
        output: "true",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹"],
    starterCode: {
      javascript: `function containsDuplicate(nums) {
  // Write your solution here
  
}

// Test cases
console.log(containsDuplicate([1,2,3,1])); // Expected: true
console.log(containsDuplicate([1,2,3,4])); // Expected: false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // Expected: true`,
      python: `def containsDuplicate(nums):
    # Write your solution here
    pass

# Test cases
print(containsDuplicate([1,2,3,1]))  # Expected: True
print(containsDuplicate([1,2,3,4]))  # Expected: False
print(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))  # Expected: True`,
      java: `import java.util.*;

class Solution {
    public static boolean containsDuplicate(int[] nums) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(containsDuplicate(new int[]{1,2,3,1})); // Expected: true
        System.out.println(containsDuplicate(new int[]{1,2,3,4})); // Expected: false
        System.out.println(containsDuplicate(new int[]{1,1,1,3,3,4,3,2,4,2})); // Expected: true
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

bool containsDuplicate(vector<int>& nums) {
    // Write your solution here
    
    return false;
}

int main() {
    cout << boolalpha;
    vector<int> test1 = {1,2,3,1};
    cout << containsDuplicate(test1) << endl; // Expected: true
    
    vector<int> test2 = {1,2,3,4};
    cout << containsDuplicate(test2) << endl; // Expected: false
    
    vector<int> test3 = {1,1,1,3,3,4,3,2,4,2};
    cout << containsDuplicate(test3) << endl; // Expected: true
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
      cpp: "true\nfalse\ntrue",
    },
  },

  "product-of-array-except-self": {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array • Prefix Sum",
    interviewType: "DSA",
    description: {
      text: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
      notes: [
        "The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.",
        "You must write an algorithm that runs in O(n) time and without using the division operation.",
      ],
    },
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
      },
      {
        input: "nums = [-1,1,0,-3,3]",
        output: "[0,0,9,0,0]",
      },
    ],
    constraints: ["2 ≤ nums.length ≤ 10⁵", "-30 ≤ nums[i] ≤ 30"],
    starterCode: {
      javascript: `function productExceptSelf(nums) {
  // Write your solution here
  
}

// Test cases
console.log(productExceptSelf([1,2,3,4])); // Expected: [24,12,8,6]
console.log(productExceptSelf([-1,1,0,-3,3])); // Expected: [0,0,9,0,0]`,
      python: `def productExceptSelf(nums):
    # Write your solution here
    pass

# Test cases
print(productExceptSelf([1,2,3,4]))  # Expected: [24, 12, 8, 6]
print(productExceptSelf([-1,1,0,-3,3]))  # Expected: [0, 0, 9, 0, 0]`,
      java: `import java.util.*;

class Solution {
    public static int[] productExceptSelf(int[] nums) {
        // Write your solution here
        
        return new int[0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.toString(productExceptSelf(new int[]{1,2,3,4}))); // Expected: [24, 12, 8, 6]
        System.out.println(Arrays.toString(productExceptSelf(new int[]{-1,1,0,-3,3}))); // Expected: [0, 0, 9, 0, 0]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> productExceptSelf(vector<int>& nums) {
    // Write your solution here
    
    return {};
}

int main() {
    vector<int> nums1 = {1,2,3,4};
    vector<int> result1 = productExceptSelf(nums1);
    cout << "[";
    for(int i = 0; i < result1.size(); i++) {
        cout << result1[i];
        if(i < result1.size()-1) cout << ",";
    }
    cout << "]" << endl;
    
    vector<int> nums2 = {-1,1,0,-3,3};
    vector<int> result2 = productExceptSelf(nums2);
    cout << "[";
    for(int i = 0; i < result2.size(); i++) {
        cout << result2[i];
        if(i < result2.size()-1) cout << ",";
    }
    cout << "]" << endl;
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[24,12,8,6]\n[0,0,9,0,0]",
      python: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
      java: "[24, 12, 8, 6]\n[0, 0, 9, 0, 0]",
      cpp: "[24,12,8,6]\n[0,0,9,0,0]",
    },
  },

  "3sum": {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    interviewType: "DSA",
    description: {
      text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
      notes: ["Notice that the solution set must not contain duplicate triplets."],
    },
    examples: [
      {
        input: "nums = [-1,0,1,2,-1,-4]",
        output: "[[-1,-1,2],[-1,0,1]]",
        explanation: "The distinct triplets are [-1,0,1] and [-1,-1,2].",
      },
      {
        input: "nums = [0,1,1]",
        output: "[]",
        explanation: "The only possible triplet does not sum up to 0.",
      },
      {
        input: "nums = [0,0,0]",
        output: "[[0,0,0]]",
      },
    ],
    constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function threeSum(nums) {
  // Write your solution here
  
}

// Test cases
console.log(threeSum([-1,0,1,2,-1,-4])); // Expected: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1])); // Expected: []
console.log(threeSum([0,0,0])); // Expected: [[0,0,0]]`,
      python: `def threeSum(nums):
    # Write your solution here
    pass

# Test cases
print(threeSum([-1,0,1,2,-1,-4]))  # Expected: [[-1,-1,2],[-1,0,1]]
print(threeSum([0,1,1]))  # Expected: []
print(threeSum([0,0,0]))  # Expected: [[0,0,0]]`,
      java: `import java.util.*;

class Solution {
    public static List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4})); // Expected: [[-1,-1,2],[-1,0,1]]
        System.out.println(threeSum(new int[]{0,1,1})); // Expected: []
        System.out.println(threeSum(new int[]{0,0,0})); // Expected: [[0,0,0]]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> threeSum(vector<int>& nums) {
    // Write your solution here
    
    return {};
}

void printResult(vector<vector<int>>& result) {
    cout << "[";
    for(int i = 0; i < result.size(); i++) {
        cout << "[";
        for(int j = 0; j < result[i].size(); j++) {
            cout << result[i][j];
            if(j < result[i].size()-1) cout << ",";
        }
        cout << "]";
        if(i < result.size()-1) cout << ",";
    }
    cout << "]" << endl;
}

int main() {
    vector<int> nums1 = {-1,0,1,2,-1,-4};
    vector<vector<int>> result1 = threeSum(nums1);
    printResult(result1);
    
    vector<int> nums2 = {0,1,1};
    vector<vector<int>> result2 = threeSum(nums2);
    printResult(result2);
    
    vector<int> nums3 = {0,0,0};
    vector<vector<int>> result3 = threeSum(nums3);
    printResult(result3);
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[[-1,-1,2],[-1,0,1]]\n[]\n[[0,0,0]]",
      python: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
      java: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
      cpp: "[[-1,-1,2],[-1,0,1]]\n[]\n[[0,0,0]]",
    },
  },

  "merge-intervals": {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Array • Sorting",
    interviewType: "DSA",
    description: {
      text: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
      notes: [],
    },
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
        explanation: "Since intervals [1,3] and [2,6] overlap, merge them into [1,6].",
      },
      {
        input: "intervals = [[1,4],[4,5]]",
        output: "[[1,5]]",
        explanation: "Intervals [1,4] and [4,5] are considered overlapping.",
      },
    ],
    constraints: ["1 ≤ intervals.length ≤ 10⁴", "intervals[i].length == 2", "0 ≤ starti ≤ endi ≤ 10⁴"],
    starterCode: {
      javascript: `function merge(intervals) {
  // Write your solution here
  
}

// Test cases
console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // Expected: [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]])); // Expected: [[1,5]]`,
      python: `def merge(intervals):
    # Write your solution here
    pass

# Test cases
print(merge([[1,3],[2,6],[8,10],[15,18]]))  # Expected: [[1,6],[8,10],[15,18]]
print(merge([[1,4],[4,5]]))  # Expected: [[1,5]]`,
      java: `import java.util.*;

class Solution {
    public static int[][] merge(int[][] intervals) {
        // Write your solution here
        
        return new int[0][0];
    }
    
    public static void main(String[] args) {
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,3},{2,6},{8,10},{15,18}}))); // Expected: [[1,6],[8,10],[15,18]]
        System.out.println(Arrays.deepToString(merge(new int[][]{{1,4},{4,5}}))); // Expected: [[1,5]]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> merge(vector<vector<int>>& intervals) {
    // Write your solution here
    
    return {};
}

int main() {
    vector<vector<int>> intervals1 = {{1,3},{2,6},{8,10},{15,18}};
    vector<vector<int>> result1 = merge(intervals1);
    cout << "[";
    for(int i = 0; i < result1.size(); i++) {
        cout << "[" << result1[i][0] << "," << result1[i][1] << "]";
        if(i < result1.size()-1) cout << ",";
    }
    cout << "]" << endl;
    
    vector<vector<int>> intervals2 = {{1,4},{4,5}};
    vector<vector<int>> result2 = merge(intervals2);
    cout << "[";
    for(int i = 0; i < result2.size(); i++) {
        cout << "[" << result2[i][0] << "," << result2[i][1] << "]";
        if(i < result2.size()-1) cout << ",";
    }
    cout << "]" << endl;
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[[1,6],[8,10],[15,18]]\n[[1,5]]",
      python: "[[1, 6], [8, 10], [15, 18]]\n[[1, 5]]",
      java: "[[1, 6], [8, 10], [15, 18]]\n[[1, 5]]",
      cpp: "[[1,6],[8,10],[15,18]]\n[[1,5]]",
    },
  },

  "valid-anagram": {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    category: "String • Hash Table",
    interviewType: "DSA",
    description: {
      text: "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
      notes: ["An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once."],
    },
    examples: [
      {
        input: 's = "anagram", t = "nagaram"',
        output: "true",
      },
      {
        input: 's = "rat", t = "car"',
        output: "false",
      },
    ],
    constraints: ["1 ≤ s.length, t.length ≤ 5 * 10⁴", "s and t consist of lowercase English letters"],
    starterCode: {
      javascript: `function isAnagram(s, t) {
  // Write your solution here
  
}

// Test cases
console.log(isAnagram("anagram", "nagaram")); // Expected: true
console.log(isAnagram("rat", "car")); // Expected: false`,
      python: `def isAnagram(s, t):
    # Write your solution here
    pass

# Test cases
print(isAnagram("anagram", "nagaram"))  # Expected: True
print(isAnagram("rat", "car"))  # Expected: False`,
      java: `class Solution {
    public static boolean isAnagram(String s, String t) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isAnagram("anagram", "nagaram")); // Expected: true
        System.out.println(isAnagram("rat", "car")); // Expected: false
    }
}`,
      cpp: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

bool isAnagram(string s, string t) {
    // Write your solution here
    
    return false;
}

int main() {
    cout << boolalpha;
    cout << isAnagram("anagram", "nagaram") << endl; // Expected: true
    cout << isAnagram("rat", "car") << endl; // Expected: false
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      cpp: "true\nfalse",
    },
  },

  "group-anagrams": {
    id: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "Medium",
    category: "String • Hash Table",
    interviewType: "DSA",
    description: {
      text: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
      notes: ["An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once."],
    },
    examples: [
      {
        input: 'strs = ["eat","tea","tan","ate","nat","bat"]',
        output: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
      },
      {
        input: 'strs = [""]',
        output: '[[""]]',
      },
      {
        input: 'strs = ["a"]',
        output: '[["a"]]',
      },
    ],
    constraints: ["1 ≤ strs.length ≤ 10⁴", "0 ≤ strs[i].length ≤ 100", "strs[i] consists of lowercase English letters"],
    starterCode: {
      javascript: `function groupAnagrams(strs) {
  // Write your solution here
  
}

// Test cases
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));`,
      python: `def groupAnagrams(strs):
    # Write your solution here
    pass

# Test cases
print(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
print(groupAnagrams([""]))
print(groupAnagrams(["a"]))`,
      java: `import java.util.*;

class Solution {
    public static List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println(groupAnagrams(new String[]{"eat","tea","tan","ate","nat","bat"}));
        System.out.println(groupAnagrams(new String[]{""}));
        System.out.println(groupAnagrams(new String[]{"a"}));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>
using namespace std;

vector<vector<string>> groupAnagrams(vector<string>& strs) {
    // Write your solution here
    
    return {};
}

void printResult(vector<vector<string>>& result) {
    cout << "[";
    for(int i = 0; i < result.size(); i++) {
        cout << "[";
        for(int j = 0; j < result[i].size(); j++) {
            cout << "\"" << result[i][j] << "\"";
            if(j < result[i].size()-1) cout << ",";
        }
        cout << "]";
        if(i < result.size()-1) cout << ",";
    }
    cout << "]" << endl;
}

int main() {
    vector<string> strs1 = {"eat","tea","tan","ate","nat","bat"};
    vector<vector<string>> result1 = groupAnagrams(strs1);
    printResult(result1);
    
    vector<string> strs2 = {""};
    vector<vector<string>> result2 = groupAnagrams(strs2);
    printResult(result2);
    
    vector<string> strs3 = {"a"};
    vector<vector<string>> result3 = groupAnagrams(strs3);
    printResult(result3);
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: '[["bat"],["nat","tan"],["ate","eat","tea"]]\n[[""]]\n[["a"]]',
      python: '[["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]\n[[""]]\n[["a"]]',
      java: '[["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]\n[[""]]\n[["a"]]',
      cpp: '[["bat"],["nat","tan"],["ate","eat","tea"]]\n[[""]]\n[["a"]]',
    },
  },

  "longest-substring-without-repeating": {
    id: "longest-substring-without-repeating",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    category: "String • Sliding Window",
    interviewType: "DSA",
    description: {
      text: "Given a string s, find the length of the longest substring without repeating characters.",
      notes: [],
    },
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with the length of 3.',
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: 'The answer is "b", with the length of 1.',
      },
      {
        input: 's = "pwwkew"',
        output: "3",
        explanation: 'The answer is "wke", with the length of 3.',
      },
    ],
    constraints: ["0 ≤ s.length ≤ 5 * 10⁴", "s consists of English letters, digits, symbols and spaces"],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {
  // Write your solution here
  
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3`,
      python: `def lengthOfLongestSubstring(s):
    # Write your solution here
    pass

# Test cases
print(lengthOfLongestSubstring("abcabcbb"))  # Expected: 3
print(lengthOfLongestSubstring("bbbbb"))  # Expected: 1
print(lengthOfLongestSubstring("pwwkew"))  # Expected: 3`,
      java: `import java.util.*;

class Solution {
    public static int lengthOfLongestSubstring(String s) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
        System.out.println(lengthOfLongestSubstring("bbbbb")); // Expected: 1
        System.out.println(lengthOfLongestSubstring("pwwkew")); // Expected: 3
    }
}`,
      cpp: `#include <iostream>
#include <string>
#include <unordered_set>
using namespace std;

int lengthOfLongestSubstring(string s) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << lengthOfLongestSubstring("abcabcbb") << endl; // Expected: 3
    cout << lengthOfLongestSubstring("bbbbb") << endl; // Expected: 1
    cout << lengthOfLongestSubstring("pwwkew") << endl; // Expected: 3
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n1\n3",
      python: "3\n1\n3",
      java: "3\n1\n3",
      cpp: "3\n1\n3",
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "String • Stack",
    interviewType: "DSA",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: [
        "An input string is valid if: Open brackets must be closed by the same type of brackets.",
        "Open brackets must be closed in the correct order.",
        "Every close bracket has a corresponding open bracket of the same type.",
      ],
    },
    examples: [
      {
        input: 's = "()"',
        output: "true",
      },
      {
        input: 's = "()[]{}"',
        output: "true",
      },
      {
        input: 's = "(]"',
        output: "false",
      },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of parentheses only '()[]{}'"],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here
  
}

// Test cases
console.log(isValid("()")); // Expected: true
console.log(isValid("()[]{}")); // Expected: true
console.log(isValid("(]")); // Expected: false`,
      python: `def isValid(s):
    # Write your solution here
    pass

# Test cases
print(isValid("()"))  # Expected: True
print(isValid("()[]{}"))  # Expected: True
print(isValid("(]"))  # Expected: False`,
      java: `import java.util.*;

class Solution {
    public static boolean isValid(String s) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(isValid("()")); // Expected: true
        System.out.println(isValid("()[]{}")); // Expected: true
        System.out.println(isValid("(]")); // Expected: false
    }
}`,
      cpp: `#include <iostream>
#include <string>
#include <stack>
using namespace std;

bool isValid(string s) {
    // Write your solution here
    
    return false;
}

int main() {
    cout << boolalpha;
    cout << isValid("()") << endl; // Expected: true
    cout << isValid("()[]{}") << endl; // Expected: true
    cout << isValid("(]") << endl; // Expected: false
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
      cpp: "true\ntrue\nfalse",
    },
  },

  "reverse-linked-list": {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    difficulty: "Easy",
    category: "Linked List",
    interviewType: "DSA",
    description: {
      text: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
      notes: [],
    },
    examples: [
      {
        input: "head = [1,2,3,4,5]",
        output: "[5,4,3,2,1]",
      },
      {
        input: "head = [1,2]",
        output: "[2,1]",
      },
      {
        input: "head = []",
        output: "[]",
      },
    ],
    constraints: ["The number of nodes in the list is the range [0, 5000]", "-5000 ≤ Node.val ≤ 5000"],
    starterCode: {
      javascript: `class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseList(head) {
  // Write your solution here
  
}

// Test cases
// Helper function to create linked list from array
function createList(arr) {
  if (!arr.length) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to print list
function printList(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  console.log(arr);
}

printList(reverseList(createList([1,2,3,4,5]))); // Expected: [5,4,3,2,1]
printList(reverseList(createList([1,2]))); // Expected: [2,1]
printList(reverseList(createList([]))); // Expected: []`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverseList(head):
    # Write your solution here
    pass

# Test cases
# Helper functions
def createList(arr):
    if not arr:
        return None
    head = ListNode(arr[0])
    current = head
    for val in arr[1:]:
        current.next = ListNode(val)
        current = current.next
    return head

def printList(head):
    arr = []
    while head:
        arr.append(head.val)
        head = head.next
    print(arr)

printList(reverseList(createList([1,2,3,4,5])))  # Expected: [5,4,3,2,1]
printList(reverseList(createList([1,2])))  # Expected: [2,1]
printList(reverseList(createList([])))  # Expected: []`,
      java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

class Solution {
    public static ListNode reverseList(ListNode head) {
        // Write your solution here
        
        return null;
    }
    
    // Helper methods
    public static ListNode createList(int[] arr) {
        if (arr.length == 0) return null;
        ListNode head = new ListNode(arr[0]);
        ListNode current = head;
        for (int i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return head;
    }
    
    public static void printList(ListNode head) {
        System.out.print("[");
        while (head != null) {
            System.out.print(head.val);
            if (head.next != null) System.out.print(",");
            head = head.next;
        }
        System.out.println("]");
    }
    
    public static void main(String[] args) {
        printList(reverseList(createList(new int[]{1,2,3,4,5}))); // Expected: [5,4,3,2,1]
        printList(reverseList(createList(new int[]{1,2}))); // Expected: [2,1]
        printList(reverseList(createList(new int[]{}))); // Expected: []
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* reverseList(ListNode* head) {
    // Write your solution here
    
    return nullptr;
}

// Helper functions
ListNode* createList(vector<int>& arr) {
    if (arr.empty()) return nullptr;
    ListNode* head = new ListNode(arr[0]);
    ListNode* current = head;
    for (int i = 1; i < arr.size(); i++) {
        current->next = new ListNode(arr[i]);
        current = current->next;
    }
    return head;
}

void printList(ListNode* head) {
    cout << "[";
    while (head) {
        cout << head->val;
        if (head->next) cout << ",";
        head = head->next;
    }
    cout << "]" << endl;
}

int main() {
    vector<int> arr1 = {1,2,3,4,5};
    printList(reverseList(createList(arr1)));
    
    vector<int> arr2 = {1,2};
    printList(reverseList(createList(arr2)));
    
    vector<int> arr3 = {};
    printList(reverseList(createList(arr3)));
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[5,4,3,2,1]\n[2,1]\n[]",
      python: "[5, 4, 3, 2, 1]\n[2, 1]\n[]",
      java: "[5,4,3,2,1]\n[2,1]\n[]",
      cpp: "[5,4,3,2,1]\n[2,1]\n[]",
    },
  },

  "merge-two-sorted-lists": {
    id: "merge-two-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    category: "Linked List",
    interviewType: "DSA",
    description: {
      text: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.",
      notes: ["Return the head of the merged linked list."],
    },
    examples: [
      {
        input: "list1 = [1,2,4], list2 = [1,3,4]",
        output: "[1,1,2,3,4,4]",
      },
      {
        input: "list1 = [], list2 = []",
        output: "[]",
      },
      {
        input: "list1 = [], list2 = [0]",
        output: "[0]",
      },
    ],
    constraints: [
      "The number of nodes in both lists is in the range [0, 50]",
      "-100 ≤ Node.val ≤ 100",
      "Both list1 and list2 are sorted in non-decreasing order",
    ],
    starterCode: {
      javascript: `class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeTwoLists(list1, list2) {
  // Write your solution here
  
}

// Test cases with helper functions
function createList(arr) {
  if (!arr.length) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

function printList(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  console.log(arr);
}

printList(mergeTwoLists(createList([1,2,4]), createList([1,3,4]))); // Expected: [1,1,2,3,4,4]`,
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeTwoLists(list1, list2):
    # Write your solution here
    pass

# Test cases with helper functions
def createList(arr):
    if not arr:
        return None
    head = ListNode(arr[0])
    current = head
    for val in arr[1:]:
        current.next = ListNode(val)
        current = current.next
    return head

def printList(head):
    arr = []
    while head:
        arr.append(head.val)
        head = head.next
    print(arr)

printList(mergeTwoLists(createList([1,2,4]), createList([1,3,4])))  # Expected: [1,1,2,3,4,4]`,
      java: `class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

class Solution {
    public static ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Write your solution here
        
        return null;
    }
    
    public static ListNode createList(int[] arr) {
        if (arr.length == 0) return null;
        ListNode head = new ListNode(arr[0]);
        ListNode current = head;
        for (int i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return head;
    }
    
    public static void printList(ListNode head) {
        System.out.print("[");
        while (head != null) {
            System.out.print(head.val);
            if (head.next != null) System.out.print(",");
            head = head.next;
        }
        System.out.println("]");
    }
    
    public static void main(String[] args) {
        printList(mergeTwoLists(createList(new int[]{1,2,4}), createList(new int[]{1,3,4}))); // Expected: [1,1,2,3,4,4]
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
    // Write your solution here
    
    return nullptr;
}

// Helper functions
ListNode* createList(vector<int>& arr) {
    if (arr.empty()) return nullptr;
    ListNode* head = new ListNode(arr[0]);
    ListNode* current = head;
    for (int i = 1; i < arr.size(); i++) {
        current->next = new ListNode(arr[i]);
        current = current->next;
    }
    return head;
}

void printList(ListNode* head) {
    cout << "[";
    while (head) {
        cout << head->val;
        if (head->next) cout << ",";
        head = head->next;
    }
    cout << "]" << endl;
}

int main() {
    vector<int> arr1 = {1,2,4};
    vector<int> arr2 = {1,3,4};
    printList(mergeTwoLists(createList(arr1), createList(arr2)));
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[1,1,2,3,4,4]",
      python: "[1, 1, 2, 3, 4, 4]",
      java: "[1,1,2,3,4,4]",
      cpp: "[1,1,2,3,4,4]",
    },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming",
    interviewType: "DSA",
    description: {
      text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
      notes: ["Given n will be a positive integer."],
    },
    examples: [
      {
        input: "n = 2",
        output: "2",
        explanation: "There are two ways to climb to the top: 1. 1 step + 1 step, 2. 2 steps",
      },
      {
        input: "n = 3",
        output: "3",
        explanation: "There are three ways: 1. 1 step + 1 step + 1 step, 2. 1 step + 2 steps, 3. 2 steps + 1 step",
      },
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here
  
}

// Test cases
console.log(climbStairs(2)); // Expected: 2
console.log(climbStairs(3)); // Expected: 3
console.log(climbStairs(5)); // Expected: 8`,
      python: `def climbStairs(n):
    # Write your solution here
    pass

# Test cases
print(climbStairs(2))  # Expected: 2
print(climbStairs(3))  # Expected: 3
print(climbStairs(5))  # Expected: 8`,
      java: `class Solution {
    public static int climbStairs(int n) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(climbStairs(2)); // Expected: 2
        System.out.println(climbStairs(3)); // Expected: 3
        System.out.println(climbStairs(5)); // Expected: 8
    }
}`,
      cpp: `#include <iostream>
using namespace std;

int climbStairs(int n) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << climbStairs(2) << endl; // Expected: 2
    cout << climbStairs(3) << endl; // Expected: 3
    cout << climbStairs(5) << endl; // Expected: 8
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "2\n3\n8",
      python: "2\n3\n8",
      java: "2\n3\n8",
      cpp: "2\n3\n8",
    },
  },

  "binary-search": {
    id: "binary-search",
    title: "Binary Search",
    difficulty: "Easy",
    category: "Binary Search",
    interviewType: "DSA",
    description: {
      text: "Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.",
      notes: ["You must write an algorithm with O(log n) runtime complexity."],
    },
    examples: [
      {
        input: "nums = [-1,0,3,5,9,12], target = 9",
        output: "4",
        explanation: "9 exists in nums and its index is 4",
      },
      {
        input: "nums = [-1,0,3,5,9,12], target = 2",
        output: "-1",
        explanation: "2 does not exist in nums so return -1",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁴", "-10⁴ < nums[i], target < 10⁴", "All integers in nums are unique", "nums is sorted in ascending order"],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here
  
}

// Test cases
console.log(search([-1,0,3,5,9,12], 9)); // Expected: 4
console.log(search([-1,0,3,5,9,12], 2)); // Expected: -1`,
      python: `def search(nums, target):
    # Write your solution here
    pass

# Test cases
print(search([-1,0,3,5,9,12], 9))  # Expected: 4
print(search([-1,0,3,5,9,12], 2))  # Expected: -1`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 9)); // Expected: 4
        System.out.println(search(new int[]{-1,0,3,5,9,12}, 2)); // Expected: -1
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int search(vector<int>& nums, int target) {
    // Write your solution here
    
    return -1;
}

int main() {
    vector<int> nums1 = {-1,0,3,5,9,12};
    cout << search(nums1, 9) << endl; // Expected: 4
    
    vector<int> nums2 = {-1,0,3,5,9,12};
    cout << search(nums2, 2) << endl; // Expected: -1
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "4\n-1",
      python: "4\n-1",
      java: "4\n-1",
      cpp: "4\n-1",
    },
  },

  "coin-change": {
    id: "coin-change",
    title: "Coin Change",
    difficulty: "Medium",
    category: "Dynamic Programming",
    interviewType: "DSA",
    description: {
      text: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.",
      notes: ["You may assume that you have an infinite number of each kind of coin."],
    },
    examples: [
      {
        input: "coins = [1,2,5], amount = 11",
        output: "3",
        explanation: "11 = 5 + 5 + 1",
      },
      {
        input: "coins = [2], amount = 3",
        output: "-1",
      },
      {
        input: "coins = [1], amount = 0",
        output: "0",
      },
    ],
    constraints: ["1 ≤ coins.length ≤ 12", "1 ≤ coins[i] ≤ 2³¹ - 1", "0 ≤ amount ≤ 10⁴"],
    starterCode: {
      javascript: `function coinChange(coins, amount) {
  // Write your solution here
  
}

// Test cases
console.log(coinChange([1,2,5], 11)); // Expected: 3
console.log(coinChange([2], 3)); // Expected: -1
console.log(coinChange([1], 0)); // Expected: 0`,
      python: `def coinChange(coins, amount):
    # Write your solution here
    pass

# Test cases
print(coinChange([1,2,5], 11))  # Expected: 3
print(coinChange([2], 3))  # Expected: -1
print(coinChange([1], 0))  # Expected: 0`,
      java: `class Solution {
    public static int coinChange(int[] coins, int amount) {
        // Write your solution here
        
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(coinChange(new int[]{1,2,5}, 11)); // Expected: 3
        System.out.println(coinChange(new int[]{2}, 3)); // Expected: -1
        System.out.println(coinChange(new int[]{1}, 0)); // Expected: 0
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int coinChange(vector<int>& coins, int amount) {
    // Write your solution here
    
    return -1;
}

int main() {
    vector<int> coins1 = {1,2,5};
    cout << coinChange(coins1, 11) << endl; // Expected: 3
    
    vector<int> coins2 = {2};
    cout << coinChange(coins2, 3) << endl; // Expected: -1
    
    vector<int> coins3 = {1};
    cout << coinChange(coins3, 0) << endl; // Expected: 0
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n-1\n0",
      python: "3\n-1\n0",
      java: "3\n-1\n0",
      cpp: "3\n-1\n0",
    },
  },

  "longest-common-subsequence": {
    id: "longest-common-subsequence",
    title: "Longest Common Subsequence",
    difficulty: "Medium",
    category: "Dynamic Programming",
    interviewType: "DSA",
    description: {
      text: "Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.",
      notes: ["A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters."],
    },
    examples: [
      {
        input: 'text1 = "abcde", text2 = "ace"',
        output: "3",
        explanation: 'The longest common subsequence is "ace" and its length is 3.',
      },
      {
        input: 'text1 = "abc", text2 = "abc"',
        output: "3",
        explanation: 'The longest common subsequence is "abc" and its length is 3.',
      },
      {
        input: 'text1 = "abc", text2 = "def"',
        output: "0",
        explanation: "There is no such common subsequence, so the result is 0.",
      },
    ],
    constraints: ["1 ≤ text1.length, text2.length ≤ 1000", "text1 and text2 consist of only lowercase English characters."],
    starterCode: {
      javascript: `function longestCommonSubsequence(text1, text2) {
  // Write your solution here
  
}

// Test cases
console.log(longestCommonSubsequence("abcde", "ace")); // Expected: 3
console.log(longestCommonSubsequence("abc", "abc")); // Expected: 3
console.log(longestCommonSubsequence("abc", "def")); // Expected: 0`,
      python: `def longestCommonSubsequence(text1, text2):
    # Write your solution here
    pass

# Test cases
print(longestCommonSubsequence("abcde", "ace"))  # Expected: 3
print(longestCommonSubsequence("abc", "abc"))  # Expected: 3
print(longestCommonSubsequence("abc", "def"))  # Expected: 0`,
      java: `class Solution {
    public static int longestCommonSubsequence(String text1, String text2) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(longestCommonSubsequence("abcde", "ace")); // Expected: 3
        System.out.println(longestCommonSubsequence("abc", "abc")); // Expected: 3
        System.out.println(longestCommonSubsequence("abc", "def")); // Expected: 0
    }
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

int longestCommonSubsequence(string text1, string text2) {
    // Write your solution here
    
    return 0;
}

int main() {
    cout << longestCommonSubsequence("abcde", "ace") << endl; // Expected: 3
    cout << longestCommonSubsequence("abc", "abc") << endl; // Expected: 3
    cout << longestCommonSubsequence("abc", "def") << endl; // Expected: 0
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "3\n3\n0",
      python: "3\n3\n0",
      java: "3\n3\n0",
      cpp: "3\n3\n0",
    },
  },

  "number-of-islands": {
    id: "number-of-islands",
    title: "Number of Islands",
    difficulty: "Medium",
    category: "Graph",
    interviewType: "DSA",
    description: {
      text: 'Given an m x n 2D binary grid which represents a map of \'1\'s (land) and \'0\'s (water), return the number of islands.',
      notes: ["An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water."],
    },
    examples: [
      {
        input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',
        output: "1",
      },
      {
        input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]',
        output: "3",
      },
    ],
    constraints: ["m == grid.length", "n == grid[i].length", "1 ≤ m, n ≤ 300", "grid[i][j] is '0' or '1'"],
    starterCode: {
      javascript: `function numIslands(grid) {
  // Write your solution here
  
}

// Test cases
console.log(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
])); // Expected: 1

console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
])); // Expected: 3`,
      python: `def numIslands(grid):
    # Write your solution here
    pass

# Test cases
print(numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]))  # Expected: 1

print(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]))  # Expected: 3`,
      java: `class Solution {
    public static int numIslands(char[][] grid) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(numIslands(new char[][]{
          {'1','1','1','1','0'},
          {'1','1','0','1','0'},
          {'1','1','0','0','0'},
          {'0','0','0','0','0'}
        })); // Expected: 1
        
        System.out.println(numIslands(new char[][]{
          {'1','1','0','0','0'},
          {'1','1','0','0','0'},
          {'0','0','1','0','0'},
          {'0','0','0','1','1'}
        })); // Expected: 3
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int numIslands(vector<vector<char>>& grid) {
    // Write your solution here
    
    return 0;
}

int main() {
    vector<vector<char>> grid1 = {
        {'1','1','1','1','0'},
        {'1','1','0','1','0'},
        {'1','1','0','0','0'},
        {'0','0','0','0','0'}
    };
    cout << numIslands(grid1) << endl; // Expected: 1
    
    vector<vector<char>> grid2 = {
        {'1','1','0','0','0'},
        {'1','1','0','0','0'},
        {'0','0','1','0','0'},
        {'0','0','0','1','1'}
    };
    cout << numIslands(grid2) << endl; // Expected: 3
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1\n3",
      python: "1\n3",
      java: "1\n3",
      cpp: "1\n3",
    },
  },

  "course-schedule": {
    id: "course-schedule",
    title: "Course Schedule",
    difficulty: "Medium",
    category: "Graph",
    interviewType: "DSA",
    description: {
      text: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return true if you can finish all courses. Otherwise, return false.",
      notes: ["This is essentially a cycle detection problem in a directed graph."],
    },
    examples: [
      {
        input: "numCourses = 2, prerequisites = [[1,0]]",
        output: "true",
        explanation: "There are 2 courses. To take course 1 you should have finished course 0. So it is possible.",
      },
      {
        input: "numCourses = 2, prerequisites = [[1,0],[0,1]]",
        output: "false",
        explanation: "There are 2 courses. To take course 1 you should have finished course 0, and to take course 0 you should have finished course 1. So it is impossible.",
      },
    ],
    constraints: ["1 ≤ numCourses ≤ 2000", "0 ≤ prerequisites.length ≤ 5000", "prerequisites[i].length == 2", "0 ≤ ai, bi < numCourses", "All the pairs prerequisites[i] are unique"],
    starterCode: {
      javascript: `function canFinish(numCourses, prerequisites) {
  // Write your solution here
  
}

// Test cases
console.log(canFinish(2, [[1,0]])); // Expected: true
console.log(canFinish(2, [[1,0],[0,1]])); // Expected: false`,
      python: `def canFinish(numCourses, prerequisites):
    # Write your solution here
    pass

# Test cases
print(canFinish(2, [[1,0]]))  # Expected: True
print(canFinish(2, [[1,0],[0,1]]))  # Expected: False`,
      java: `class Solution {
    public static boolean canFinish(int numCourses, int[][] prerequisites) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(canFinish(2, new int[][]{{1,0}})); // Expected: true
        System.out.println(canFinish(2, new int[][]{{1,0},{0,1}})); // Expected: false
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {
    // Write your solution here
    
    return false;
}

int main() {
    cout << boolalpha;
    
    vector<vector<int>> prereq1 = {{1,0}};
    cout << canFinish(2, prereq1) << endl; // Expected: true
    
    vector<vector<int>> prereq2 = {{1,0},{0,1}};
    cout << canFinish(2, prereq2) << endl; // Expected: false
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse",
      python: "True\nFalse",
      java: "true\nfalse",
      cpp: "true\nfalse",
    },
  },

  "trapping-rain-water": {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Array",
    interviewType: "DSA",
    description: {
      text: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
      notes: [],
    },
    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
        explanation: "The elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water are being trapped.",
      },
      {
        input: "height = [4,2,0,3,2,5]",
        output: "9",
      },
    ],
    constraints: ["n == height.length", "1 ≤ n ≤ 2 * 10⁴", "0 ≤ height[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function trap(height) {
  // Write your solution here
  
}

// Test cases
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Expected: 6
console.log(trap([4,2,0,3,2,5])); // Expected: 9`,
      python: `def trap(height):
    # Write your solution here
    pass

# Test cases
print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # Expected: 6
print(trap([4,2,0,3,2,5]))  # Expected: 9`,
      java: `class Solution {
    public static int trap(int[] height) {
        // Write your solution here
        
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println(trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1})); // Expected: 6
        System.out.println(trap(new int[]{4,2,0,3,2,5})); // Expected: 9
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int trap(vector<int>& height) {
    // Write your solution here
    
    return 0;
}

int main() {
    vector<int> height1 = {0,1,0,2,1,0,1,3,2,1,2,1};
    cout << trap(height1) << endl; // Expected: 6
    
    vector<int> height2 = {4,2,0,3,2,5};
    cout << trap(height2) << endl; // Expected: 9
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "6\n9",
      python: "6\n9",
      java: "6\n9",
      cpp: "6\n9",
    },
  },

  "word-search": {
    id: "word-search",
    title: "Word Search",
    difficulty: "Medium",
    category: "Backtracking",
    interviewType: "DSA",
    description: {
      text: "Given an m x n grid of characters board and a string word, return true if word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.",
      notes: [],
    },
    examples: [
      {
        input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
        output: "true",
      },
      {
        input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"',
        output: "true",
      },
      {
        input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"',
        output: "false",
      },
    ],
    constraints: ["m == board.length", "n == board[i].length", "1 ≤ m, n ≤ 6", "1 ≤ word.length ≤ 15", "board and word consists of only lowercase and uppercase English letters"],
    starterCode: {
      javascript: `function exist(board, word) {
  // Write your solution here
  
}

// Test cases
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")); // Expected: true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE")); // Expected: true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB")); // Expected: false`,
      python: `def exist(board, word):
    # Write your solution here
    pass

# Test cases
print(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"))  # Expected: True
print(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"))  # Expected: True
print(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"))  # Expected: False`,
      java: `class Solution {
    public static boolean exist(char[][] board, String word) {
        // Write your solution here
        
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println(exist(new char[][]{{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}}, "ABCCED")); // Expected: true
        System.out.println(exist(new char[][]{{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}}, "SEE")); // Expected: true
        System.out.println(exist(new char[][]{{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}}, "ABCB")); // Expected: false
    }
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

bool exist(vector<vector<char>>& board, string word) {
    // Write your solution here
    
    return false;
}

int main() {
    cout << boolalpha;
    
    vector<vector<char>> board1 = {{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}};
    cout << exist(board1, "ABCCED") << endl; // Expected: true
    
    vector<vector<char>> board2 = {{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}};
    cout << exist(board2, "SEE") << endl; // Expected: true
    
    vector<vector<char>> board3 = {{'A','B','C','E'},{'S','F','C','S'},{'A','D','E','E'}};
    cout << exist(board3, "ABCB") << endl; // Expected: false
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
      cpp: "true\ntrue\nfalse",
    },
  },

  "lru-cache": {
    id: "lru-cache",
    title: "LRU Cache",
    difficulty: "Hard",
    category: "Design",
    interviewType: "DSA",
    description: {
      text: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement the LRUCache class with get(key) and put(key, value) methods.",
      notes: ["get(key) - Return the value of the key if it exists, otherwise return -1.", "put(key, value) - Update the value of the key if it exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity, evict the least recently used key."],
    },
    examples: [
      {
        input: '["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]\n[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]',
        output: "[null, null, null, 1, null, -1, null, -1, 3, 4]",
        explanation: "LRUCache lRUCache = new LRUCache(2);\nlRUCache.put(1, 1); // cache is {1=1}\nlRUCache.put(2, 2); // cache is {1=1, 2=2}\nlRUCache.get(1);    // return 1\nlRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}\nlRUCache.get(2);    // returns -1 (not found)\nlRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}\nlRUCache.get(1);    // return -1 (not found)\nlRUCache.get(3);    // return 3\nlRUCache.get(4);    // return 4",
      },
    ],
    constraints: ["1 ≤ capacity ≤ 3000", "0 ≤ key ≤ 10⁴", "0 ≤ value ≤ 10⁵", "At most 2 * 10⁵ calls will be made to get and put"],
    starterCode: {
      javascript: `class LRUCache {
  constructor(capacity) {
    // Initialize your data structure here
  }

  get(key) {
    // Write your solution here
  }

  put(key, value) {
    // Write your solution here
  }
}

// Test cases
const lRUCache = new LRUCache(2);
lRUCache.put(1, 1);
lRUCache.put(2, 2);
console.log(lRUCache.get(1)); // Expected: 1
lRUCache.put(3, 3);
console.log(lRUCache.get(2)); // Expected: -1
lRUCache.put(4, 4);
console.log(lRUCache.get(1)); // Expected: -1
console.log(lRUCache.get(3)); // Expected: 3
console.log(lRUCache.get(4)); // Expected: 4`,
      python: `class LRUCache:
    def __init__(self, capacity):
        # Initialize your data structure here
        pass

    def get(self, key):
        # Write your solution here
        pass

    def put(self, key, value):
        # Write your solution here
        pass

# Test cases
lRUCache = LRUCache(2)
lRUCache.put(1, 1)
lRUCache.put(2, 2)
print(lRUCache.get(1))  # Expected: 1
lRUCache.put(3, 3)
print(lRUCache.get(2))  # Expected: -1
lRUCache.put(4, 4)
print(lRUCache.get(1))  # Expected: -1
print(lRUCache.get(3))  # Expected: 3
print(lRUCache.get(4))  # Expected: 4`,
      java: `import java.util.*;

class LRUCache {
    public LRUCache(int capacity) {
        // Initialize your data structure here
    }
    
    public int get(int key) {
        // Write your solution here
        return -1;
    }
    
    public void put(int key, int value) {
        // Write your solution here
    }
    
    public static void main(String[] args) {
        LRUCache lRUCache = new LRUCache(2);
        lRUCache.put(1, 1);
        lRUCache.put(2, 2);
        System.out.println(lRUCache.get(1)); // Expected: 1
        lRUCache.put(3, 3);
        System.out.println(lRUCache.get(2)); // Expected: -1
        lRUCache.put(4, 4);
        System.out.println(lRUCache.get(1)); // Expected: -1
        System.out.println(lRUCache.get(3)); // Expected: 3
        System.out.println(lRUCache.get(4)); // Expected: 4
    }
}`,
      cpp: `#include <iostream>
#include <unordered_map>
using namespace std;

class LRUCache {
public:
    LRUCache(int capacity) {
        // Initialize your data structure here
    }
    
    int get(int key) {
        // Write your solution here
        return -1;
    }
    
    void put(int key, int value) {
        // Write your solution here
    }
};

int main() {
    LRUCache lRUCache(2);
    lRUCache.put(1, 1);
    lRUCache.put(2, 2);
    cout << lRUCache.get(1) << endl; // Expected: 1
    lRUCache.put(3, 3);
    cout << lRUCache.get(2) << endl; // Expected: -1
    lRUCache.put(4, 4);
    cout << lRUCache.get(1) << endl; // Expected: -1
    cout << lRUCache.get(3) << endl; // Expected: 3
    cout << lRUCache.get(4) << endl; // Expected: 4
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "1\n-1\n-1\n3\n4",
      python: "1\n-1\n-1\n3\n4",
      java: "1\n-1\n-1\n3\n4",
      cpp: "1\n-1\n-1\n3\n4",
    },
  },

  "median-of-two-sorted-arrays": {
    id: "median-of-two-sorted-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    category: "Binary Search",
    interviewType: "DSA",
    description: {
      text: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).",
      notes: [],
    },
    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.00000",
        explanation: "merged array = [1,2,3] and median is 2.",
      },
      {
        input: "nums1 = [1,2], nums2 = [3,4]",
        output: "2.50000",
        explanation: "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.",
      },
    ],
    constraints: ["nums1.length == m", "nums2.length == n", "0 ≤ m ≤ 1000", "0 ≤ n ≤ 1000", "1 ≤ m + n ≤ 2000", "-10⁶ ≤ nums1[i], nums2[i] ≤ 10⁶"],
    starterCode: {
      javascript: `function findMedianSortedArrays(nums1, nums2) {
  // Write your solution here
  
}

// Test cases
console.log(findMedianSortedArrays([1,3], [2])); // Expected: 2.0
console.log(findMedianSortedArrays([1,2], [3,4])); // Expected: 2.5`,
      python: `def findMedianSortedArrays(nums1, nums2):
    # Write your solution here
    pass

# Test cases
print(findMedianSortedArrays([1,3], [2]))  # Expected: 2.0
print(findMedianSortedArrays([1,2], [3,4]))  # Expected: 2.5`,
      java: `class Solution {
    public static double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Write your solution here
        
        return 0.0;
    }
    
    public static void main(String[] args) {
        System.out.println(findMedianSortedArrays(new int[]{1,3}, new int[]{2})); // Expected: 2.0
        System.out.println(findMedianSortedArrays(new int[]{1,2}, new int[]{3,4})); // Expected: 2.5
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    // Write your solution here
    
    return 0.0;
}

int main() {
    vector<int> nums1 = {1,3};
    vector<int> nums2 = {2};
    cout << findMedianSortedArrays(nums1, nums2) << endl; // Expected: 2.0
    
    vector<int> nums3 = {1,2};
    vector<int> nums4 = {3,4};
    cout << findMedianSortedArrays(nums3, nums4) << endl; // Expected: 2.5
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "2\n2.5",
      python: "2.0\n2.5",
      java: "2.0\n2.5",
      cpp: "2\n2.5",
    },
  },

  "find-first-and-last-position": {
    id: "find-first-and-last-position",
    title: "Find First and Last Position of Element in Sorted Array",
    difficulty: "Medium",
    category: "Binary Search",
    interviewType: "DSA",
    description: {
      text: "Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1]. You must write an algorithm with O(log n) runtime complexity.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [5,7,7,8,8,10], target = 8",
        output: "[3,4]",
      },
      {
        input: "nums = [5,7,7,8,8,10], target = 6",
        output: "[-1,-1]",
      },
    ],
    constraints: ["0 ≤ nums.length ≤ 10⁵", "-10⁹ ≤ nums[i] ≤ 10⁹", "nums is a non-decreasing array", "-10⁹ ≤ target ≤ 10⁹"],
    starterCode: {
      javascript: `function searchRange(nums, target) {
  // Write your solution here
  
}

console.log(searchRange([5,7,7,8,8,10], 8)); // Expected: [3,4]
console.log(searchRange([5,7,7,8,8,10], 6)); // Expected: [-1,-1]`,
      python: `def searchRange(nums, target):
    # Write your solution here
    pass

print(searchRange([5,7,7,8,8,10], 8))  # Expected: [3,4]
print(searchRange([5,7,7,8,8,10], 6))  # Expected: [-1,-1]`,
      java: `class Solution {
    public static int[] searchRange(int[] nums, int target) {
        // Write your solution here
        return new int[]{-1,-1};
    }
    
    public static void main(String[] args) {
        System.out.println(java.util.Arrays.toString(searchRange(new int[]{5,7,7,8,8,10}, 8)));
        System.out.println(java.util.Arrays.toString(searchRange(new int[]{5,7,7,8,8,10}, 6)));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> searchRange(vector<int>& nums, int target) {
    // Write your solution here
    return {-1,-1};
}

int main() {
    vector<int> nums1 = {5,7,7,8,8,10};
    vector<int> result1 = searchRange(nums1, 8);
    cout << "[" << result1[0] << "," << result1[1] << "]" << endl;
    
    vector<int> nums2 = {5,7,7,8,8,10};
    vector<int> result2 = searchRange(nums2, 6);
    cout << "[" << result2[0] << "," << result2[1] << "]" << endl;
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "[3,4]\n[-1,-1]",
      python: "[3, 4]\n[-1, -1]",
      java: "[3, 4]\n[-1, -1]",
      cpp: "[3,4]\n[-1,-1]",
    },
  },

  "search-in-rotated-sorted-array": {
    id: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    category: "Binary Search",
    interviewType: "DSA",
    description: {
      text: "There is an integer array nums sorted in ascending order (with distinct values). Prior to being passed to your function, nums is possibly rotated at an unknown pivot index. Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums. You must write an algorithm with O(log n) runtime complexity.",
      notes: [],
    },
    examples: [
      {
        input: "nums = [4,5,6,7,0,1,2], target = 0",
        output: "4",
      },
      {
        input: "nums = [4,5,6,7,0,1,2], target = 3",
        output: "-1",
      },
    ],
    constraints: ["1 ≤ nums.length ≤ 5000", "-10⁴ ≤ nums[i] ≤ 10⁴", "All values of nums are unique", "nums is an ascending array that is possibly rotated"],
    starterCode: {
      javascript: `function search(nums, target) {
  // Write your solution here
  
}

console.log(search([4,5,6,7,0,1,2], 0)); // Expected: 4
console.log(search([4,5,6,7,0,1,2], 3)); // Expected: -1`,
      python: `def search(nums, target):
    # Write your solution here
    pass

print(search([4,5,6,7,0,1,2], 0))  # Expected: 4
print(search([4,5,6,7,0,1,2], 3))  # Expected: -1`,
      java: `class Solution {
    public static int search(int[] nums, int target) {
        // Write your solution here
        return -1;
    }
    
    public static void main(String[] args) {
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 0));
        System.out.println(search(new int[]{4,5,6,7,0,1,2}, 3));
    }
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int search(vector<int>& nums, int target) {
    // Write your solution here
    return -1;
}

int main() {
    vector<int> nums1 = {4,5,6,7,0,1,2};
    cout << search(nums1, 0) << endl;
    
    vector<int> nums2 = {4,5,6,7,0,1,2};
    cout << search(nums2, 3) << endl;
    
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "4\n-1",
      python: "4\n-1",
      java: "4\n-1",
      cpp: "4\n-1",
    },
  },

  "linked-list-cycle": {
    id: "linked-list-cycle",
    title: "Linked List Cycle",
    difficulty: "Easy",
    category: "Linked List",
    interviewType: "DSA",
    description: {
      text: "Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.",
      notes: ["Return true if there is a cycle in the linked list. Otherwise, return false."],
    },
    examples: [
      {
        input: "head = [3,2,0,-4], pos = 1",
        output: "true",
        explanation: "There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).",
      },
      {
        input: "head = [1], pos = -1",
        output: "false",
        explanation: "There is no cycle in the linked list.",
      },
    ],
    constraints: ["The number of the nodes in the list is in the range [0, 10⁴]", "-10⁵ ≤ Node.val ≤ 10⁵"],
    starterCode: {
      javascript: `function hasCycle(head) {
  // Write your solution here
  
}

// Test with your own linked list structure
console.log("Implement linked list cycle detection");`,
      python: `def hasCycle(head):
    # Write your solution here
    pass

# Test with your own linked list structure
print("Implement linked list cycle detection")`,
      java: `class Solution {
    public static boolean hasCycle(ListNode head) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println("Implement linked list cycle detection");
    }
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

bool hasCycle(ListNode* head) {
    // Write your solution here
    return false;
}

int main() {
    cout << "Implement linked list cycle detection" << endl;
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "Implement linked list cycle detection",
      python: "Implement linked list cycle detection",
      java: "Implement linked list cycle detection",
      cpp: "Implement linked list cycle detection",
    },
  },

  "remove-nth-node-from-end": {
    id: "remove-nth-node-from-end",
    title: "Remove Nth Node From End of List",
    difficulty: "Medium",
    category: "Linked List",
    interviewType: "DSA",
    description: {
      text: "Given the head of a linked list, remove the nth node from the end of the list and return its head.",
      notes: [],
    },
    examples: [
      {
        input: "head = [1,2,3,4,5], n = 2",
        output: "[1,2,3,5]",
      },
      {
        input: "head = [1], n = 1",
        output: "[]",
      },
    ],
    constraints: ["The number of nodes in the list is sz", "1 ≤ sz ≤ 30", "0 ≤ Node.val ≤ 100", "1 ≤ n ≤ sz"],
    starterCode: {
      javascript: `function removeNthFromEnd(head, n) {
  // Write your solution here
  
}

console.log("Implement remove nth node from end");`,
      python: `def removeNthFromEnd(head, n):
    # Write your solution here
    pass

print("Implement remove nth node from end")`,
      java: `class Solution {
    public static ListNode removeNthFromEnd(ListNode head, int n) {
        // Write your solution here
        return head;
    }
    
    public static void main(String[] args) {
        System.out.println("Implement remove nth node from end");
    }
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* removeNthFromEnd(ListNode* head, int n) {
    // Write your solution here
    return head;
}

int main() {
    cout << "Implement remove nth node from end" << endl;
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "Implement remove nth node from end",
      python: "Implement remove nth node from end",
      java: "Implement remove nth node from end",
      cpp: "Implement remove nth node from end",
    },
  },

  "add-two-numbers": {
    id: "add-two-numbers",
    title: "Add Two Numbers",
    difficulty: "Medium",
    category: "Linked List",
    interviewType: "DSA",
    description: {
      text: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.",
      notes: ["You may assume the two numbers do not contain any leading zero, except the number 0 itself."],
    },
    examples: [
      {
        input: "l1 = [2,4,3], l2 = [5,6,4]",
        output: "[7,0,8]",
        explanation: "342 + 465 = 807.",
      },
      {
        input: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
        output: "[8,9,9,9,0,0,0,1]",
      },
    ],
    constraints: ["The number of nodes in each linked list is in the range [1, 100]", "0 ≤ Node.val ≤ 9"],
    starterCode: {
      javascript: `function addTwoNumbers(l1, l2) {
  // Write your solution here
  
}

console.log("Implement add two numbers");`,
      python: `def addTwoNumbers(l1, l2):
    # Write your solution here
    pass

print("Implement add two numbers")`,
      java: `class Solution {
    public static ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        // Write your solution here
        return null;
    }
    
    public static void main(String[] args) {
        System.out.println("Implement add two numbers");
    }
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
    // Write your solution here
    return nullptr;
}

int main() {
    cout << "Implement add two numbers" << endl;
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "Implement add two numbers",
      python: "Implement add two numbers",
      java: "Implement add two numbers",
      cpp: "Implement add two numbers",
    },
  },

  "palindrome-linked-list": {
    id: "palindrome-linked-list",
    title: "Palindrome Linked List",
    difficulty: "Easy",
    category: "Linked List",
    interviewType: "DSA",
    description: {
      text: "Given the head of a singly linked list, return true if it is a palindrome or false otherwise.",
      notes: ["Follow up: Could you do it in O(n) time and O(1) space?"],
    },
    examples: [
      {
        input: "head = [1,2,2,1]",
        output: "true",
      },
      {
        input: "head = [1,2]",
        output: "false",
      },
    ],
    constraints: ["The number of nodes in the list is in the range [1, 10⁵]", "0 ≤ Node.val ≤ 9"],
    starterCode: {
      javascript: `function isPalindrome(head) {
  // Write your solution here
  
}

console.log("Implement palindrome linked list");`,
      python: `def isPalindrome(head):
    # Write your solution here
    pass

print("Implement palindrome linked list")`,
      java: `class Solution {
    public static boolean isPalindrome(ListNode head) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println("Implement palindrome linked list");
    }
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode* next;
    ListNode(int x) : val(x), next(nullptr) {}
};

bool isPalindrome(ListNode* head) {
    // Write your solution here
    return false;
}

int main() {
    cout << "Implement palindrome linked list" << endl;
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "Implement palindrome linked list",
      python: "Implement palindrome linked list",
      java: "Implement palindrome linked list",
      cpp: "Implement palindrome linked list",
    },
  },

  "invert-binary-tree": {
    id: "invert-binary-tree",
    title: "Invert Binary Tree",
    difficulty: "Easy",
    category: "Tree",
    interviewType: "DSA",
    description: {
      text: "Given the root of a binary tree, invert the tree, and return its root.",
      notes: [],
    },
    examples: [
      {
        input: "root = [4,2,7,1,3,6,9]",
        output: "[4,7,2,9,6,3,1]",
      },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 100]", "-100 ≤ Node.val ≤ 100"],
    starterCode: {
      javascript: `function invertTree(root) {
  // Write your solution here
  
}

console.log("Implement invert binary tree");`,
      python: `def invertTree(root):
    # Write your solution here
    pass

print("Implement invert binary tree")`,
      java: `class Solution {
    public static TreeNode invertTree(TreeNode root) {
        // Write your solution here
        return root;
    }
    
    public static void main(String[] args) {
        System.out.println("Implement invert binary tree");
    }
}`,
      cpp: `#include <iostream>
using namespace std;

struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

TreeNode* invertTree(TreeNode* root) {
    // Write your solution here
    return root;
}

int main() {
    cout << "Implement invert binary tree" << endl;
    return 0;
}`,
    },
    expectedOutput: {
      javascript: "Implement invert binary tree",
      python: "Implement invert binary tree",
      java: "Implement invert binary tree",
      cpp: "Implement invert binary tree",
    },
  },

  "maximum-depth-binary-tree": {
    id: "maximum-depth-binary-tree",
    title: "Maximum Depth of Binary Tree",
    difficulty: "Easy",
    category: "Tree",
    interviewType: "DSA",
    description: {
      text: "Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.",
      notes: [],
    },
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "3",
      },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 10⁴]", "-100 ≤ Node.val ≤ 100"],
    starterCode: {
      javascript: `function maxDepth(root) {
  // Write your solution here
  
}

console.log("Implement maximum depth of binary tree");`,
      python: `def maxDepth(root):
    # Write your solution here
    pass

print("Implement maximum depth of binary tree")`,
      java: `class Solution {
    public static int maxDepth(TreeNode root) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println("Implement maximum depth of binary tree");
    }
}`,
    },
    expectedOutput: {
      javascript: "Implement maximum depth of binary tree",
      python: "Implement maximum depth of binary tree",
      java: "Implement maximum depth of binary tree",
      cpp: "Implement maximum depth of binary tree",
    },
  },

  "same-tree": {
    id: "same-tree",
    title: "Same Tree",
    difficulty: "Easy",
    category: "Tree",
    interviewType: "DSA",
    description: {
      text: "Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.",
      notes: [],
    },
    examples: [
      {
        input: "p = [1,2,3], q = [1,2,3]",
        output: "true",
      },
      {
        input: "p = [1,2], q = [1,null,2]",
        output: "false",
      },
    ],
    constraints: ["The number of nodes in both trees is in the range [0, 100]", "-10⁴ ≤ Node.val ≤ 10⁴"],
    starterCode: {
      javascript: `function isSameTree(p, q) {
  // Write your solution here
  
}

console.log("Implement same tree");`,
      python: `def isSameTree(p, q):
    # Write your solution here
    pass

print("Implement same tree")`,
      java: `class Solution {
    public static boolean isSameTree(TreeNode p, TreeNode q) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println("Implement same tree");
    }
}`,
    },
    expectedOutput: {
      javascript: "Implement same tree",
      python: "Implement same tree",
      java: "Implement same tree",
      cpp: "Implement same tree",
    },
  },

  "subtree-of-another-tree": {
    id: "subtree-of-another-tree",
    title: "Subtree of Another Tree",
    difficulty: "Easy",
    category: "Tree",
    interviewType: "DSA",
    description: {
      text: "Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.",
      notes: [],
    },
    examples: [
      {
        input: "root = [3,4,5,1,2], subRoot = [4,1,2]",
        output: "true",
      },
    ],
    constraints: ["The number of nodes in the root tree is in the range [1, 2000]", "The number of nodes in the subRoot tree is in the range [1, 1000]"],
    starterCode: {
      javascript: `function isSubtree(root, subRoot) {
  // Write your solution here
  
}

console.log("Implement subtree of another tree");`,
      python: `def isSubtree(root, subRoot):
    # Write your solution here
    pass

print("Implement subtree of another tree")`,
      java: `class Solution {
    public static boolean isSubtree(TreeNode root, TreeNode subRoot) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println("Implement subtree of another tree");
    }
}`,
    },
    expectedOutput: {
      javascript: "Implement subtree of another tree",
      python: "Implement subtree of another tree",
      java: "Implement subtree of another tree",
      cpp: "Implement subtree of another tree",
    },
  },

  "lowest-common-ancestor-bst": {
    id: "lowest-common-ancestor-bst",
    title: "Lowest Common Ancestor of a Binary Search Tree",
    difficulty: "Easy",
    category: "Tree",
    interviewType: "DSA",
    description: {
      text: "Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.",
      notes: ["The lowest common ancestor is defined as the lowest node in T that has both p and q as descendants."],
    },
    examples: [
      {
        input: "root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8",
        output: "6",
        explanation: "The LCA of nodes 2 and 8 is 6.",
      },
    ],
    constraints: ["The number of nodes in the tree is in the range [2, 10⁵]", "-10⁹ ≤ Node.val ≤ 10⁹"],
    starterCode: {
      javascript: `function lowestCommonAncestor(root, p, q) {
  // Write your solution here
  
}

console.log("Implement LCA of BST");`,
      python: `def lowestCommonAncestor(root, p, q):
    # Write your solution here
    pass

print("Implement LCA of BST")`,
      java: `class Solution {
    public static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // Write your solution here
        return root;
    }
    
    public static void main(String[] args) {
        System.out.println("Implement LCA of BST");
    }
}`,
    },
    expectedOutput: {
      javascript: "Implement LCA of BST",
      python: "Implement LCA of BST",
      java: "Implement LCA of BST",
      cpp: "Implement LCA of BST",
    },
  },

  "binary-tree-level-order-traversal": {
    id: "binary-tree-level-order-traversal",
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    category: "Tree",
    interviewType: "DSA",
    description: {
      text: "Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",
      notes: [],
    },
    examples: [
      {
        input: "root = [3,9,20,null,null,15,7]",
        output: "[[3],[9,20],[15,7]]",
      },
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 2000]", "-1000 ≤ Node.val ≤ 1000"],
    starterCode: {
      javascript: `function levelOrder(root) {
  // Write your solution here
  
}

console.log("Implement level order traversal");`,
      python: `def levelOrder(root):
    # Write your solution here
    pass

print("Implement level order traversal")`,
      java: `class Solution {
    public static List<List<Integer>> levelOrder(TreeNode root) {
        // Write your solution here
        return new ArrayList<>();
    }
    
    public static void main(String[] args) {
        System.out.println("Implement level order traversal");
    }
}`,
    },
    expectedOutput: {
      javascript: "Implement level order traversal",
      python: "Implement level order traversal",
      java: "Implement level order traversal",
      cpp: "Implement level order traversal",
    },
  },

  "validate-binary-search-tree": {
    id: "validate-binary-search-tree",
    title: "Validate Binary Search Tree",
    difficulty: "Medium",
    category: "Tree",
    interviewType: "DSA",
    description: {
      text: "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
      notes: ["A valid BST is defined as follows: The left subtree of a node contains only nodes with keys less than the node's key. The right subtree of a node contains only nodes with keys greater than the node's key. Both the left and right subtrees must also be binary search trees."],
    },
    examples: [
      {
        input: "root = [2,1,3]",
        output: "true",
      },
      {
        input: "root = [5,1,4,null,null,3,6]",
        output: "false",
      },
    ],
    constraints: ["The number of nodes in the tree is in the range [1, 10⁴]", "-2³¹ ≤ Node.val ≤ 2³¹ - 1"],
    starterCode: {
      javascript: `function isValidBST(root) {
  // Write your solution here
  
}

console.log("Implement validate BST");`,
      python: `def isValidBST(root):
    # Write your solution here
    pass

print("Implement validate BST")`,
      java: `class Solution {
    public static boolean isValidBST(TreeNode root) {
        // Write your solution here
        return false;
    }
    
    public static void main(String[] args) {
        System.out.println("Implement validate BST");
    }
}`,
    },
    expectedOutput: {
      javascript: "Implement validate BST",
      python: "Implement validate BST",
      java: "Implement validate BST",
      cpp: "Implement validate BST",
    },
  },

  "kth-smallest-element-bst": {
    id: "kth-smallest-element-bst",
    title: "Kth Smallest Element in a BST",
    difficulty: "Medium",
    category: "Tree",
    interviewType: "DSA",
    description: {
      text: "Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.",
      notes: [],
    },
    examples: [
      {
        input: "root = [3,1,4,null,2], k = 1",
        output: "1",
      },
      {
        input: "root = [5,3,6,2,4,null,null,1], k = 3",
        output: "3",
      },
    ],
    constraints: ["The number of nodes in the tree is n", "1 ≤ k ≤ n ≤ 10⁴", "0 ≤ Node.val ≤ 10⁴"],
    starterCode: {
      javascript: `function kthSmallest(root, k) {
  // Write your solution here
  
}

console.log("Implement kth smallest in BST");`,
      python: `def kthSmallest(root, k):
    # Write your solution here
    pass

print("Implement kth smallest in BST")`,
      java: `class Solution {
    public static int kthSmallest(TreeNode root, int k) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println("Implement kth smallest in BST");
    }
}`,
    },
    expectedOutput: {
      javascript: "Implement kth smallest in BST",
      python: "Implement kth smallest in BST",
      java: "Implement kth smallest in BST",
      cpp: "Implement kth smallest in BST",
    },
  },

  "construct-binary-tree-preorder-inorder": {
    id: "construct-binary-tree-preorder-inorder",
    title: "Construct Binary Tree from Preorder and Inorder Traversal",
    difficulty: "Medium",
    category: "Tree",
    interviewType: "DSA",
    description: {
      text: "Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.",
      notes: [],
    },
    examples: [
      {
        input: "preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]",
        output: "[3,9,20,null,null,15,7]",
      },
    ],
    constraints: ["1 ≤ preorder.length ≤ 3000", "inorder.length == preorder.length", "-3000 ≤ preorder[i], inorder[i] ≤ 3000"],
    starterCode: {
      javascript: `function buildTree(preorder, inorder) {
  // Write your solution here
  
}

console.log("Implement construct tree from traversals");`,
      python: `def buildTree(preorder, inorder):
    # Write your solution here
    pass

print("Implement construct tree from traversals")`,
      java: `class Solution {
    public static TreeNode buildTree(int[] preorder, int[] inorder) {
        // Write your solution here
        return null;
    }
    
    public static void main(String[] args) {
        System.out.println("Implement construct tree from traversals");
    }
}`,
    },
    expectedOutput: {
      javascript: "Implement construct tree from traversals",
      python: "Implement construct tree from traversals",
      java: "Implement construct tree from traversals",
      cpp: "Implement construct tree from traversals",
    },
  },

  "binary-tree-maximum-path-sum": {
    id: "binary-tree-maximum-path-sum",
    title: "Binary Tree Maximum Path Sum",
    difficulty: "Hard",
    category: "Tree",
    interviewType: "DSA",
    description: {
      text: "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. The path sum of a path is the sum of the node's values in the path. Given the root of a binary tree, return the maximum path sum of any non-empty path.",
      notes: [],
    },
    examples: [
      {
        input: "root = [1,2,3]",
        output: "6",
        explanation: "The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.",
      },
    ],
    constraints: ["The number of nodes in the tree is in the range [1, 3 * 10⁴]", "-1000 ≤ Node.val ≤ 1000"],
    starterCode: {
      javascript: `function maxPathSum(root) {
  // Write your solution here
  
}

console.log("Implement max path sum");`,
      python: `def maxPathSum(root):
    # Write your solution here
    pass

print("Implement max path sum")`,
      java: `class Solution {
    public static int maxPathSum(TreeNode root) {
        // Write your solution here
        return 0;
    }
    
    public static void main(String[] args) {
        System.out.println("Implement max path sum");
    }
}`,
    },
    expectedOutput: {
      javascript: "Implement max path sum",
      python: "Implement max path sum",
      java: "Implement max path sum",
      cpp: "Implement max path sum",
    },
  },
};

export const DIFFICULTY_COLORS = {
  Easy: "#00b8a3",
  Medium: "#ffc01e",
  Hard: "#ef4743",
};

export const LANGUAGE_CONFIG = {
  javascript: { name: "JavaScript", icon: "/javascript.png", monacoLang: "javascript" },
  python: { name: "Python", icon: "/python.png", monacoLang: "python" },
  java: { name: "Java", icon: "/java.png", monacoLang: "java" },
  cpp: { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", monacoLang: "cpp" },
};
