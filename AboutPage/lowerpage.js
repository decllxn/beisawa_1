ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400 
});

ScrollReveal().reveal('.main-title, .section-title', { delay: 500, origin: 'left'})
ScrollReveal().reveal('.sec-01 .image, .info', { delay: 600, origin: 'bottom'})
ScrollReveal().reveal('.text-box', { delay: 700, origin: 'right'})
ScrollReveal().reveal('.media-icons i', { delay: 500, origin: 'bottom', interval: 750 })
ScrollReveal().reveal('.sec-02 .image, .sec-03 .image', { delay: 800, origin: 'top' })
ScrollReveal().reveal('.media-info li', { delay: 500, origin: 'left', interval:200 })