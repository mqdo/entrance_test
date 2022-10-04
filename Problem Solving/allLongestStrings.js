// Chương trình nhập vào một mảng các chuỗi
// trả về mảng mới với các chuỗi có độ dài lớn nhất

// cách 1: dùng function và vòng lặp for

function allLongestStrings1(inputArray) {
  const outputArray = [];
  let longest = 0;
  for (i=0; i < inputArray.length; i++) {
    if (inputArray[i].length >= longest) {
      longest = inputArray[i].length;
      outputArray.push(inputArray[i]);
    }
  }
  return(outputArray);
};

// cách 2: dùng arrow function và hai vòng lặp forEach lần lượt

const allLongestStrings2 = inputArray => {
  const outputArray = [];
  let longest = 0;
  inputArray.forEach(element => {
    if (element.length > longest) {
      longest = element.length;
    }
  });
  inputArray.forEach(element => {
    if (element.length === longest) {
      outputArray.push(element);
    }
  });
  return outputArray;
}

