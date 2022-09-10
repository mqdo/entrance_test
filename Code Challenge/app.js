// mảng ký tự 16bit để ghép thành mã màu

const arrayOfColorFunctions = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];


// function tạo mã màu ngẫu nhiên

function newColorFind() {
  let randomColorString = "#";
  for (let x = 0; x < 6; x++) {
    let index = Math.floor(Math.random() * 16);
    let value = arrayOfColorFunctions[index];
    randomColorString += value;
  }
  return(randomColorString);
}

// function đổi màu nền khi nhấn nút

function changeColor() {
  let color = newColorFind();
  document.body.style.background = "";
  document.body.style.backgroundColor = color;
  hex.style.display = "";
  hex.innerHTML = color;
  grd.style.display = 'none';
}

// function copy mã màu vào clipboard khi nhấn nút

function copyText() {
  let color = "";
  if (hex.style.display != 'none') {
    color = hex.innerHTML;
  } else color = grd.innerHTML;
  navigator.clipboard.writeText(color).then(() => alert("Copied to clipboard: " + color));
}

// function tạo màu nền gradient khi nhấn nút

function gradientGen() {
  let deg = Math.floor(Math.random() * 360);
  let grad = "linear-gradient(" + deg + "deg, " + newColorFind() + ", " + newColorFind() + ")";
  grd.style.display = "";
  grd.innerHTML = grad;
  hex.style.display = 'none';
  document.body.style.background = grad;
}

// tạo sự kiện khi nhấn lần lượt ba nút sẽ chạy các function khác nhau

newColor.addEventListener("click", changeColor);
copy.addEventListener("click", copyText);
gradGen.addEventListener("click", gradientGen);

// lệnh để luôn đổi màu nền mỗi khi load trang

document.onload = changeColor();