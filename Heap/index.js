class Heap {
  constructor() {
    this.heap = [null];
  }

  swap(a, b) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  // 올라가기 부모랑 바꿈
  push(value) {
    this.heap.push(value);
    let current = this.heap.length - 1;
    let parent = Math.floor(current / 2);

    while (parent !== 0 && this.heap[parent] > value) {
      // this.swap(parent, current);
      const temp = this.heap[parent];
      this.heap[parent] = value;
      this.heap[current] = temp;
      current = parent;
      parent = Math.floor(current / 2);
    }
  }

  // 내려가기 자식이랑 바꿈
  pop() {
    if (this.heap.length === 1) return null;
    if (this.heap.length === 2) return this.heap.pop();
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let current = 1;
    let left = 2;
    let right = 3;

    while (
      this.heap[current] > this.heap[left] ||
      this.heap[current] > this.heap[right]
    ) {
      if (this.heap[left] > this.heap[right]) {
        this.swap(current, right);
        current = right;
      } else {
        this.swap(current, left);
        current = left;
      }

      left = current * 2;
      right = current * 2 + 1;
    }
    return returnValue;
  }
}

const heap = new Heap();
heap.push(10);
heap.push(20);
heap.push(30);
heap.push(50);
heap.push(1);

console.log(heap.heap);

heap.pop();
heap.pop();
heap.pop();

console.log(heap.heap);
