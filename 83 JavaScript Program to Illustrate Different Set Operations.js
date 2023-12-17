
let setA = new Set([1, 2, 3]);
let setB = new Set([3, 4, 5]);

let union = new Set(setA);
for (let element of setB) {
  union.add(element);
}

let intersection = new Set();
for (let element of setA) {
  if (setB.has(element)) {
    intersection.add(element);
  }
}

let difference = new Set(setA);
for (let element of setB) {
  difference.delete(element);
}

let subset = true;
for (let element of setB) {
  if (!setA.has(element)) {
    subset = false;
    break;
  }
}

console.log("union:");
console.log(union);

console.log("intersection:");
console.log(intersection);

console.log("difference:");
console.log(difference);

console.log("subset:");
console.log(subset);




