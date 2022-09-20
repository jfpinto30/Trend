const toggleTag = document.querySelector("mySidenav");
const mainTag = document.querySelector("main");


toggleTag.addEventListener("click", function () {
  mainTag.classList.toggle("open")

if(mainTag.classList.contains("open")) {
toggleTag.innerHTML = `<img src="./icon/Close.svg" width="39px"> Close`;
} else {
toggleTag.innerHTML = `<img src="./icon/menu W.svg" width="39px"> Menu`;
}


});


