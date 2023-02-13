function ClickButton(num) {
  let res = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = res + num;
}

function Clear() {
  const btn = document.getElementById("btn");
  let res = (document.getElementById("resultado").innerHTML = "");
}

function Resolution() {
  let res = document.getElementById("resultado").innerHTML;

  if (res) {
    document.getElementById("resultado").innerHTML = eval(res);
  } else {
    res.innerHTML = " ";
  }
}
