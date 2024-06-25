
var re = new RegExp("j.*t",);
// console.log(re.test("Javascript"));
// console.log(re.test("javascript"));
console.log(re.exec("Javascript javascript javascript")[0]);

/*
var re = /j.*t/i;
console.log(re.test("javascript"));
console.log(re.test("Javascript"));\
*/