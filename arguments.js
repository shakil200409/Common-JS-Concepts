function sum(a, b, c) {
    const args = [...arguments];
    console.log(args);
    //   console.log(arguments);
  const result = a + b + c;
  return result;
}

const total = sum(15, 12, 37, 20, 36, 25, 75, 96);
// console.log(total);
// console.log(typeof sum);
console.log(sum.length);