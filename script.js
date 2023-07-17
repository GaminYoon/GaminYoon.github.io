//target all elements to save to constants
const page1btn=document.querySelector("#link1");
const page2btn=document.querySelector("#link2");
const page3btn=document.querySelector("#link3");
var allpages=document.querySelectorAll(".page");
//select all subtopic pages

console.log(allpages);
hideall();
function hideall(){ //function to hide all pages
  for(let onepage of allpages){ //go through all subtopic pages
    onepage.style.display="none"; //hide it
  }
}

function show(pgno){ //function to show selected page no
  hideall();
  //select the page based on the parameter passed in
  let onepage=document.querySelector("#page"+pgno);
  //show the page
  onepage.style.display="block";
}

/*Listen for clicks on the buttons, assign anonymous
eventhandler functions to call show function*/
page1btn.addEventListener("click", function () {
  show(1);
});
page2btn.addEventListener("click", function () {
  show(2);
});
page3btn.addEventListener("click", function () {
  show(3);
});



/*for Opening sidebar */
const sidebar=document.querySelector("#openMenu");
sidebar.addEventListener("click",openMenus);
const csidebar=document.querySelector("#closeMenu");
function openMenus(){ /*open and close menu*/
  menuItemsList.style.right= "0";

}//can optimize using toggle class with css transitions
const menuItemsList=document.querySelector("nav ul");
/*for Opening sidebar */

csidebar.addEventListener("click",closeMenus);
function closeMenus(){ /*open and close menu*/
  menuItemsList.style.right= "-200px";

}//can optimize using toggle class with css transitions
