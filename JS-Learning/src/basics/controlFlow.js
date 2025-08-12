// CONTROL FLOW IN JAVASCRIPT
// -------------------------
// if, else, else if
let score = 85;
if (score >= 90) {
    console.log("A grade");
} else if (score >= 80) {
    console.log("B grade");
} else {
    console.log("C grade");
}

// switch-case
let fruit = "apple";
switch (fruit) {
    case "apple":
        console.log("Apple selected");
        break;
    case "banana":
        console.log("Banana selected");
        break;
    default:
        console.log("Other fruit");
}

// Ternary operator
let isMember = true;
let price = isMember ? 10 : 20;
console.log(price);

// Loops
for (let i = 0; i < 3; i++) {
    console.log("for loop", i);
}
let j = 0;
while (j < 3) {
    console.log("while loop", j);
    j++;
}
let k = 0;
do {
    console.log("do-while loop", k);
    k++;
} while (k < 3);

// for...in (object properties)
let obj = {a:1, b:2};
for (let key in obj) {
    console.log(key, obj[key]);
}
// for...of (iterables)
let arr = [10, 20, 30];
for (let value of arr) {
    console.log(value);
}

// break, continue
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    if (i === 4) break;
    console.log(i);
}