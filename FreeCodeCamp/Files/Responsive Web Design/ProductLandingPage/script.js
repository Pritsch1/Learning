$(document).ready(function () {
    const youtube = document.getElementById("video")
    $(window).resize(function () {
        if ($(window).width() < 960) {
            classChanger(youtube, "big", "small")
        }
        else {
            classChanger(youtube, "small", "big")
        }
    });
    

    function classChanger(x, remove, add) {
        x.classList.remove(remove);
        x.classList.add(add);
    }
});