var num1 = 1;
var num2 = 1;
var newnum = 0;
var sum = 0;
while (newnum <= 4000000) {
    newnum = num1+num2;
    if (newnum%2 === 0 && newnum <= 4000000) {
        sum = sum + newnum;
    }
    num1 = num2;
    num2 = newnum;
}
console.log(sum)
