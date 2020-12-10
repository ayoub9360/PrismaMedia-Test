const parallax = document.querySelectorAll('.parallax')

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    parallax.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll*speed}px)`;
    });
})

$("#open").click(function() {
    $("#navElements").css('display', 'flex');
    $("#close").css('display', 'block');
    $("#open").css('display', 'none');
});

$("#close").click(function() {
    $("#navElements").css('display', 'none');
    $("#close").css('display', 'none');
    $("#open").css('display', 'block');
});