let tabLinks = document.querySelectorAll(".tab-links");
let tabContents = document.querySelectorAll(".tab-contents");

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
