document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");

    var cccd_button = document.getElementById('cccd_button');
    var cccd_display = document.getElementById('cccd_display');
    var close_1 = document.getElementById('close_1');

    cccd_button.addEventListener('click', function () {
        cccd_display.style.display = "block";
    })
    close_1.addEventListener('click', function () {
        cccd_display.style.display = "none";
    })
});