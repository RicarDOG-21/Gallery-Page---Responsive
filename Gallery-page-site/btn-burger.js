const d = document;

export default function btnDesplegable (btn, menu) {

    d.addEventListener("click", e => {
        if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
            d.querySelector(menu).classList.toggle("spread");
        }
    });
}