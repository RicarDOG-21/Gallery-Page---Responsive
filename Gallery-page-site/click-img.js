const d = document;

export default function showLightbox(imgAction, lightbox, reference){
    const img = d.querySelectorAll("#click-img"),
    imgLight = d.querySelector(".agregar-img"),
    imgBox = d.querySelector(".lightbox"),
    showImg = (imagen) => {
        imgLight.src = imagen;
    }

    d.addEventListener("click", e => {
        if(e.target.matches(imgAction)){
            d.querySelector(lightbox).classList.toggle("lightbox-active");
        }
        img.forEach(imagen => {
            imagen.addEventListener("click", () => {
                showImg(imagen.getAttribute('src'));
            });
        });
    });
}

