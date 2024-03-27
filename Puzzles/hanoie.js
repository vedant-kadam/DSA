let fromArr = [1, 2, 3];
let AuxArr = [];
let desArr = [];

function hanoie(n, from, des, aux) {
  if (n == 0) {
    // des.push(from.pop());
    return;
  }
  console.log("-------------------------------------------------");
  console.log("-------------------------------------------------");
  console.log(fromArr, AuxArr, desArr, "before call 1");

  hanoie(n - 1, from, aux, des);
  console.log(fromArr, AuxArr, desArr, "after call 1");
  console.log("-------------------------------------------------");

  des.push(from.pop());

  console.log(fromArr, AuxArr, desArr, "after call 1 swap");
  console.log("-------------------------------------------------");

  hanoie(n - 1, aux, des, from);

  console.log(fromArr, AuxArr, desArr, "after call 2");
  console.log("-------------------------------------------------");
}
hanoie(3, fromArr, desArr, AuxArr);
console.log(fromArr, AuxArr, desArr);

// function towerOfHanoi(source, target, auxiliary, n) {
//   if (n === 1) {
//     const disk = source.pop();
//     console.log(`Move disk ${disk} from rod ${source} to rod ${target}`);
//     target.push(disk);
//     return;
//   }
//   towerOfHanoi(source, auxiliary, target, n - 1);
//   const disk = source.pop();
//   console.log(`Move disk ${disk} from rod ${source} to rod ${target}`);
//   target.push(disk);
//   towerOfHanoi(auxiliary, target, source, n - 1);
// }

// // Example usage:
// const sourceArray = [3, 2, 1];
// const targetArray = [];
// const auxiliaryArray = [];

// towerOfHanoi(sourceArray, targetArray, auxiliaryArray, sourceArray.length);

// console.log("Source Array after completion:", sourceArray);
// console.log("Target Array after completion:", targetArray);
// console.log("Auxiliary Array after completion:", auxiliaryArray);
