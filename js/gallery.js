function upDate(previewPic) {
    let imageSect = document.getElementById("image");
    imageSect.style.backgroundImage = "url('" + previewPic.src + "')";
    imageSect.innerHTML = previewPic.alt;
}

function unDo() {
    let imageSect = document.getElementById("image");
    imageSect.style.backgroundImage = "";
    imageSect.innerHTML = "Hover over an image below to display here.";
}

function initializeGallery() {
    console.log("Inicio de la galería");

    let images = document.querySelectorAll(".preview");

    for (let img of images) {
        img.setAttribute("tabindex", "0");
        img.addEventListener("focus", function() {
            upDate(img);
        });
        img.addEventListener("blur", function() {
            unDo();
        });
    }
}