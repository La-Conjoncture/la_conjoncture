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

if (document.getElementById('active-link')) {
  const annotationForActiveLink = RoughNotation.annotate(document.getElementById('active-link'), { type: 'bracket', color: '#852E25', animationDuration: 500, strokeWidth: 3, padding: 3, brackets: ['left', 'right']});
  annotationForActiveLink.show();
}

links.forEach(link => {
  link.addEventListener('mouseenter', event => {
    const annotation = RoughNotation.annotate(event.target, { type: 'underline', color: '#852E25', padding: 1 });
    if (!(event.target.id === 'active-link')) {
      annotation.show();
    }

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
