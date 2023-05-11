import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

console.log("------Start-----");

//Init values from classes
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const string = new CharactersCollection("DfwgESGS");

//Init Sorters
const sorterArr = new Sorter(numbersCollection);
const sorterStr = new Sorter(string);

//Log initial values
console.log(numbersCollection.data);
console.log(string.data);

//Call for sorting
sorterArr.sort();
sorterStr.sort();

//Log Sorted Values
console.log(`Sorted Array: ${numbersCollection.data}`);
console.log(`Sorted String: ${string.data}`);
