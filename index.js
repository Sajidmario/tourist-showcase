function likeSpot(buttonElement) {
    if (buttonElement.innerHTML === "Like") {
        buttonElement.innerHTML = "Liked ❤️";
        buttonElement.style.backgroundColor = "#27ae60";
    } else {
        buttonElement.innerHTML = "Like";
        buttonElement.style.backgroundColor = "#e74c3c";
    }
}