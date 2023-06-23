import btnDesplegable from "./btn-burger.js";
import btnClose from "./btn-close.js";
import showLightbox from "./click-img.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    btnDesplegable(".panel-btn", ".menu-navegacion");
    showLightbox("#click-img", ".lightbox", ".agregar-img");
    btnClose("#close-btn", ".lightbox");
});



