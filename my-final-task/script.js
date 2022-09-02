// Hamburger part
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
console.log(menu);
console.log(menuItems);
console.log(hamburger);
console.log(closeIcon);
console.log(menuIcon);
function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

// pop up part
var modal = document.getElementById("myModal");
var btn = document.getElementById("subscribe-button");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  var email = document.getElementById("email-input");
  if(email.value== ""){
    modal.style.display = "block";
    document.getElementById("message").innerHTML = "please type proper mailId!";
  }else if (!isEmail(email)){
    modal.style.display = "block";
    document.getElementById("message").innerHTML = "Subscribed thank you!";
  }else{
  modal.style.display = "block";
  document.getElementById("message").innerHTML = "please type proper mailId!";
}
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Dynamic section part
let newSection = document.createElement("section");
let imageOne = document.createElement("img");
imageOne.classList.add("first-image");
imageOne.src = "../assets/images/plants-on-self.png";
let imageTwo = document.createElement("img");
imageTwo.classList.add("second-image");
imageTwo.src= "../assets/images/alo-like-plant.png";
newSection.classList.add('two-images-section');
newSection.appendChild(imageOne);
newSection.appendChild(imageTwo);
console.log(newSection);
document.getElementById("author-section").appendChild(newSection);

//dynamic
let object =[
  {
    image: '../assets/images/fiddle-leaf.png',
    plantName: "Fiddle-leaf fig",
    rate: "$110.99",
  },
  {
    image: "./assets/images/aloe-vera.png",
    plantName: "Aloe vera",
    rate: "$110.99",
  },
  {
    image: "./assets/images/sterilizia-plant.png",
    plantName: "Strelitzia nicolal",
    rate: "$110.99",
  },
  {
    image: "./assets/images/ficus-plant.jpg",
    plantName: "Ficus miscarupa",
    rate: "$110.99",
  },
];
console.log(object);
var answer = "";

object.map((item) =>{
  answer += `<div class='gallary-image-wrapper'>
                          <img class='photos' src=${item.image}>
                          <div class='amount'>
                              <p>${item.plantName}<p/>
                             <p>${item.rate}<p/>
                        </div>
                        </div>`;
});
document.querySelector('.gallery').innerHTML = answer;
