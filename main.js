const btnToggle = document.querySelector("#toggle-list");
const listMobile = document.querySelector(".list-mobile");
const list = document.querySelectorAll("header nav .list-mobile li");
var toggleBoolean = false;

btnToggle.addEventListener("click", () => {
  if (toggleBoolean == true) {
    listMobile.style.top = "-670px";
    toggleBoolean = false;
  } else if (toggleBoolean == false) {
    listMobile.style.top = "56px"
    toggleBoolean = true;
  }
});

list.forEach(ele => {
  ele.addEventListener('click' , ()=> {
    listMobile.style.top = "-670px";
    toggleBoolean = false;
})
})