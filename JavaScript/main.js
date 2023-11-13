// SKILLS TABS 
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    tabContent.forEach((tabContents) => {
      tabContents.classList.remove('skills__active');
    });
    target.classList.add('skills__active');

    tabs.forEach((tab) => {
      tab.classList.remove('skills__active');
    });
    tab.classList.add('skills__active');
  });
});
//show SIDEBAR
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose =document.getElementById('nav-close')

if(navToggle){
       navToggle.addEventListener('click', () =>{
              navMenu.classList.add('show-sidebar')
       })
}
if(navClose){
       navClose.addEventListener('click', () =>{
              navMenu.classList.remove('show-sidebar')
       })
}
/* document.getElementById("downloadBtn").addEventListener("click", function() {
  // Set the file URL and name
  let fileUrl = "../Images/cv.pdf"; // Replace with the actual path to your CV file
  let fileName = "cv.pdf"; // Replace with the desired file name

  // Create a link element
  var downloadLink = document.getElementById("downloadLink");

  // Set the download link attributes
  downloadLink.href = fileUrl;
  downloadLink.download = fileName;

  // Trigger a click on the download link
  downloadLink.click();
}); */