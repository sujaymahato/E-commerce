function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    document.getElementById('current-time').textContent = timeString;
}
setInterval(updateTime, 1000); 
updateTime(); 



    function revealOnScroll() {
        const items = document.querySelectorAll('.arrival-item');

        items.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (itemPosition < windowHeight - 100) {
                item.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);

    document.addEventListener('DOMContentLoaded', revealOnScroll);





    
    let countdownTime = 3 * 60 * 60; 
    const countdownElement = document.getElementById('countdown');
    
    const countdownInterval = setInterval(() => {
        const hours = Math.floor(countdownTime / 3600);
        const minutes = Math.floor((countdownTime % 3600) / 60);
        const seconds = countdownTime % 60;
    
        countdownElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
        countdownTime--;
    
        if (countdownTime < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = "Offer Expired!";
        }
    }, 1000);
    