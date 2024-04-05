const userNumber = parseInt(prompt("dimmi un numero"))

let arr = []

for (i = 0; i < userNumber + 1; i++) {
    arr = [(Math.floor(Math.random() * 100) + 1),(Math.floor(Math.random() * 100) + 1),(Math.floor(Math.random() * 100) + 1),(Math.floor(Math.random() * 100) + 1),(Math.floor(Math.random() * 100) + 1),(Math.floor(Math.random() * 100) + 1),(Math.floor(Math.random() * 100) + 1),(Math.floor(Math.random() * 100) + 1),(Math.floor(Math.random() * 100) + 1),(Math.floor(Math.random() * 100) + 1),(Math.floor(Math.random() * 100) + 1)];
    console.log(arr);
}