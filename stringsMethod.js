//1️⃣ Basic Properties
let str = "javascript";

console.log(str.length)

//2️⃣ Accessing Characters
let hlw = "Hello";

console.log(hlw[0]);
console.log(hlw.charAt(0))
console.log(hlw.charCodeAt(0))

//3️⃣ Searching
let loveScript = "I love JavaScript";

console.log(loveScript.indexOf("love"))
console.log(loveScript.lastIndexOf("a"))
console.log(loveScript.includes("Java"))
console.log(loveScript.startsWith("I"))
console.log(loveScript.endsWith("Script"))

//4️⃣ Extracting
let lang = "Javascript";

console.log(lang.slice(0, 4))
console.log(lang.substring(0, 4))
console.log(lang.substr(0, 4))

//5️⃣ Modifying
let hlwWorld = "hello world";

console.log(hlwWorld.toUpperCase());
console.log(hlwWorld.toLowerCase());
console.log(hlwWorld.trim());
console.log(hlwWorld.trimStart());
console.log(hlwWorld.trimEnd());

//6️⃣ Replacing
let java = "I like Java";

console.log(java.replace("Java", "Javascript"))
console.log(java.replaceAll('a', "A"))

//7️⃣ Splitting & Joining
let fruits = "apple, banana, mango";

let arrFruits = fruits.split(",");

console.log(arrFruits)
console.log(arrFruits.join(" - "))

//8️⃣ Concatenation
let str1 = "Hello";
let str2 = "World";

console.log(str1.concat(" ", str2));

//9️⃣ Padding
let five = "5";

console.log(five.padStart(3, "0"));
console.log(five.padEnd(3, "0"));

//🔟 Repeat
let ha = "Ha";

console.log(ha.repeat(3))

//1️⃣1️⃣ Search with Regex
let loveJava = "I love Javascript"

console.log(loveJava.match(/love/)); 
console.log(loveJava.matchAll(/a/g)); 
console.log(loveJava.search(/Script/)); 