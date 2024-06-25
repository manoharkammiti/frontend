/*
let s1 = new String("HelloJavaScript");
//console.log(s1.search(/j.*t/i));
//console.log(s1.match(/j.*a/i)[0]);
var x = s1.replace(/[A-Z]/g,"");
console.log(x);
*/
// - digits
/*
var pattern = /\d/g;
var text = "This is 25 Rupees";
var match = text.match(pattern);
console.log(match);
*/
// - Non - digit
/*
var pattern = /\D/g;
var text = "This is 25 Rupees";
var match = text.match(pattern);
console.log(match);
*/
//- spaces
/*
var pattern = /\s/g;
var text = "This is 25 Rupees";
var match = text.match(pattern);
console.log(match);
*/
//- Non - spaces
/*
var pattern = /\S/g;
var text = "This is 25 Rupees";
var match = text.match(pattern);
console.log(match);
*/
// - alpahnumaric + underscore
/*
var pattern = /\w/g;
var text = "This is 25 Rupees, the price is $_25";
var match = text.match(pattern);
console.log(match);
*/
// - non alpahnumaric + underscore
/*
var pattern = /\W/g;
var text = "This is 25 Rupees, the price is $_25";
var match = text.match(pattern);
console.log(match);
*/
// - Word Boundary
/*
var pattern = /\bprice\b/gi;
var text = "This price of apple is 25 rupees and Price of mango is 20 rupees";
var match = text.match(pattern);
console.log(match);
*/

//Meta Character

// - . dot
/*
var pattern = /h.t/g;
var text = "I have a hot hat haat";
var match = text.match(pattern);
console.log(match);
*/
// ^ - caret
/*
var pattern = /^I/gi;
var text = "i have a hot hat haat";
var match = text.match(pattern);
console.log(match);
*/
// - $ dollar
/*
var pattern = /Haat$/gi;
var text = "i have a hot hat haat";
var match = text.match(pattern);
console.log(match);
*/
// - * astrick
var pattern = /ab*c/gi;
var text = "abbbfhgjujyftc";
var match = text.match(pattern);
console.log(match);
// - + plus
/*
var pattern = /a+c/gi;
var text = "abc ac axc";
var match = text.match(pattern);
console.log(match);
*/
// ? Question mark
/*
var pattern = /colors?/gi;
var text = "color colors colorsss coloss";
var match = text.match(pattern);
console.log(match);
*/
// | - pipe
/*
var pattern = /hat | mat/gi;
var text = "hat bat cat mat hat bat mat";
var match = text.match(pattern);
console.log(match);
*/
// - {} curly braces
/*
var pattern = /\d{3}-\d{3}-\d{4}/gi;
var text = "789-357-0611   990-261-9521";
var match = text.match(pattern);
console.log(match);
*/
// - [] braces
/*
var pattern = /[ch]at/gi;
var text = "cat mat bat hat";
var match = text.match(pattern);
console.log(match);
*/

//Example
/*
var pattern = /ab+c/g;
var text = "avc"; //[a,ab,abc,abcd]
var match = text.match(pattern);
console.log(match);
*/

//Objects
//Normal Method
/*
var person1 = {
    name : "Sai",
    age : 80,
    height : 5.78
}
console.log(person1);
//Accessing
console.log(person1.name);
//Add an element
person1.course = "CSE";
console.log(person1);
//Delete a value
delete person1.height;
console.log(person1);
//Methods
console.log(Object.keys(person1));
console.log(Object.values(person1));
console.log(Object.entries(person1));

//Constroctor obj
var person2 = new Object();
person2.name = "vijay";
person2.age = 50;
person2.height = 6.7;
console.log(person2)
//Accessing
console.log(person2["name"]);
//Add an element
person2["branch"] = "FSJ";
console.log(person2)
//Delete an element
delete person2["height"];
console.log(person2);
*/