class Stack {
  constructor() {
    this.items = {};
    this.top = 0;
  }

  push(data) {
    this.top++;
    this.items[this.top] = data;
  }

  pop() {
    let deleteData;
    if (this.top) {
      // evaluamos si this.top !== 0; --> 0 es falsey.
      deleteData = this.items[this.top];
      delete this.items[this.top];
      this.top--;
      return deleteData;
    }
  }

  getSize() {
    return this.top;
  }

  isEmpty() {
    if (this.getSize() === 0) {
      return true;
    } else {
      return false;
    }
  }
    //PEEK: sirve para consultar el primer valor de la pila (sin sacarlo de la misma)
  peek() {
    if (this.getSize() === 0) {
      return null;
    }
    return this.items[this.top];
  }

  print(){
    let result = "";
    for (let i = this.top; i >0; i--) {
      result += this.items[i] + " ";
    }
    return result;
  }
};


const stack = new Stack();
stack.push('Plato #1');
stack.push('Plato #2');
stack.push('Plato #3');
stack.push('Plato #4');
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.getSize());

console.log(stack.isEmpty());

console.log(stack.peek());

console.log(stack.print());

console.log(stack);
