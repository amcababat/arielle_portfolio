document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    //cccd
    var cccd = document.getElementById('cccd');
    var paragraph_2 = document.getElementById('paragraph_2');
    var close_2 = document.getElementById('close_2');

    cccd.addEventListener('click', function () {
        paragraph_2.style.display = "block";
        // add a fade up?
    })

    close_2.addEventListener('click', function () {
        paragraph_2.style.display = "none";
    })

    //dcf
    var dcf = document.getElementById('dcf');
    var paragraph_1 = document.getElementById('paragraph_1');
    var close_1 = document.getElementById('close_1');

    dcf.addEventListener('click', function () {
        paragraph_1.style.display = "block";
        // add a fade up?
    })

    close_1.addEventListener('click', function () {
        paragraph_1.style.display = "none";
    })

    var code = document.getElementById('code');
    var paragraph_3 = document.getElementById('paragraph_3');
    var close_3 = document.getElementById('close_3');

    code.addEventListener('click', function () {
        paragraph_3.style.display = "block";
        // add a fade up?
    })

    close_3.addEventListener('click', function () {
        paragraph_3.style.display = "none";
    })

    var project_4 = document.getElementById('project_4');
    var paragraph_4 = document.getElementById('paragraph_4');
    var close_4 = document.getElementById('close_4');

    project_4.addEventListener('click', function () {
        paragraph_4.style.display = "block";
        // add a fade up?
    })

    close_4.addEventListener('click', function () {
            paragraph_4.style.display = "none";
        })
        // add a cursor hover
});