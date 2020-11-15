
function countOccurrences(arr) {

    return arr.reduce(function(rong, item1) {
      if (rong[item1]) {
        rong[item1] += 1;
      } else {
        rong[item1] = 1;
      }
      return rong;
  
    }, {});
  
  }
  