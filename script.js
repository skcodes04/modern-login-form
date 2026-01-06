const loginForm = document.querySelector("#loginForm");
const loginBtn = document.querySelector(".loginBtn");
const loader = document.querySelector(".loader");
const success = document.querySelector(".success");
const toggleEyePassword = document.querySelector(".toggleEyePassword");
const password = document.querySelector("#password");


toggleEyePassword.addEventListener("click", ()=>{
  password.type = password.type === "password" ? "text" : "password";

});


loginForm.addEventListener("submit", e=>{
  e.preventDefault(); //prevent from reload

  success.style.display = "none";
  loginBtn.style.display = "none";
  loader.style.display = "block";

  setTimeout(() => {
  success.style.display = "block";
  loader.style.display = "none";
    



  }, 1500);


});