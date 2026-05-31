
const peker = document.getElementById('peker-id');
document.addEventListener('mousemove', e => {
    peker.style.left = e.clientX + 'px';
    peker.style.top = e.clientY + 'px';
});
document.querySelectorAll('a, button, .work-card').forEach(el => {
    el.addEventListener('mouseenter', () => peker.classList.add('big'));
    el.addEventListener('mouseleave', () => peker.classList.remove('big'));
});

document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
    });
});

document.querySelectorAll('.work-card').forEach(film => {
    film.addEventListener('click', () => {
        const img = film.querySelector('.work-img');
        if (img.style.display === 'block') {
            img.style.display = 'none';
        } else {
            document.querySelectorAll('.work-img').forEach(i => i.style.display = 'none');
            img.style.display = 'block';
        }
    });
});

const html = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');

const saved = localStorage.getItem('theme') || 'light';
setTheme(saved);

themeBtn.addEventListener('click', () => {
    setTheme(html.dataset.theme === 'light' ? 'dark' : 'light');
});

function setTheme(t) {
    html.dataset.theme = t;
    localStorage.setItem('theme', t);
    if (t === 'dark') {
        themeIcon.textContent = '☀';
        themeLabel.textContent = 'Lys';
    } else {
        themeIcon.textContent = '☾';
        themeLabel.textContent = 'Mørk';
    }
}
