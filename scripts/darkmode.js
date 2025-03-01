// Function to toggle between dark and light mode
function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    
    // Toggle between dark and light
    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }
  
  // Function to set the theme based on user's preference or saved setting
  function setInitialTheme() {
    // Check for saved theme preference or use device preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.getElementById('theme-toggle').checked = true;
    } else if (savedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      document.getElementById('theme-toggle').checked = false;
    } else if (prefersDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.getElementById('theme-toggle').checked = true;
    }
  }
  
  // Initialize theme when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to the toggle
    const toggleSwitch = document.getElementById('theme-toggle');
    toggleSwitch.addEventListener('change', toggleDarkMode);
    
    // Set initial theme
    setInitialTheme();
  });