var sum = 0
for (i = 1; i < 100; i +=1) {
    if (i%3===0 || i%5===0){
        sum = sum+i;
    }
}
console.log(sum)
