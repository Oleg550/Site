const swiper = new Swiper(".swiper", {
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
  });

  document.addEventListener('DOMContentLoaded', () => {
    const link = document.querySelector('.top__link');
    
    link.addEventListener('mouseover', () => {
        link.style.animation = 'bounce 0.5s';
    });

    link.addEventListener('animationend', () => {
        link.style.animation = '';
    });
});