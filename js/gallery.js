function upDate(previewPic) {
    console.log("Image overed");
    //Selecting text element to be changed
   let x = document.getElementById('image');
    //Changing the url for the background image
    x.style.backgroundImage = "url(" + previewPic.src + ")";
    console.log("Updated background image")
    //Changing the text with the alt one of the overed image
    x.innerHTML = previewPic.alt;
    console.log("Updated div text")
}

function unDo() {
    console.log("Image no more overed")
    //Selecting text element to be changed
  let x = document.getElementById('image');
    //Updating url to the original one
    x.style.backgroundImage = "url('')";
    console.log("Removed background image")
    //Updating div with original text
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    console.log("Updated div text with original content")
}
function addTabFocus() {
    console.log("Page loaded");

    let images = document.querySelectorAll(".preview");

    for (let i = 0; i < images.length; i++) {

        images[i].setAttribute("tabindex", "0");

        images[i].addEventListener("mouseover", function () {
            upDate(this);
        });

        images[i].addEventListener("mouseout", unDo);

        images[i].addEventListener("focus", function () {
            upDate(this);
        });

        images[i].addEventListener("blur", unDo);
    }
}

window.addEventListener("load", addTabFocus);