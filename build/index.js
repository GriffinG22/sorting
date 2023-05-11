"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
console.log("------Start-----");
//Init values from classes
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
const string = new CharactersCollection_1.CharactersCollection("DfwgESGS");
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(24);
//Init Sorters
const sorterArr = new Sorter_1.Sorter(numbersCollection);
const sorterStr = new Sorter_1.Sorter(string);
const sorterLL = new Sorter_1.Sorter(linkedList);
//Log initial values
console.log(numbersCollection.data);
console.log(string.data);
linkedList.print();
//Call for sorting
sorterArr.sort();
sorterStr.sort();
sorterLL.sort();
//Log Sorted Values
console.log(`Sorted Array: ${numbersCollection.data}`);
console.log(`Sorted String: ${string.data}`);
console.log(`Sorted LL:`);
console.log(linkedList.print());
