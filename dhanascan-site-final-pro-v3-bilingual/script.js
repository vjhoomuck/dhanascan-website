const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const contactForm = document.querySelector('#contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name')?.value || '';
    const email = document.querySelector('#email')?.value || '';
    const message = document.querySelector('#message')?.value || '';
    const subject = encodeURIComponent('Contact depuis le site DhanaScan');
    const body = encodeURIComponent(`Bonjour l’équipe DhanaScan,

${message}

Nom : ${name}
Email : ${email}`);
    window.location.href = `mailto:dhanaappdevelopers@gmail.com?subject=${subject}&body=${body}`;
  });
}

const pages = ['assets/livret-page-1.jpg', 'assets/livret-page-2.jpg', 'assets/livret-page-3.jpg', 'assets/livret-page-4.jpg', 'assets/livret-page-5.jpg'];

let currentPage = 0;
const img = document.querySelector('#bookletImage');
const caption = document.querySelector('#bookletCaption');
const prev = document.querySelector('#prevPage');
const next = document.querySelector('#nextPage');

function updateBooklet() {
  if (!img || !caption) return;
  img.src = pages[currentPage];
  caption.textContent = `Page ${currentPage + 1} / ${pages.length}`;
}

if (prev && next) {
  prev.addEventListener('click', () => {
    currentPage = (currentPage - 1 + pages.length) % pages.length;
    updateBooklet();
  });
  next.addEventListener('click', () => {
    currentPage = (currentPage + 1) % pages.length;
    updateBooklet();
  });
}
