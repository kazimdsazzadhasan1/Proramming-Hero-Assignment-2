function subscribe() {
    const emailInput = document.getElementById('email');
    const successMessage = document.getElementById('success-message');

    if (emailInput.value) {
        // You can add more validation here if needed
        successMessage.innerText = 'Subscription successful!';
        successMessage.style.display = 'block';

        // Clear the input field
        emailInput.value = '';

        // Hide the message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    } else {
        successMessage.innerText = 'Please enter a valid email address.';
        successMessage.style.color = 'red';
        successMessage.style.display = 'block';
    }
}