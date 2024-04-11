document.addEventListener("DOMContentLoaded", onDOMLoad, false);

// Returns the distance between the left side of the element and the left side of its parent
function getParentLeft(el) {
    var rect = el.getBoundingClientRect();
    // var docBody = document.documentElement || document.body.parentNode || document.body;
    var parent_rect = el.parentElement.getBoundingClientRect();
    return rect.left - parent_rect.left;
    // return rect.left + (window.pageXOffset || docBody.scrollLeft || 0);
}


// Returns the distance between the right side of the element and the right side of its parent
function getParentRight(el) {
    // var docBody = document.documentElement || document.body.parentNode || document.body;
    var rect = el.getBoundingClientRect();
    // var docBody = document.documentElement || document.body.parentNode || document.body;
    var parent_rect = el.parentElement.getBoundingClientRect();
    return parent_rect.right - rect.right;
}

function assignTooltipPos() {
    var docBody = document.documentElement || document.body.parentNode || document.body;
    var tooltips = docBody.querySelectorAll(".tt")
    console.log(tooltips[0])

    tooltips.forEach(function (tt) {
        console.log(tt)
        console.log(getParentLeft(tt))
        console.log(getParentRight(tt))

        if(getParentLeft(tt) < 50) {
            var tt_text = tt.querySelector(".tt-text")
            tt_text.classList.remove("tt-left")
            tt_text.classList.remove("tt-center")
            tt_text.classList.remove("tt-right")

            tt_text.classList.add("tt-left")
            console.log("ADDED LEFT!")
        } else if (getParentRight(tt) < 50) {
            var tt_text = tt.querySelector(".tt-text")
            tt_text.classList.remove("tt-left")
            tt_text.classList.remove("tt-center")
            tt_text.classList.remove("tt-right")

            tt_text.classList.add("tt-right")
            console.log("ADDED RIGHT!")
        } else {
            var tt_text = tt.querySelector(".tt-text")
            tt_text.classList.remove("tt-left")
            tt_text.classList.remove("tt-center")
            tt_text.classList.remove("tt-right")

            tt_text.classList.add("tt-center")
            console.log("ADDED CENTER!")
        }
    })
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

    assignTooltipPos()

    window.onresize = assignTooltipPos;
}
