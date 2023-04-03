let addA = Math.floor(Math.random() * 10);
let addB = Math.floor(Math.random() * 10);

function answer() {
  var answer = document.getElementById("answer").value;
  if ((+answer) == addA + addB) {
    document.getElementById("check").innerText = "Correct!";
  } else {
    document.getElementById("check").innerText = "Wrong";
  }
  document.getElementById("checkAns").style.display = "none";
  setTimeout(changeProblem, 2000);
}

function changeProblem() {
  addA = Math.floor(Math.random() * 10);
  addB = Math.floor(Math.random() * 10);
  document.getElementById("intA").innerText = addA;
  document.getElementById("intB").innerText = addB;
  document.getElementById("check").innerText = "Type Your Answer";
  document.getElementById("answer").value = "";
  document.getElementById("checkAns").style.display = "inline-block";
}

changeProblem();
