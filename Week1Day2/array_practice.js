var grades = [7,8,3,6,10,9,8];

var average = function(array) {
    var sum = 0;
    for (i = 0; i < array.length; i+=1) {
        sum = sum + array[i];
    }
    return (sum/array.length)
}

var maximum = function(array) {
    var max = array[0];
    for (i = 1; i < array.length; i+=1) {
        if (array[i] > max) {
            max = array[i]
        }
    }
    return max
}

var minimum = function(array) {
    var min = array[0];
    for (i = 0; i < array.length; i+=1) {
        if (array[i] < min) {
            min = array[i]
        }
    }
    return min
}

console.log("Class average: ", average(grades));
console.log("Class maximum: ", maximum(grades));
console.log("Class minimum: ", minimum(grades));
