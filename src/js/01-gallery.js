// Add imports above this line
import { galleryItems } from "./gallery-items.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

const galleryList = document.querySelector(".gallery");
const imagesMarkup = createImagesMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", imagesMarkup);

function createImagesMarkup(galleryItems){
    return galleryItems.map(({preview, original, description})=>{
        return `<li><a class="gallery__link" href="${original}">
        <img  class="gallery__image" src ="${preview}" alt ="${description}">
        </a></li>`;}).join("");
}

const gallery = new SimpleLightbox(".gallery a", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
});

gallery.on("show.simplelightbox", function () {});

console.log(galleryItems);
