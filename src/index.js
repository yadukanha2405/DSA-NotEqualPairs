import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

function finPair(arr) {
  let pair = 0;
  let inxArr = new Array(10).fill(0);
  for (let i = 0; i < arr.length; i++) {
    var temp = arr[i];
    inxArr[temp]++;
  }

  let j = 1;
  let k = j + 1;

  while (k < inxArr.length) {
    if (inxArr[j] != 0 && inxArr[k] != 0 && j != k) {
      pair++;
    }
    k++;
  }
  return pair;
}

let arr = [2, 1, 3, 2, 1];
let result = finPair(arr);
console.log(result);
