$('.container').on('mouseenter', function () {

    document.querySelectorAll(".parallax-wrap").forEach(parallaxWrap =>

        parallaxWrap.addEventListener(
            "mousemove", ({ layerX, layerY }) => {
                parallaxWrap.style.setProperty("--x", layerX);
                parallaxWrap.style.setProperty("--y", layerY);
            }
        ),

    );
    
});