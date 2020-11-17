/* 
  Viết hàm positiveNumber để chuyển các số âm trong một mảng thành các số dương.
  Yêu cầu sử dụng Math Object
*/

function positiveNumber(arr) {
    return arr.map(function(x){
        if (x<0){
            return -x;
        }
        else {
            return x;
        }
    });
   }
   