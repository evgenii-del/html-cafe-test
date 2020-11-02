const counters = document.querySelectorAll('.counter');
const speed = 10;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = Math.round(target / speed);
        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 50)
        } else {
            counter.innerText = target;
        }
    }
    updateCount();
})

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            320: {
                items: 1
            },
            1024: {
                items: 2
            },
            1240: {
                items: 3
            }
        }
    });
});