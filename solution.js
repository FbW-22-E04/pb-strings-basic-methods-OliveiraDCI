// 1
const parkWalkStr = "I can walk in the park all day!";
const indexOfPark = parkWalkStr.indexOf("park");
console.log(parkWalkStr.substring(indexOfPark, indexOfPark + 4));

// 2
const helloStr = "Hello World";
const helloStrUppercase = helloStr.toUpperCase();
console.log(helloStrUppercase);

// 3
const earthlingsStr = "Hello Earthling";
const earthlingsStrLowercase = earthlingsStr.toLowerCase();
console.log(earthlingsStrLowercase);

// 4
const jsStr = "JavaScript";
const jsStrSlice = jsStr.slice(3, 6);
console.log(jsStrSlice);

// 5
const niceShoesStr = "nice shoes";
const checkForL = niceShoesStr.includes("l");
const checkForN = niceShoesStr.includes("n");
console.log("Contains letter l: ", checkForL, "Contains letter n: ", checkForN);

// 6
const oldStr = "word";
const newStr = oldStr[0] + oldStr + oldStr[0];
console.log(newStr);

// 7
const scritcherStr = "word";
const lastThreeChars = scritcherStr.slice(-3);
console.log(lastThreeChars.concat(scritcherStr, lastThreeChars));

// 8
const boogieNightsStr = "word";
const firstLetter = boogieNightsStr.slice(0, 1);
const lastLetter = boogieNightsStr.slice(-1);
console.log(lastLetter + boogieNightsStr.slice(1, -1) + firstLetter);

// 9
const firstName = "Oliveira";
const city = "Hamburg";
const job = "Programmer";
console.log(`My name is ${firstName}. I live in ${city} and I am a ${job}.`);

// 10
const foxStr = "the quick brown fox";
const capitalLetter = foxStr.slice(0, 1).toUpperCase();
const restLetters = foxStr.slice(1);
console.log(capitalLetter + restLetters);
