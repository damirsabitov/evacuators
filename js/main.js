document.querySelectorAll('.navpage__link').forEach(link => {
    link.addEventListener('click', function(event) {
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