JS Basics
1:
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width-device-ratio, initial-scale=1.0">
        <title>Demo</title> 
    </head>
    <body>
        <script src="script.js" type="text/javascript"></script>
        <script>
            console.log("Hi Charan")
        </script>
    </body>
</html>
```
2:
```const v = 64;

console.log(`V=${v}`)
console.log("Hi Man","new",3)
console.error("Error")
console.warn("Warning")

// Single line Comment
/* Multiline Comments
Hello Man
*/```

3:
```const prompt = require("prompt-sync")()

const v = prompt("Type Something: ") // Returns a String Always
console.log(v)
// const prompt = require("prompt-sync")()

// const v = prompt("Type Something: ") // Returns a String Always
// console.log(v)
```

4:

```string "" '' ``
boolean true false
number 12.88 -9 10 0 
undefined can assign later 
null nothing
var helloWorld = "hello"
helloWorld = 'world'

// var can access anywhere

if(true){
    let y = 3
}
let x = 5
x = 7

const VELOCITY = 34
```
5:

```// only within block scoped
function tets(){
    console.log(x)
    let x = 'test'
    console.log(x)
}

tets()

/*cant access x without assigning in first line of a function when using let or const
but if I use var first will be undefined
*/
```
6: Arithmetic Operators:
```const x = 1
const y = "2"

console.log(x + y)
// + is a string concatanation operator is one of them is String
console.log(Number(y) + x)
console.log(x * y)
console.log(x / y)
console.log(x - y)

const a = "1234a"
const b = 2

console.log(parseInt(a) + b)

const c = "1234.3a"
const d = 2

console.log(parseFloat(c) + d)

console.log(Number(true) + x)

const f = 2345

console.log(f + "")
console.log(f.toString())

o/p:

12
3
2
0.5
-1
1236
1236.3
2
2345
2345
```
8: Comparison Operator

```/* == Loose equal
   === Strict Equal
   != loose not equal
   !== Strict not Equal
*/


9: Logical Operator

/*
&& Checks both side correct
|| Checks any one side is correct
! Flips the value
*/```

10: Conditional Statements

```// If Else 
if(true)
    console.log('Hello') //if one line no need for braces but only one line runs inside condition
else
    console.log('Hi')

//ternary Condition
const cond = 2 < 3 ? "Okay cool" : 'no'
console.log(cond)

//Switch Statement

const value = 3
switch (value) {
    case 3:
        console.log("3")
        break;
    case 4:
        console.log("4")
        break;
    default:
        console.log("none")
        break;
}
```
11: Arrays
```const arr =[2, 3, 4, 5, "Hi", true, [1, 3, 5]]
const arr2 = new Array(5)
const arr3 = Array.from("Hello hi o")
arr3[0] = 'y'

arr3[arr3.length + 5] = "test"
console.log(arr3)

arr3.push(4)
console.log(arr3)

arr3.pop()
console.log(arr3)

arr3.shift()
console.log(arr3)

arr3.unshift("new")
console.log(arr3)

console.log(arr3.lastIndexOf("o"))
console.log(arr3.includes("o"))

const arr4 = arr.concat(arr3)
console.log(arr4)

const arr5 = arr.join(" | ")
console.log(arr5)

const arr6 = arr.slice(1, 2)
console.log(arr6)


O/P:
PS C:\Users\chara\Desktop\JS> node .\script.js
[
  'y',
  'e',
  'l',
  'l',
  'o',
  ' ',
  'h',
  'i',
  ' ',
  'o',
  <5 empty items>,
  'test'
]
[
  'y',
  'e',
  'l',
  'l',
  'o',
  ' ',
  'h',
  'i',
  ' ',
  'o',
  <5 empty items>,
  'test',
  4
]
[
  'y',
  'e',
  'l',
  'l',
  'o',
  ' ',
  'h',
  'i',
  ' ',
  'o',
  <5 empty items>,
  'test'
]
[
  'e',
  'l',
  'l',
  'o',
  ' ',
  'h',
  'i',
  ' ',
  'o',
  <5 empty items>,
  'test'
]
[
  'new',
  'e',
  'l',
  'l',
  'o',
  ' ',
  'h',
  'i',
  ' ',
  'o',
  <5 empty items>,
  'test'
]
9
true
[
  2,           3,
  4,           5,
  'Hi',        true,
  [ 1, 3, 5 ], 'new',
  'e',         'l',
  'l',         'o',
  ' ',         'h',
  'i',         ' ',
  'o',         <5 empty items>,
  'test'
]
2 | 3 | 4 | 5 | Hi | true | 1,3,5
[ 3 ]
[ 3 ]
```
12: Arrays Structuring

```const [v, u] = [1, 2]
console.log(v, u)

const a = [1,2,3,4]
const b = [...a]

b.push("Hello")
console.log(a)
console.log(b)

const [n, ...m] = [1,2,3,4,5]
console.log(m)

const x = [1, 2, 3, 4]
const y = [1, 2, 3, 4,...x]

console.log(x, y)

O/P
PS C:\Users\chara\Desktop\JS> node .\script.js
1 2
[ 1, 2, 3, 4 ]
[ 1, 2, 3, 4, 'Hello' ]
[ 2, 3, 4, 5 ]
[ 1, 2, 3, 4 ] [
  1, 2, 3, 4,
  1, 2, 3, 4
]
PS C:\Users\chara\Desktop\JS> 
```
13: Do while:

```do {
    console.log("run")
    break
} while(true)

while(true){
    console.log("Jell")
    break
}

