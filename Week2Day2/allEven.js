var allEven = function(array) {
    for (i=0; i<array.length; i+=1) {
        if (array[i]%2 !== 0) {
            return false
        }
    }return true
}
