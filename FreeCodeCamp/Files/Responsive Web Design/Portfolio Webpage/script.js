const german = document.getElementById("german");

german.addEventListener("mouseover", translate);
german.addEventListener("mouseout", restore);

function translate() {
    german.innerHTML = "Hello! My Name is Pritsch.";
}

function restore() {
    german.innerHTML = "Hallo! Ich Hei&#223e Pritsch.";
}