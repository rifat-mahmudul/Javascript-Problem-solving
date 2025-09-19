//1️⃣ Creating Array
let arr = [1, 2, 3];
let arr2 = new Array(4, 5, 6);

// console.log(arr, arr2)

//2️⃣ Basic Info
let arrLength = [10, 20, 30];

// console.log(arrLength.length);
// console.log(arrLength[0]);

//3️⃣ Add / Remove Elements
let fruitsArr = ["apple", "banana"];

fruitsArr.push("mango"); // ["apple","banana","mango"]  (add at end)
fruitsArr.pop(); // ["apple","banana"] (remove last)

fruitsArr.unshift("grape"); // ["grape","apple","banana"] (add at start)
fruitsArr.shift(); // ["apple","banana"] (remove first)

//4️⃣ Merging & Copying
let a = [1, 2];
let b = [3, 4];

// console.log(a.concat(b));  // [1,2,3,4]
// console.log([...a, ...b]); // [1,2,3,4] (spread operator)

let c = a.slice(); // shallow copy
// console.log(c); // [1,2]

//5️⃣ Slicing & Splicing
let arr3 = [1, 2, 3, 4, 5];

// console.log(arr3.slice(0, 3))
arr3.splice(2, 3, 99);

// console.log(arr3) // [1,2,99,4,5] (remove/replace elements in place)

//6️⃣ Searching
let arr4 = [10, 20, 30, 40];

// console.log(arr4.indexOf(20))
// console.log(arr4.lastIndexOf(30))
// console.log(arr4.includes(40))

//7️⃣ Finding Elements
let nums = [5, 12, 8, 130, 44];

// console.log(nums.find(n => n > 55))
// console.log(nums.findIndex(n => n > 44))
// console.log(nums.some(n => n > 44))
// console.log(nums.every((n) => n > 0));

//8️⃣ Transforming
let nums2 = [1, 2, 3, 4];

let doubled = nums2.map((n) => n * 2);
let evens = nums2.filter((n) => n % 2 === 0);
let sum = nums2.reduce((a, b) => a + b, 0);
let rightSun = nums2.reduceRight((a, b) => a + b, 0);

// console.log(doubled);
// console.log(evens);
// console.log(sum);
// console.log(rightSun);

//9️⃣ Sorting
let nums3 = [3, 1, 4, 2];

const ascending = nums3.sort((a, b) => a - b);
const descending = nums3.sort((a, b) => b - a);
const reverse = nums3.reverse();

// console.log(nums3.sort())
// console.log(ascending);
// console.log(descending)
// console.log(reverse);


//🔟 Joining
let arr5 = ["a","b","c"];

console.log(arr5.join("-")); // "a-b-c"
console.log(arr5.toString()); // "a,b,c"

//1️⃣1️⃣ Fill
let arr6 = [1,2,3,4];

arr.fill(0, 1, 3);
console.log(arr); // [1,0,0,4]

//1️⃣2️⃣ Flat & FlatMap
let arr7 = [1,[2,[3,4]]];

console.log(arr.flat());      // [1,2,[3,4]]
console.log(arr.flat(2));     // [1,2,3,4]

let numsFlat = [1,2,3];
console.log(numsFlat.flatMap(x => [x, x*2])); // [1,2,2,4,3,6]


//1️⃣3️⃣ From & Of
console.log(Array.from("hello")); // ["h","e","l","l","o"]
console.log(Array.from([1,2,3], x => x * 2)); // [2,4,6]

console.log(Array.of(1,2,3)); // [1,2,3]


//1️⃣4️⃣ Iteration\
let arr8 = [10,20,30];

arr8.forEach(x => console.log(x)); 
// 10,20,30

for (let x of arr8) console.log(x); 
// 10,20,30

for (let i in arr8) console.log(i, arr[i]); 
// 0 10, 1 20, 2 30
