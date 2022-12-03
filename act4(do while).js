let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 500);

console.log(result);
// expected result: "12345"