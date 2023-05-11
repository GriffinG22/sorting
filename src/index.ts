import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

console.log("------Start-----");
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
console.log(sorter.collection.data);
sorter.sort();
console.log(`Sorted: ${sorter.collection.data}`);
