const btn = document.querySelector('.dropdown-btn');
const menu = document.querySelector('.dropdown-menu');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Закрываем при клике на overlay
overlay.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});

const buttons = document.querySelectorAll('.magnetic');

buttons.forEach(btn => {
    btn.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        this.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
    });

    btn.addEventListener('mouseleave', function () {
        this.style.transform = 'translate(0, 0)';
    });
});

const btnSl = document.querySelectorAll('.btnSl');
const toast = document.getElementById('toast');

btnSl.forEach(btn => {
    btn.addEventListener('click', () => {
        toast.classList.add('show')

        clearTimeout(toast.timer);
        toast.timer = setTimeout(() => {
            toast.classList.remove('show');
        }, 1500);
    })
})

const btnBrend = document.querySelectorAll('.btn-brend');

btnBrend.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active')
    })
})
const btnSpan = document.querySelectorAll('.btn-block9');

btnSpan.forEach(btn => {
    const span = btn.querySelector('.span-btn-block9');
    btn.addEventListener('click', () => {
        span.classList.toggle('slow')
        btn.classList.toggle('active')
    })
})

const btnBlock9 = document.querySelector('.btn-cont1-block9');
const contentBlock9 = document.querySelector('.btn-content-block9')

btnBlock9.addEventListener('click', () => {
    contentBlock9.classList.toggle('active')
    btnBlock9.classList.toggle('active')
})