document.addEventListener("DOMContentLoaded", () => {
    let currentImageIndex = 0;
    const images = document.querySelectorAll(".hero-images img");
    setInterval(() => {
        images[currentImageIndex].style.display = "none";
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.display = "block";
    }, 3000);
});
function gotoSimulacao(){
    window.location.href="simulacao.html"
}