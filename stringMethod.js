
// strings and string methods 

// use string in single qotues. if you want double qutoes in middle of string
let str1 = 'my "family" is my motivation '
console.log(str1);

// string in double qotues. if you want single qutoes in middle of string
let str2 = "this is devi's code"
console.log(str2);

//  + is used as concatenation in strings
let name = "devi"
let greeting = "good morning"
console.log(name  +   greeting);

// template literals (you can use both single and double qutoes in template)
let temp = `${name} is a good girl  and she say's like ${str1}`
console.log(temp);

// to find length of string
let len1 =  name.length;
console.log(`length of ${name} is ${len1}`);

// escape Sequence character
console.log("hello world \n devi");  // next line
console.log("hello\ti am\tdevi");    //horizontal space

// 2nd way to create string using new keyword
let flower = new String('rose , lotus , jasmine');
console.log(flower);  

//  creating string
let testing = "this is a string";
console.log(testing);

// finding the postion of the string
// 1st occurance of the string index is displayed useing .indexOf
let postion = testing.indexOf("is");
console.log(`postion of "is" in string is ${postion} `);

postion = testing.indexOf("a");
console.log(`postion of "a" in string is ${postion} `);

// to find index of string of  last  occurance
postion = testing.lastIndexOf("is");
console.log(`postion of "is" in string last occurance is ${postion} `);

// substring from a string

// .slice method used to slice the string into substring.  -->>  .slice(starting , ending);
//slice can also take negative values
let substr = testing.slice(0, 6);
// stating from 0 and ending at 6-1= 5 and space is aslo printed
console.log(" substring  of a string is ----> " + substr);

// other way to slice the string
// substr and substring
let substr2 = testing.substring(1, 7); // .substring(starting from , ending at)
console.log(substr2);

let substr3 = testing.substr(1, 4); // .substr(starting from , length )
console.log(substr3);

// to replace substring from a string
let replace = testing.replace("string", "devi"); // .replace('old-substring' , 'new-substring');
console.log(testing);
console.log(replace);

// uppercase and lowercase of string
console.log(testing.toUpperCase());

console.log(testing.toLowerCase());

// concatination of two strings
let newstr = testing.concat(" adding new string");
console.log(newstr);

// .trim method is used to remove whitespace from starting and ending
let strWithSpace = "   i      am   devi   kumavath                         ";
console.log(strWithSpace);
console.log(strWithSpace.trim());

// extracting character from string

// .charAt(index);  display string at that index
let char = testing.charAt(6);
console.log(char);

// .charcodeAt(index); display assci value of that string
let charcode = testing.charCodeAt(6);
console.log(charcode);


console.log(testing[2]);