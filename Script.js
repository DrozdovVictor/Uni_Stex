/* Variables */

const headerLangBlock = document.querySelector('.nav-content-lang-block')
const faqItem = document.querySelectorAll('.faq-item');
const footerHeadingBlock = document.querySelector('.footer-heading-block')

/* Functions */

headerLangBlock.addEventListener('click', function () {
  headerLangBlock.classList.toggle('active');
})

faqItem.forEach(function(element) {
  element.addEventListener('click', function () {
    element.classList.toggle('active');
  })
})

footerHeadingBlock.addEventListener('click', function () {
  footerHeadingBlock.classList.toggle('active');
})