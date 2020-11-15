function sortNumber(arr) {
    var result = arr.sort(function (a, b){
        return a-b;
    });
    return result;
}