const d = document;

export default function btnClose(btn, lightbox){

    d.addEventListener("click", e => {
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            d.querySelector(lightbox).classList.toggle("lightbox-active");
        }
    });
}