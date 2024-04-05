const userNumber = parseInt(prompt("dimmi un numero"))


for (i = 0; i < userNumber + 1; i++) {
  let newArray = generateArray();
  console.log(newArray);
  printArray(newArray);
  console.log("stampo un array");
}