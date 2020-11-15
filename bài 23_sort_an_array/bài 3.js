function lengthSort(arr) {
    return arr.sort(function (a, b){
        return a.length - b.length;
    });
}