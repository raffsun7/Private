document.addEventListener("DOMContentLoaded", function () {
    // NeonLoader: Fade out once content is loaded
    const loader = document.getElementById("neon-loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 500);
    }, 1500); // Adjust time as needed

    // Rotating Profile Image Effect
    const profile = document.getElementById("profile");
    let currentIndex = 0;
    const images = ["image1.jpg", "image2.jpg", "image3.jpg"]; // Replace with actual image URLs

    function changeImage() {
        profile.style.opacity = 0; // Fade out effect

        setTimeout(() => {
            profile.style.backgroundImage = `url(${images[currentIndex]})`;
            profile.style.opacity = 1; // Fade in effect
            currentIndex = (currentIndex + 1) % images.length;
        }, 500);
    }

    profile.style.backgroundImage = `url(${images[0]})`; // Set initial image
    setInterval(changeImage, 4000); // Rotate images every 4s
});