// Chương trình nhập mảng chứa cân nặng của mọi người
// Trả về mảng chứa tổng cân nặng của 2 team

function alternatingSums(inputArray) {
  const outputArray = [];
  let weight1 = 0;
  let weight2 = 0;
  for (i = 0; i < inputArray.length; i++) {
    if (i === 0 || i%2 === 0) {
      weight1 += new Number(inputArray[i]);
    } else {
      weight2 += new Number(inputArray[i]);
    }
  }
  outputArray.push(weight1, weight2);
  return outputArray;
}