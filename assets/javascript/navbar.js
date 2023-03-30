const menuButton = document.getElementById('menu-button');
const menuLinks = document.getElementById('menu-links');
const body = document.body;
const links = document.querySelectorAll('.link');

menuButton.addEventListener('click', function() {
  if (menuLinks.classList.contains('hidden')) {
    openMenu();
  } else {
    closeMenu();
  }
});

addEventListener('resize', (event) => {
  if (!menuLinks.classList.contains('hidden')) {
    closeMenu();
  }
});

links.forEach(link => {
  link.addEventListener('mouseenter', event => {
    const annotation = RoughNotation.annotate(event.target, { type: 'underline', color: '#852E25', padding: 1 });
    annotation.show();

    link.addEventListener('mouseleave', event => {
      annotation.remove();

    })
  })
})

function closeMenu() {
  menuLinks.classList.add('hidden');
  body.classList.remove('overflow-hidden');
}

function openMenu() {
  menuLinks.classList.remove('hidden');
  body.classList.add('overflow-hidden');
}
