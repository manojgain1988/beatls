$(function(){
    $('.scrolltop').click(function(){
        $('html, body').animate({scrollTop: 0}, 500)
    });

    $(window).scroll(function(){
        var scroll = $(this).scrollTop();

        if (scroll > 300) {
            $('.navbar').addClass('bgred');
        } else {
            $('.navbar').removeClass('bgred');
        }
        if (scroll > 500) {
            $('.scrolltop').show(500)
        } else {
            $('.scrolltop').hide(500)
        }
    })
});
// Jquery End





new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
new VenoBox({
    selector: '.my-video-links',
});



(() => {
    // Specify the deadline date
    const deadlineDate = new Date('Aprill 22, 2023 23:59:59').getTime();

    // Cache all countdown boxes into consts
    const countdownDays = document.querySelector('.countdown__days .number');
    const countdownHours = document.querySelector('.countdown__hours .number');
    const countdownMinutes = document.querySelector('.countdown__minutes .number');
    const countdownSeconds = document.querySelector('.countdown__seconds .number');

    // Update the count down every 1 second (1000 milliseconds)
    setInterval(() => {
        // Get current date and time
        const currentDate = new Date().getTime();

        // Calculate the distance between current date and time and the deadline date and time
        const distance = deadlineDate - currentDate;

        // Calculations the data for remaining days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(distance % (1000 * 60) / 1000);

        // Insert the result data into individual countdown boxes
        countdownDays.innerHTML = days;
        countdownHours.innerHTML = hours;
        countdownMinutes.innerHTML = minutes;
        countdownSeconds.innerHTML = seconds;
    }, 1000);
})();



var swiper = new Swiper(".mySwiper", {
    spaceBetween: 24,
    slidesPerView: 2,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
  });