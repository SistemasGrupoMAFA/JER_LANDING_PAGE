



// This function change from dark theme to light theme
const themeToggleBtn = document.getElementById('theme-toggle');
 themeToggleBtn.textContent = "light_mode"

// Toggle logic
themeToggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  
  if (document.documentElement.classList.contains('dark')) {
    localStorage.removeItem("theme");
    localStorage.theme = 'dark';
    themeToggleBtn.textContent = "light_mode"
   
  } else {
    localStorage.theme = 'light';
    themeToggleBtn.textContent = "dark_mode"
  }
});


const buttonContactUs = document.getElementById('btnContactUs');
const secContactUs = document.getElementById('secContactUs')
buttonContactUs.addEventListener('click',()=>{

 secContactUs.scrollIntoView()

})