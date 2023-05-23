const bracketLinks = document.querySelectorAll('.bracket-link');

bracketLinks.forEach(link => {
  link.addEventListener('mouseenter', event => {
    const annotation = RoughNotation.annotate(event.target, { type: 'bracket', color: '#852E25', animationDuration: 500, strokeWidth: 3, brackets: ['left', 'right']});
    if (link.classList.contains('white-bracket-link')) {
      annotation.color = 'white';
    }
    annotation.show();

    link.addEventListener('mouseleave', event => {
      annotation.remove();
    })
  })
})

if (document.getElementById('cms-content')) {
  const highlightLinks =  Array.from(document.getElementById('cms-content').getElementsByTagName('a'));

  highlightLinks.forEach(link => {
    link.addEventListener('mouseenter', event => {
      const annotation = RoughNotation.annotate(event.target, { type: 'highlight', color: '#EAA8A2', animationDuration: 800, multiline: true});
      annotation.show();

      link.addEventListener('mouseleave', event => {
        annotation.remove();
      })
    })
  })
}


