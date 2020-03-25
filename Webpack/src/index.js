import { sum } from "./sum";
import logo from "./assets/imgs/logo.png";
import "./assets/css/index.css";

const es625 = () => {
  console.log("fn()");
};

const myLogo = new Image();

console.log("hello,webpack", sum(123, 321));
document.getElementById("root").innerHTML = "<h1>hello,webpack!</h1>";

myLogo.src = logo;
document.body.appendChild(myLogo);
