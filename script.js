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

const pages = ['assets/livret-aeiou-page-1.jpg', 'assets/livret-aeiou-page-6.jpg', 'assets/livret-aeiou-page-12.jpg', 'assets/livret-aeiou-page-32.jpg', 'assets/livret-aeiou-page-39.jpg', 'assets/livret-aeiou-page-42.jpg', 'assets/livret-aeiou-page-45.jpg', 'assets/livret-aeiou-page-48.jpg'];

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


const bookletPageNumbers = [1, 6, 12, 32, 39, 42, 45, 48];
function updateBookletCaptionWithRealPages() {
  if (!caption) return;
  caption.textContent = `Page ${bookletPageNumbers[currentPage]} • ${currentPage + 1} / ${pages.length}`;
}
if (prev && next) {
  prev.addEventListener('click', updateBookletCaptionWithRealPages);
  next.addEventListener('click', updateBookletCaptionWithRealPages);
  updateBookletCaptionWithRealPages();
}
