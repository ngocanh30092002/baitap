/**
 * Thử chạy code sau
 */
var secretPassword = 'coders.tokyo';
var readline = require('readline-sync');
do{
var result = readline.question('Nhập vào mật khẩu: ');
if (secretPassword===result){
  console.log("welcome!")
}else {
  console.log("wrong password")
}

} while (secretPassword != result)

/**
 * Viết đoạn chương trình yêu cầu người dùng nhập vào mật khẩu (để login vô máy tính chẳng hạn), nếu người dùng nhập sai, hiển thị ra "Wrong password", nhập đúng thì hiển thị ra "Welcome!"
 */