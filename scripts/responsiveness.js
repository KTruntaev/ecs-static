document.addEventListener("DOMContentLoaded", onDOMLoad, false);

function assignTooltipPos() {
    var docBody = document.documentElement || document.body.parentNode || document.body;
    var tooltips = docBody.querySelectorAll(".tt")

    // TODO!!!
}

function onDOMLoad(e) {
    var sidenav_dd_button = document.getElementById("sidenav-dd-button")
    var sidenav_dd = document.getElementById("side-navbar-dropdown")
    console.log(sidenav_dd_button)

    var font_size = parseFloat(getComputedStyle(document.getElementById("content")).fontSize);
    console.log(font_size)

    var scrollTop;
    var stop = sidenav_dd_button.offsetTop+font_size*10;  // - font_size*10
    var docBody = document.documentElement || document.body.parentNode || document.body;
    var hasOffset = window.pageYOffset != undefined;


    window.onscroll = function (e) {
        scrollTop = hasOffset ? window.pageYOffset : docBody.scrollTop;

        // if user scrolls to 60px from the top of the left div
        if (scrollTop >= stop) {
            // stick the div
            sidenav_dd_button.classList.add('sidenav-dd-button-sticky');
            sidenav_dd.classList.add('sidenav-dd-sticky');
        } else {
            // release the div
            sidenav_dd_button.classList.remove('sidenav-dd-button-sticky');
            sidenav_dd.classList.remove('sidenav-dd-sticky');

            console.log(sidenav_dd_button.classList.toString());
        }
    }

    // window.onresize =
}
