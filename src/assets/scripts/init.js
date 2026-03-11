
//custom script to solve undefined process error due to angular update 11 -> 12
window.process = {
    env: {
        NODE_DEBUG: 'development'
    }
}

// Apply theme class early to prevent flash of unstyled content
;(function () {
  try {
    var saved = localStorage.getItem('lifeplanner-theme');
    // Default is light; only switch to dark when explicitly saved as 'dark'
    if (saved !== 'dark') {
      document.documentElement.classList.add('light-mode');
    }
  } catch (e) {
    // localStorage unavailable — apply light mode (default)
    document.documentElement.classList.add('light-mode');
  }
})();
