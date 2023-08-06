//target all elements to save to constants
const page1btn=document.querySelector("#link1");
const page2btn=document.querySelector("#link2");
const page3btn=document.querySelector("#link3");
var allpages=document.querySelectorAll(".page");
//select all subtopic pages

show(1);

function hideOtherPages(selectedPage) {
  for (let onepage of allpages) {
    if (onepage.id !== selectedPage.id) {
      onepage.style.display = "none";
    }
  }
}

function show(pgno) {
  let selectedPage = document.querySelector("#page" + pgno);
  selectedPage.style.display = "block";
  selectedPage.style.transition = "all 2s";
  
  hideOtherPages(selectedPage);
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
  menuItemsList.style.transition=" all 2s";


}//can optimize using toggle class with css transitions
const menuItemsList=document.querySelector("nav ul");
/*for Opening sidebar */

csidebar.addEventListener("click",closeMenus);
function closeMenus(){ /*open and close menu*/
  menuItemsList.style.right= "-200px";
  menuItemsList.style.transition="all 2s";



}
var counter =1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000)




function flipWatch(element) {
  var watchElement = element.querySelector('.front');
  var watchElement2 = element.querySelector('.back');
  var watchElement3 = element.querySelector('.frontimg');


  if (watchElement.style.transform === "rotateY(0deg)") {
    watchElement.style.transform = "rotateY(180deg)";
    watchElement3.style.transform = "rotateY(180deg)";
 
    watchElement2.style.transform = "rotateY(360deg)";
  } else {
    watchElement.style.transform = "rotateY(0deg)";
    watchElement2.style.transform = "rotateY(180deg)";
    watchElement3.style.transform = "rotateY(0deg)";
  }

};

var view = document.getElementById("view1")
var view2 = document.getElementById("view2")
var view3 = document.getElementById("view3")
var view4 = document.getElementById("view4")

view.style.visibility = "visible";
view2.style.visibility = "hidden";
view3.style.visibility = "hidden";
view4.style.visibility = "hidden";




function reveal() {

  if (view.style.visibility === "visible") {
    view.style.visibility = "hidden";
    view2.style.visibility = "visible";
  }
  else if(view2.style.visibility === "visible"){
    view2.style.visibility = "hidden";
    view3.style.visibility = "visible";
  }
  else if(view3.style.visibility === "visible"){
    view3.style.visibility = "hidden";
    view4.style.visibility = "visible";
  }
  else if(view4.style.visibility === "visible"){
    view4.style.visibility = "hidden";
    view.style.visibility = "visible";
  }

};

function flip(element) {
  var myElement = element.querySelector('.function1');
  var myElement2 = element.querySelector('.frontText');
  var myElement3 = element.querySelector('.functionb');


  if (myElement.style.transform === "rotateY(0deg)") {
    myElement.style.transform = "rotateY(180deg)";
    myElement2.style.transform = "rotateY(180deg)";
 
    myElement3.style.transform = "rotateY(360deg)";
  } else {
    myElement.style.transform = "rotateY(0deg)";
    myElement3.style.transform = "rotateY(180deg)";
    myElement2.style.transform = "rotateY(0deg)";
  }

};



