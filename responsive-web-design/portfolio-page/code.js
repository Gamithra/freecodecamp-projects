
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top-100
    }, 500, "swing");
});


window.addEventListener("scroll", highlightNav);

function highlightNav() {
    var divs = ["welcome-section", "projects"];
    var divTops = [];
    for (var i = 0; i < 2; i++) {
        document.getElementById("nav-"+divs[i]).style.color = "#030";
        divTops.push(Math.abs(document.getElementById(divs[i]).getBoundingClientRect().top));
    }
    console.log(divTops);
    var focused = divTops.indexOf(Math.min.apply(null, divTops));
    document.getElementById("nav-"+divs[focused]).style.color = "#585";
}
