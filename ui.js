document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.char-type-btn').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
        });
    });
});