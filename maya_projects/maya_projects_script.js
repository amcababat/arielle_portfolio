document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    //cccd
    var proj_1 = document.getElementById('proj_1');
    var img_1 = document.getElementById('img_1');
    var close_1 = document.getElementById('close_1');

    proj_1.addEventListener('click', function () {
        img_1.style.display = "block";
        // add a fade up?
    })

    close_1.addEventListener('click', function () {
        img_1.style.display = "none";
    })

    // add a cursor hover
});