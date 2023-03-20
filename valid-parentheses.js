// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// My Solution:

function validParentheses(parenStr) {
    let stack = [];
    for (i = 0; i < parenStr.length; i++) {
        if (parenStr[i] === "(") {
            stack.push(parenStr[i]);
        } 
        else if (parenStr[i] == ")") {
            if (stack.length === 0 || stack.pop() !== "(") {
                return false;
            }
        }
    }
    return stack.length === 0;
}