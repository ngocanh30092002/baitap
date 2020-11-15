// Given an array of arrays, flatten them into a single array

/**
 * Example: 
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 * 
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */

function flatten(arr) {
    return arr.reduce(function(x,item1){
        return x.concat(item1);
    },[]);
    
    
    
    
}
