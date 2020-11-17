/** 
 * Viết hàm rightTriangle nhập vào 3 cạnh của một tam giác.
 * Cho biết đó có phải là tam giác vuông hay không? 
*/

function rightTriangle(a, b, c) {
    if (a<=0||b<=0||c<=0){
       return false;
   }
   else {
       if (a*a+b*b===c*c||a*a+c*c===b*b||b*b+c*c===a*a){
           return true;
       }
       else {
           return false
       }
   }
  }