// Task1
function concat(str1: string, str2: string): string {
  return str1 + str2;
}
concat('Hello ', 'World'); // -> Hello World;

// Task2
interface myType {
  howIDoIt: string;
  someArray: (string | number)[];
}
interface IMyHometask extends myType {
  withData: myType[];
}

const myHometask: IMyHometask = {
  howIDoIt: 'I Do It Wel',
  someArray: ['string one', 'string two', 42],
  withData: [
    {
      howIDoIt: 'I Do It Wel',
      someArray: ['string one', 23],
    },
  ],
};
console.log(myHometask);

/// Task3
interface MyArray<T> {
  [N: number]: T;

  reduce<U>(fn: (acc: U, cur: T) => U, init: U): U;
}
const arr: MyArray<number> = [1, 2, 3];
const sum = (a: number, b: number) => a + b;
arr.reduce(sum, 1);
