var myButton = document.querySelector("#myButton");

myButton.addEventListener('click', changeClass);

let heart = document.querySelector(".heart");
heart.tinnerHTML = Date();
function changeClass (){
   // heart.visiblity="visible";
   heart.classList.add("heart-pulse");
}