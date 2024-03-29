// let img = document.getElementById("img");
// const imgSrc =
//   "https://image.shutterstock.com/image-vector/win-sign-colour-confetti-vector-260nw-322012643.jpg";
// img.src = imgSrc;

let box = document.querySelectorAll(".box");
let turn = "X";
let isGameOver = false;
box.forEach((e) => {
  e.innerHTML = "";
  e.addEventListener("click", () => {
    if (!isGameOver && e.innerHTML === "") {
      e.innerHTML = turn;
      cheakWin();
      cheakDraw();
      chengeTrun();
    }
  });
});
function chengeTrun() {
  if (turn === "X") {
    turn = "0";
    document.querySelector(".bg").style.left = "85px";
  } else {
    turn = "X";
    document.querySelector(".bg").style.left = "0px";
  }
}
function cheakWin() {
  let winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winConditions.length; i++) {
    let v0 = box[winConditions[i][0]].innerHTML;
    let v1 = box[winConditions[i][1]].innerHTML;
    let v2 = box[winConditions[i][2]].innerHTML;

    if (v0 != "" && v0 === v1 && v0 === v2) {
      isGameOver = true;
      let resultElement = document.querySelector("#results");
      resultElement.innerHTML = turn + " win";
      resultElement.style.display = "grid";
      resultElement.style.justifyContent = "center";

      // Rasm elementini yaratish va unga src atributini o'rnatish
      let imgElement = document.createElement("img");
      imgElement.src =
        "https://image.shutterstock.com/image-vector/win-sign-colour-confetti-vector-260nw-322012643.jpg";

      // Rasmni #results ga qo'shish
      resultElement.appendChild(imgElement).style.width = "200px";
      imgElement.style.borderRadius = "10px";
      document.querySelector("#play-again").style.display = "inline";
      for (j = 0; j < 3; j++) {
        box[winConditions[i][j]].style.backgroundColor = "#08D9D6";
        box[winConditions[i][j]].style.color = "#000";
      }
    }
  }
}
// ... (Oldingi kodingiz)

function cheakDraw() {
  if (!isGameOver) {
    let isDraw = true;
    box.forEach((e) => {
      if (e.innerHTML === "") isDraw = false;
    });
    if (isDraw) {
      isGameOver = true;
      document.querySelector("#results").innerHTML = "Draw";

      // Rasm elementini yaratish va unga src atributini o'rnatish
      let imgElement = document.createElement("img");
      imgElement.src =
        "https://i.pinimg.com/564x/eb/aa/7b/ebaa7b1dedaf9d99469804aa59153f78.jpg";
      imgElement.style.width = "190px";
      imgElement.style.height = "160px";
      imgElement.style.boxShadow = " 2px 2px 5px rgba(0, 0, 0, 0.3)";
      imgElement.style.borderRadius = "10px";
      imgElement.style.display = "bloc";
      document.querySelector("#results").appendChild(imgElement);

      document.querySelector("#play-again").style.display = "inline";
    }
  }
}
document.querySelector("#play-again").addEventListener("click", () => {
  isGameOver = false;
  turn = "X";
  document.querySelector(".bg").style.left = "0";
  document.querySelector("#results").innerHTML = "";
  document.querySelector("#play-again").style.display = "none";
  box.forEach((e) => {
    e.innerHTML = "";
    e.style.removeProperty("background-color");
    e.style.color = "#fff";
  });
});

const audio = new Audio("./cartoon-jump-6462.mp3");
function playAudio() {
  audio.play();
}
