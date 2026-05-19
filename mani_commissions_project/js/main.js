/* =========================================
   ELEMENTS
========================================= */

const galleryImages =
document.querySelectorAll(".gallery-image");

const imageModal =
document.getElementById("imageModal");

const modalImage =
document.getElementById("modalImage");

const modalClose =
document.getElementById("modalClose");

const modalWrapper =
document.querySelector(".modal-wrapper");

const copyDiscord =
document.getElementById("copyDiscord");

const header =
document.querySelector(".header");

/* =========================================
   ZOOM SETTINGS
========================================= */

let scale = 1;

const MAX_SCALE = 2.5;

const MIN_SCALE = 1;

/* =========================================
   OPEN MODAL
========================================= */

galleryImages.forEach((img) => {

    img.addEventListener("click", () => {

        imageModal.classList.add(
        "active"
        );

        modalImage.src =
        img.src;

        scale = 1;

        updateZoom();

        document.body.style.overflow =
        "hidden";

    });

});

/* =========================================
   UPDATE ZOOM
========================================= */

function updateZoom(){

    modalImage.style.transform =
    `scale(${scale})`;

    if(scale > 1){

        modalImage.classList.add(
        "zoomed"
        );
    }
    else{

        modalImage.classList.remove(
        "zoomed"
        );
    }

}

/* =========================================
   ZOOM IN
========================================= */

modalImage.addEventListener("click", (e) => {

    e.stopPropagation();

    scale += 0.3;

    if(scale > MAX_SCALE){

        scale = MAX_SCALE;
    }

    updateZoom();

});

/* =========================================
   ZOOM OUT
========================================= */

modalImage.addEventListener("contextmenu", (e) => {

    e.preventDefault();

    e.stopPropagation();

    scale -= 0.3;

    if(scale < MIN_SCALE){

        scale = MIN_SCALE;
    }

    updateZoom();

});

/* =========================================
   PREVENT IMAGE DRAG
========================================= */

modalImage.addEventListener("dragstart", (e) => {

    e.preventDefault();

});

/* =========================================
   CLOSE MODAL
========================================= */

function closeModal(){

    imageModal.classList.remove(
    "active"
    );

    scale = 1;

    modalImage.style.transform =
    "scale(1)";

    document.body.style.overflow =
    "";

}

/* =========================================
   CLOSE BUTTON
========================================= */

modalClose.addEventListener("click", (e) => {

    e.stopPropagation();

    closeModal();

});

/* =========================================
   CLICK OUTSIDE IMAGE = CLOSE
========================================= */

imageModal.addEventListener("click", (e) => {

    if(
        e.target !== modalImage
    ){

        closeModal();
    }

});

/* =========================================
   ESC CLOSE
========================================= */

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        closeModal();
    }

});

/* =========================================
   COPY DISCORD
========================================= */

copyDiscord.addEventListener("click", () => {

    navigator.clipboard.writeText(
    "4zip"
    );

    const originalText =
    copyDiscord.innerHTML;

    copyDiscord.innerHTML =
    "COPIED!";

    setTimeout(() => {

        copyDiscord.innerHTML =
        originalText;

    }, 1500);

});

/* =========================================
   NAVBAR FADE
========================================= */

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll =
    window.pageYOffset;

    if(
        currentScroll > lastScroll &&
        currentScroll > 120
    ){

        header.classList.add(
        "header-hidden"
        );
    }
    else{

        header.classList.remove(
        "header-hidden"
        );
    }

    lastScroll = currentScroll;

});