/**
 * Sử dụng vòng lặp while tính tổng các số lẻ nhỏ hơn x.
 */

function sum(x) {
    var i=1;
    var tong=0;
    while (i<x){
        tong += i;
        i += 2;
    }
    return tong;
} 
