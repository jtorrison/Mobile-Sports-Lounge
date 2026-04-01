// Mobile nav toggle
function toggleNav() {
  document.getElementById('navMobile').classList.toggle('open');
}

// Auto-year in footer
document.getElementById('year').textContent = new Date().getFullYear();
