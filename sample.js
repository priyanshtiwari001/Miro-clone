function print(x) {
  let arr = [];
  printHelp(x, arr);
  return arr;
}

function printHelp(x, arr) {
  if (x > 0) {
    printHelp(x - 1, arr);
    //process.stdout.write(x + " ");
    arr[x] = x;
  }
}

function main() {
  const x = 5;
  let arr = print(x);
  arr.forEach((element) => {
    process.stdout.write(element + " ");
  });
}
main();
