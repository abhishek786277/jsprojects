const button = document.querySelectorAll("button");
var input = document.querySelector("input");
let string = "";
let newstring = "";

button.forEach((buttons) => {
  buttons.addEventListener("click", (e) => {
    if (e.target.innerText == "=") {
      newstring = eval(string);
      input.value = newstring;
      string = newstring;
    } else if (e.target.innerText == "AC") {
      input.value = "";
      string=""
    } else if (e.target.innerText == "BCK") {
      string = string.slice(0, -1);
      input.value = string;
    } else if (e.target.innerText == "X") {
      input.value +="X" 
      string += "*"
    }  else {
      string += e.target.innerText;
      input.value = string;
      console.log(string);
    }
  });
});
