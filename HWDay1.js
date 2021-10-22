let arr = ["   |   |   ", "-----------"];

for (let i = 1; i <= 11; i++) {
  if (i % 3 == 0) {
    console.log(arr[1]);
  } else {
    console.log(arr[0]);
  }
}
