document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');
    const sticky = header.offsetHeight;
    const logoImage = document.getElementById('logoImage');
    const changingLinks = document.querySelectorAll('.changing-link');

    window.addEventListener('scroll', function () {
        if (window.scrollY >= sticky) {
            nav.classList.add('sticky');
            // Change the logo when the scroll position is beyond a certain point
            logoImage.src = "./Images/1logo.png"; // Update with the path to your second logo

            changingLinks.forEach(link => {
                link.style.color = '#FF7900'; // Change to the desired color
            });
        } else {
            nav.classList.remove('sticky');
            // Revert to the original logo when the scroll position is back above the threshold
            logoImage.src = "./Images/logo.png"; // Update with the path to your first logo

            changingLinks.forEach(link => {
                link.style.color = '#FFFFFF'; // Revert to the original color
            });
        }
    });
});
