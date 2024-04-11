console.log("populatin'")

document.addEventListener("DOMContentLoaded", onDOMLoad, false);

function onDOMLoad(e) {
    const body_element = document.querySelector("#body");
    console.log(body_element)
    const sidenav_element = document.querySelector("#side-navbar");

    // Going through each header and adding it to the sidenav
    const header_body_set = body_element.querySelectorAll("div > h2,h3");
    console.log(header_body_set);
    // sidenav_element.append(header_body_set)


    header_body_set.forEach((header_element) => {
        console.log(header_element)

        if(header_element.getAttribute("id") === null) {
            console.log("No ID!")

            let temp_tag = header_element.innerText;
            temp_tag = temp_tag.trim();
            temp_tag = temp_tag.toLowerCase();
            temp_tag = temp_tag.replace(/\s+/g, '-');

            header_element.setAttribute("id", temp_tag + "-heading");
        }
        console.log(header_element.id);

        let temp_nav_li = document.createElement("li");
        let temp_nav_a = document.createElement("a");
        temp_nav_a.setAttribute("href","#" + header_element.id);
        temp_nav_a.setAttribute("id", header_element.id + "-sidenav");
        temp_nav_a.innerText = header_element.innerText;
        temp_nav_li.append(temp_nav_a);

        if(header_element.tagName == "H3") {
            let temp_nav_ul  = document.createElement("ul");
            temp_nav_ul.append(temp_nav_li)
            sidenav_element.querySelector("ul").append(temp_nav_ul)
        } else {
            sidenav_element.querySelector("ul").append(temp_nav_li)
        }
        // '<li><a href="#' + (heading @id) + '" id=' + (heading @id + '-sidenav') +'>' + heading.innerText + '</a></li>'
    })

    // Copying the sidenav contents into the sidenav-dropdown
    const sidenav_dropdown_element = document.querySelector("#side-navbar-dropdown");
    console.log(sidenav_dropdown_element)
    sidenav_dropdown_element.append(sidenav_element.querySelector("ul").cloneNode(true));
}
