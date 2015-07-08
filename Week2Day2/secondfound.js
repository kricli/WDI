var secondFound = function(array,elem) {
    array[array.indexOf(elem)] = array[array.indexOf(elem)-1]
    b = array.indexOf(elem)
    array[array.indexOf(elem)-1] = elem
    return b
}
