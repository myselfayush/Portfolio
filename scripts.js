function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Create shining stars effect
function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 2 + 0.5}s`;
    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 2000);
}

// Increase the frequency of star creation
setInterval(createStar, 50);

// Create galaxy background effect
function createGalaxy() {
    const galaxy = document.querySelector('.galaxy');
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 2 + 0.5}s`;
        galaxy.appendChild(star);
    }
}

createGalaxy();

// Smooth scrolling and highlight menu button
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        document.querySelectorAll('.menu a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});