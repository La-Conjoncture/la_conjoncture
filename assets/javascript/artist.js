const backLink = document.getElementById('back-link');
const pageContent = document.getElementById('page-content');

backLink.addEventListener('mouseenter', event => {
  pageContent.classList.add('blur-xs');

  backLink.addEventListener('mouseleave', event => {
    pageContent.classList.remove('blur-xs');
  })
})
