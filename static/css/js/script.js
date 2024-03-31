document.addEventListener('DOMContentLoaded', function() {
    const deleteButtons = document.querySelectorAll('.delete-button');

    deleteButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            if (!confirm('Are you sure you want to delete this employee?')) {
                event.preventDefault();
            }
        });
    });

    const alertBox = document.querySelector('.alert-box');
    if (alertBox) {
        setTimeout(function() {
            alertBox.style.display = 'none';
        }, 5000); 
    }

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            const nameInput = form.querySelector('#name');
            const emailInput = form.querySelector('#email');
            const phoneInput = form.querySelector('#phone');
            if (!nameInput.value || !emailInput.value || !phoneInput.value) {
                event.preventDefault();
                alert('Please fill in all fields.');
            }
        });
    });
});
