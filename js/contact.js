function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    document.getElementById('current-time').textContent = timeString;
}
setInterval(updateTime, 1000); 
updateTime(); 


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

  
    document.getElementById('successMessage').classList.remove('hidden');

    document.getElementById('contactForm').reset();
});
