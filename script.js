document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const headerOffset = document.querySelector('.header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            const mainNav = document.getElementById('mainNav');
            if (mainNav.classList.contains('nav-open')) {
                mainNav.classList.remove('nav-open');
            }
        }
    });
});

document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const arrow = question.querySelector('.arrow');

        document.querySelectorAll('.faq-answer').forEach(openAnswer => {
            if (openAnswer !== answer && openAnswer.style.display === 'block') {
                openAnswer.style.display = 'none';
                openAnswer.previousElementSibling.classList.remove('active');
                openAnswer.previousElementSibling.querySelector('.arrow').style.transform = 'rotate(0deg)';
            }
        });

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            question.classList.remove('active');
            arrow.style.transform = 'rotate(0deg)';
        } else {
            answer.style.display = 'block';
            question.classList.add('active');
            arrow.style.transform = 'rotate(180deg)';
        }
    });
});

document.getElementById('burgerIcon').addEventListener('click', function() {
    const mainNav = document.getElementById('mainNav');
    mainNav.classList.toggle('nav-open');
});

const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - document.querySelector('.header').offsetHeight;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) {
            a.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.nav-links a[href="#home"]').classList.add('active');
});