O/P
PS C:\Users\chara\Desktop\JS> node .\script.js
run
Jell
PS C:\Users\chara\Desktop\JS> 
```
14: For Loop

```const arr = [1, 3, 5]

for(let i = 1; i < arr.length; i++){
    console.log(arr[i])
}

const arr1 = "hello"
for(let value of arr1){
    console.log(value)
}


for(let [i, value] of arr.entries()){
    console.log(i, value)
}


O/P
PS C:\Users\chara\Desktop\JS> node .\script.js/
3
5
h
e
l
l
o
0 1
1 3
2 5
PS C:\Users\chara\Desktop\JS> 
```
15: Objects

```const obj = {
    name: "Charan",
    age: 20,
    sayHello: function(){
        return "hello"
    },
    carrer: {
        dept: "ECE",
        field: "CS"
    }
}

const obj2 = {
    hair: 'Black',
    arr: [1,2,3]
}

obj.newProp = [1,2]
const obj3 = {
    ...obj, ...obj2
}

obj.age = 21
obj["name"] = "Charankumar"

console.log(obj.sayHello())
console.log(obj.carrer)
console.log(obj.carrer.dept)
console.log(Object.values(obj))
delete obj.carrer


console.log(obj3)
for (let key in obj){
    console.log(key)
}

const {hair, name} = obj3
console.log(hair, name)

OP:
PS C:\Users\chara\Desktop\JS> node .\script.js/
hello
{ dept: 'ECE', field: 'CS' }
ECE
[
  'Charankumar',
  21,
  [Function: sayHello],
  { dept: 'ECE', field: 'CS' },
  [ 1, 2 ]
]
{
  name: 'Charan',
  age: 20,
  sayHello: [Function: sayHello],
  carrer: { dept: 'ECE', field: 'CS' },
  newProp: [ 1, 2 ],
  hair: 'Black',
  arr: [ 1, 2, 3 ]
}
name
age
sayHello
newProp
Black Charan
PS C:\Users\chara\Desktop\JS> 
```
16: Set

```const set = new Set();
console.log(set.add(1))
console.log(set.delete(1))
console.log(set.has(1))
console.log(set.size)

set.clear()

const myset = [...set]

OP
PS C:\Users\chara\Desktop\JS> node .\script.js/
Set(1) { 1 }
true
false
0
PS C:\Users\chara\Desktop\JS> 
```
17: Map

```const myMap = new Map();
const numberMap = new Map([[1, 'one'], [2, 'two']]);

myMap.set(4,"four")
//myMap.delete(4)
myMap.get(1)

for(const key of myMap.keys()){
    console.log(key)
}
for(const values of myMap.values()){
    console.log(values)
}

const arr = Array.from(myMap)

console.log(myMap)
myMap.clear()
console.log(myMap)

OP:
PS C:\Users\chara\Desktop\JS> node .\script.js
4
four
Map(1) { 4 => 'four' }
Map(0) {}
PS C:\Users\chara\Desktop\JS> 
```
18: Error Handling

```try {
    riskyFunction();
} catch (error) {
    console.error("An error Occured",error.message);
} finally {
    console.log("Code go here");
}

throw new Error("This is not good!")

OP:

PS C:\Users\chara\Desktop\JS> node .\script.js
An error Occured riskyFunction is not defined
Code go here
C:\Users\chara\Desktop\JS\script.js:9
throw new Error("This is not good!")
^

Error: This is not good!
    at Object.<anonymous> (C:\Users\chara\Desktop\JS\script.js:9:7)
    at Module._compile (node:internal/modules/cjs/loader:1730:14)
    at Object..js (node:internal/modules/cjs/loader:1895:10)
    at Module.load (node:internal/modules/cjs/loader:1465:32)
    at Function._load (node:internal/modules/cjs/loader:1282:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
    at node:internal/main/run_main_module:36:49

Node.js v22.17.0
PS C:\Users\chara\Desktop\JS> 
```
19: Functions 
```// function gret(name, age=12){
//     console.log(name,age)
// }

// // const greet = function(name){

// // }

// const greet = (name) => {
//     return () => name + "!"
// }

// console.log(greet)

function addNums(...nums){
    return [1,2]
}
console.log(addNums)
```
20: Map, Filter, Reduce

```const nums = [1, 2, 3, 4];
const double = nums.map((num) => num*2);
console.log(double); //[ 2, 4, 6, 8 ]

const users = [
    { name: "Alice", age: 25},
    { name: "Bob", age: 30},
];

const names = users.map((user) => user.name);
console.log(names); // [ 'Alice', 'Bob' ]

const nums2 = [1, 2, 3, 4];
const sum = nums2.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10

const nums1 = [1, 2, 3, 4, 5];
const even = nums1.filter(num => num%2 === 0);
console.log(even); // [ 2, 4 ]

```
21: This Keyword and scope 

```const person1 = {
    name: "Charan",
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
};

person1.greet(); //Hello, my name is Charan


const person2 = {
    name: "Charan",
    greet: () => {
        console.log(`Hello, my name is ${this.name}`);
    },
};

person2.greet(); //Hello, my name is undefined
```
22: Promises 

```const myPromise = new Promise((resolve, reject) => {
  // Asynchronus Operation
  if (false) {
    resolve("value"); // Fulfuill the promise
  } else {
    reject("error");
  }
});

myPromise.then((value) => {
  console.log(value)
}).catch((value) => {
  console.log(value)
}).finally(() => {
  console.log("always")
})

PS C:\Users\chara\Desktop\JS> node .\script.js
error
always
PS C:\Users\chara\Desktop\JS> 
```
