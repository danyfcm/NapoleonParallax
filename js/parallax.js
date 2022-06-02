$('.container').on('mouseenter', function () {
    document.querySelectorAll(".parallax-wrap").forEach(parallaxWrap =>

        parallaxWrap.addEventListener("mousemove", ({ clientX, clientY }) => {
            parallaxWrap.style.setProperty("--x", clientX);
            parallaxWrap.style.setProperty("--y", clientY);
        }),

    );
});