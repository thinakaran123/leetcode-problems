/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === '(' || char === '{' || char === '[') {
            stack.push(char); // Push opening brackets
        } else {
            // If stack is empty or top doesn't match
            if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
                return false;
            }
            stack.pop(); // Valid match, remove opening
        }
    }

    // Final check: Stack should be empty
    return stack.length === 0;
};

