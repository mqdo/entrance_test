// Chương trình nhập mảng chứa cân nặng của mọi người
// Trả về mảng chứa tổng cân nặng của 2 team

// cách 1: dùng function và vòng lặp forEach

function alternatingSums1(inputArray) {
  const outputArray = [];
  let weight1 = 0;
  let weight2 = 0;
  inputArray.forEach (element => {
    if (
      inputArray.indexOf(element) === 0 ||
      inputArray.indexOf(element) % 2 === 0
    ) {
      weight1 += element;
    } else {
      weight2 += element;
    }
  });
  outputArray.push(weight1, weight2);
  return outputArray;
};

// cách 2: dùng arrow function và vòng lặp while với i nhảy bước

const alternatingSums2 = inputArray => {
  const outputArray = [];
  let weight1 = 0;
  let weight2 = 0;
  let i = 0;
  while (i + 1 <= inputArray.length) {
    weight1 += inputArray[i];
    inputArray[i+1] && (weight2 += inputArray[i+1]);
    i = i + 2;
  }
  outputArray.push(weight1, weight2);
  return outputArray;
};