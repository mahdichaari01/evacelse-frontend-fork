interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  empty(): boolean;
  clear(): void;
}
export default class Stack<T> implements IStack<T> {
  private list: T[] = [];
  push(item: T): void {
    this.list.push(item);
  }
  pop(): T | undefined {
    return this.list.pop();
  }
  peek(): T | undefined {
    return this.list[this.list.length - 1];
  }
  empty(): boolean {
    return this.list.length === 0;
  }
  clear(): void {
    this.list = [];
  }
}
