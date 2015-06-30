var sum = 0;
var string = Math.pow(2, 50).toString();
for (i=0; i < string.length; i+=1) {
    sum = sum+Number(string[i]);
}
console.log(sum)
