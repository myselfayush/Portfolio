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
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
            document.querySelectorAll('.menu a').forEach(a => a.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Hide menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const menuButton = document.querySelector('.menu-button');
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.style.display = 'none';
    }
});