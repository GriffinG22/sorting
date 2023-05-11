//import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

console.log("------Start-----");

console.log("Numbers Array");
const numberCollection = new NumbersCollection([10, 3, -5, 0]);
console.log(numberCollection.data);
numberCollection.sort();
console.log(`Sorted: ${numberCollection.data}`);
console.log("-----------------");

console.log("Characters");
const charactersCollection = new CharactersCollection("DfwgESGS");
console.log(charactersCollection.data);
charactersCollection.sort();
console.log(`Sorted: ${charactersCollection.data}`);
console.log("-----------------");

console.log("Linked List");
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(24);

linkedList.print();
linkedList.sort();

console.log(`Sorted:`);
linkedList.print();
console.log("-----------------");

// //Init values from classes
// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const string = new CharactersCollection("DfwgESGS");
// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(24);

// //Init Sorters
// const sorterArr = new Sorter(numbersCollection);
// const sorterStr = new Sorter(string);
// const sorterLL = new Sorter(linkedList);

// //Log initial values
// console.log(numbersCollection.data);
// console.log(string.data);
// linkedList.print();

// //Call for sorting
// sorterArr.sort();
// sorterStr.sort();
// sorterLL.sort();

// //Log Sorted Values
// console.log(`Sorted Array: ${numbersCollection.data}`);
// console.log(`Sorted String: ${string.data}`);
// console.log(`Sorted LL:`);
// console.log(linkedList.print());
