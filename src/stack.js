const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor(...arr) {
    this.arr = new Array();

    if (this.arr.length > 0) {
      arr.forEach(element => this.arr.push(element));
    }
  }

  push(...arr) {
    arr.forEach(element => this.arr.push(element) );
    return this.arr;
  }

  pop() {
    return this.arr.pop();
  }

  peek() {
    return this.arr[this.arr.length-1];
  }
}
const stack = new Stack();
stack.push(1);
stack.peek();
stack.pop();
stack.pop();
//stack.pop();
console.log(stack);

module.exports = {
  Stack
};
