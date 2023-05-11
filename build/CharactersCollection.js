"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const charactersArr = this.data.split("");
        const leftHand = charactersArr[leftIndex];
        charactersArr[leftIndex] = charactersArr[rightIndex];
        charactersArr[rightIndex] = leftHand;
        this.data = charactersArr.join("");
    }
}
exports.CharactersCollection = CharactersCollection;
