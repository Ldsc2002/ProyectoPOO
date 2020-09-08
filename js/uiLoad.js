"use strict";

function navigatePage(load) {
    let current = ["#main", "#help", "#questions"];
    let navigateTo = document.querySelector(load);
    let navigateIndex = current.findIndex(function(element) {
        return element === load;
    });

    current.splice(navigateIndex, 1);

    for (let i=0; i < current.length; i++) {
        let currentPage = document.querySelector(current[i]);

        currentPage.classList.add("pageOut");
        currentPage.classList.remove("pageIn");

        setTimeout(navigateCurrent, 500);

        function navigateCurrent() {
        currentPage.setAttribute("style", "display:none");
        }
    }

    setTimeout(navigate, 500);

    function navigate() {
        navigateTo.setAttribute("style", "display:block");
        navigateTo.classList.add("pageIn");
        navigateTo.classList.remove("pageOut");
    }

    console.log(load + " from " + current);
}
