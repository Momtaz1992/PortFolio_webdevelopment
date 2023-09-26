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

// Show SIDEBAR
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-sidebar');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-sidebar');
  });
}

// Close Sidebar when a link is clicked
const sidebarLinks = document.querySelectorAll('#sidebar a');
sidebarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-sidebar');
  });
});
