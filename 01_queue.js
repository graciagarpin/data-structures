// aqui creo una clase con un constructor, el cual es un método que se ejecuta automáticamente cuando se crea una nueva instancia de esa clase.
class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.end = 0;
  }

  enqueue(data) {
    this.items[this.end] = data;
    this.end++;
  }

  dequeue() {
    if (this.front === this.end) {
      return null;
    }

    const data = this.items[this.front];
    // ARREGLO: a pesar de que estamos restando items con dequeue() las veces que sean, si no hacemos esto, los valores introducidos siempre persistirán en el objeto de items. Queremos que no persistan los valores que ya salieron de la cola (si checkeamos ahora el contenido del objeto items, veremos que sólo están los valores resultantes de todas las llamadas a funciones que hemos realizado):
    delete this.items[this.front];

    this.front++;
    return data;
  }

  //getSize: sirve para conocer el tamaño de la cola actualmente:
  getSize() {
    return this.end - this.front;
  }

  //isEmpty: sirve para devolver la información de si la cola está o no vacía
  isEmpty() {
    if (this.getSize() === 0) {
      return true;
    } else {
      return false;
    }
  }
  //PEEK: sirve para consultar el primer valor de la fila (sin sacarlo de la misma)
  peek() {
    if (this.getSize() === 0) {
      return null;
    }
    return this.items[this.front];
  }

  //PRINT: sirve para mostrar el elemento que está primero en la cola actualmente
  print() {
    if (this.getSize() === 0) {
      return null;
    }

    let result = '';
    for (let i = this.front; i < this.end; i++) {
      result += this.items[i] + ' ';
    }
    return result;
  }
}

//TESTS:
const queue = new Queue();
queue.enqueue('Antonia');
queue.enqueue('Manuela');
queue.enqueue('Carla');
queue.dequeue();
queue.dequeue();

console.log(queue.getSize());
console.log(queue.isEmpty());
console.log(queue.peek());
console.log(queue.print());

console.log(queue.items);
