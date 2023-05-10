class Sorter {
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        //Check for Array of Numbers - Only works on array of numbers (union operator restriction)
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        //Check for String - Only works on strings (union operator restriction)
        if (typeof this.collection === "string") {
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
console.log(sorter.collection);
sorter.sort();
console.log(`Sorted: ${sorter.collection}`);
