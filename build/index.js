"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
console.log("------Start-----");
//Init values from classes
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
const string = new CharactersCollection_1.CharactersCollection("DfwgESGS");
//Init Sorters
const sorterArr = new Sorter_1.Sorter(numbersCollection);
const sorterStr = new Sorter_1.Sorter(string);
//Log initial values
console.log(numbersCollection.data);
console.log(string.data);
//Call for sorting
sorterArr.sort();
sorterStr.sort();
//Log Sorted Values
console.log(`Sorted Array: ${numbersCollection.data}`);
console.log(`Sorted String: ${string.data}`);
