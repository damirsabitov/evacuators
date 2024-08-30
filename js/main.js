document.querySelectorAll('.navpage__link').forEach(link => {
    link.addEventListener('click', function (event) {
        // Prevent default link behavior
        event.preventDefault();

        // Remove 'active' class from all links and their parent <li>
        document.querySelectorAll('.navpage__link').forEach(link => {
            link.classList.remove('active');
            link.parentElement.classList.remove('active'); // Remove active from parent <li>
        });

        // Add 'active' class to the clicked link and its parent <li>
        this.classList.add('active');
        this.parentElement.classList.add('active'); // Add active to parent <li>
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.info__weight--cards');
    const controls = document.querySelectorAll('.info__weight--control');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            controls[i].classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
                controls[i].classList.add('active');
            }
        });
    }

    document.querySelectorAll('.info__weight--button.next').forEach(button => {
        button.addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });
    });

    document.querySelectorAll('.info__weight--button.prev').forEach(button => {
        button.addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });
    });

    controls.forEach(control => {
        control.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-slide')) - 1;
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Initialize the first slide
    showSlide(currentSlide);
});