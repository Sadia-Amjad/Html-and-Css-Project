 //nav bar
 //when burger is clicked on mobile sceen the nav bar will shown
 let burger = document.querySelector(".burger");
 let navbar = document.querySelector(".navbar");
 let rightNav = document.querySelector(".rightNav");
let navList = document.querySelector(".navList");
//using add event listener on click
burger.addEventListener("click", () => {
  rightNav.classList.toggle("v-class-resp");
  navList.classList.toggle("v-class-resp");
  navbar.classList.toggle("h-nav-resp");
});

//form button
let submit = document.getElementsByClassName(".myForm");
//add event listener
myForm.addEventListener("submit", function(event){
  event.preventDefault();
  alert("Congratulations! Form is submitted.");
  //styling
  let submitButton = document.getElementById("submitButton");
  submitButton.style.backgroundColor = "green";
});

//Homepage buttons
document.getElementById("exploreButton");
exploreButton.addEventListener("click", function() {
  alert("Welcome! Let's explore amazing content.");
  exploreButton.style.backgroundColor = "blue"; // Change button color
  exploreButton.style.borderColor = "blue";
});
//enrollButton
document.getElementById("enrollButton");
enrollButton.addEventListener("click", function() {
  alert("You have successfully enrolled!");
  enrollButton.style.backgroundColor = "blue"; // Change button color
  enrollButton.style.borderColor = "blue";
});




