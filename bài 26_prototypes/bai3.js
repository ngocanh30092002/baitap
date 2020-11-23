/**
 * Chạy đoạn code phía dưới và giải thích kết quả
 * Link run code: https://repl.it/@maithedung/DroopyPaltryKeygenerator
 */

function answer() {
    return `
    // khi ta sử dụng prototype thì sẽ chia sẻ thông tin cho những biến được khai báo từ "new" vì do cùng chia sẻ từ một nguồn nên là lệnh so sánh '===' sẽ là true
    `
  }
  
  function Person(name, age) {
    this.type = "person";
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.sing = function() {
    console.log(`Là lá la...`);
  };
  
  const mrThinh = new Person("Pham Thinh", 33);
  const mrDung = new Person("The Dung", 19);
  
  mrThinh.sing === mrDung.sing
  