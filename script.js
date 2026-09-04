// ===============================
// BITE & BLISS - script.js
// ===============================


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.innerHTML =
        `© ${year} Bite & Bliss | All Rights Reserved`;
}





document.getElementById("orderForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // Check required customer information
    if (!this.checkValidity()) {
        this.reportValidity();
        return;
    }

    // Check if at least one dish was selected
    let selectedDishes = document.querySelectorAll(
        'input[name="products[]"]:checked'
    );

    if (selectedDishes.length === 0) {
        alert("Please select at least one dish.");
        return;
    }

    // If everything is filled correctly
    alert("Your order has been placed successfully!");

});