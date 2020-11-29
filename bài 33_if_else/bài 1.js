/**
 * Chỉ sử dụng vòng lặp for và if else để hoàn thiện hàm tìm số lớn nhất trong 1 array
 */

function max(arr) {
    var current = arr[0];
  for(i=0;i<arr.length;i++){
      if (current<arr[i]){
      current=arr[i];
  }
  }
  return current;
}
