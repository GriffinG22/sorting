export class CharactersCollection {
  constructor(public data: string) {}

  get length() {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const charactersArr = this.data.split("");

    const leftHand = charactersArr[leftIndex];
    charactersArr[leftIndex] = charactersArr[rightIndex];
    charactersArr[rightIndex] = leftHand;

    this.data = charactersArr.join("");
  }
}
