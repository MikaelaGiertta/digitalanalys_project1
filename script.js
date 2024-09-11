document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var details = document.getElementById('details').value;

    // Simulate sending form data
    document.getElementById('form-response').textContent = 'Tack ' + name + '! Din förfrågan har skickats. Vi kontaktar dig på ' + email + ' snart.';

    // Clear form fields
    document.getElementById('contact-form').reset();
});
