// Chương trình nhập vào một mảng các chuỗi
// trả về mảng mới với các chuỗi có độ dài lớn nhất

function allLongestStrings(inputArray) {
  const outputArray = [];
  let longest = 0;
  for (i=0; i < inputArray.length; i++) {
    if (inputArray[i].length >= longest) {
      longest = inputArray[i].length;
      outputArray.push(inputArray[i]);
    }
  }
  return(outputArray);
}