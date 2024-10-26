function showDetails(centerId) {
    const details = document.getElementById(centerId);
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}
