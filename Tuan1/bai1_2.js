Mark = {
    mass: 78,
    height: 1.69,
}
John = {
    mass: 92,
    height: 1.95,
}
//
function calculateBMI(mass, height) {
    // Kiểm tra nếu mass hoặc height là không hợp lệ
    if (mass <= 0 || height <= 0) {
      return "Không hợp lệ";
    }
  
    // Tính BMI theo công thức
    var bmi = mass / (height * height);
  
    return bmi;
  }
  
  // Sử dụng hàm để tính BMI cho Mark và John
  var markBMI = calculateBMI(Mark.mass, Mark.height);
  var johnBMI = calculateBMI(John.mass, John.height);
  
  // In kết quả
  console.log("BMI của Mark là: " + markBMI);
  console.log("BMI của John là: " + johnBMI);

//  Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
if (markBMI > johnBMI) {

    console.log(`BMI của Mark là: ${markBMI} cao hơn BMI của John là: ${johnBMI}`);
  } else {
    console.log(`BMI của John là: ${johnBMI} cao hơn BMI của Mark là: ${markBMI}`);
  }


