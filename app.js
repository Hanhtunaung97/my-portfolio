const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");
const sideMenu = document.querySelector("#sideMenu");

function openTab(tabName) {
  for (link of tabLinks) {
    link.classList.remove("active-link");
  }
  for (linkContent of tabContents) {
    linkContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

function openMenu() {
  sideMenu.style.right = "0";
}
function closeMenu() {
  sideMenu.style.right = "-200px";
}

// Google Sheet Fetching
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxT7swTdRSGQ7zIR25TeeXWQ_JDnsvqASt9wFffGPYlDpcd1qqepRRmZDWKcOi2lyjz/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.querySelector("#msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 4000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
