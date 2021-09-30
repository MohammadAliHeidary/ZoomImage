const zoomimage = document.getElementsByClassName('zoomimage');
for (let i = 0; i < zoomimage.length; i++) {
    const element = zoomimage[i];
    element.addEventListener("mousemove", e => {
        e.target.parentElement.scrollTo({
            top: e.layerY,
            left: e.layerX,
            behavior: "auto"
        });
    });
}
//? Author : https://github.com/MohammadAliHeidary