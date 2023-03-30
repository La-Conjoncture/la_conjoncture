const links = document.querySelectorAll('.artist-link');

links.forEach(link => {
  link.addEventListener('mouseenter', event => {
    const other_links = Array.from(links).filter((element) => element !== event.target);

    other_links.forEach(other_link => {
      other_link.classList.add('blur-xs');
    })

    link.addEventListener('mouseleave', event => {
      links.forEach(blurred_link => {
        blurred_link.classList.remove('blur-xs');
      })
    })
  })
})
