/**
 * Chạy đoạn code phía dưới và giải thích kết quả
 * Link run code: https://repl.it/@maithedung/FarflungIdioticExabyte
 */

function answer() {
    return `
    // ta xét hàm mrThinh trước . đầu tiên nó sẽ chạy hàm function và console.log thì this.sing được lưu trữ tại một điểm lưu trữ
    tiếp đến mrDung . đầu tiên nó cũng chạy hàm function sau đó đến console.log thì this.sing của mrDung sẽ được lưu trữ tại 1 điểm khác 
    2 nơi lưu trữ này khác nhau ...chúng chỉ hiện thị giống nhau nhưng nó khác nơi lưu trữ
    
    `
  }
  
  function Person(name, age) {
    this.type = "person";
    this.name = name;
    this.age = age;
  
    this.sing = function() {
      console.log(`Là lá la...`);
    };
  
  }
  
  const mrThinh = new Person("Pham Thinh", 33);
  const mrDung = new Person("The Dung", 19);
  
  mrThinh.sing === mrDung.sing
  