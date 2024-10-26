function togglePassword() {
    const passwordInput = document.getElementById('password');
    const togglePasswordIcon = document.querySelector('.toggle-password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        togglePasswordIcon.textContent = '🙈'; // Change icon if needed
    } else {
        passwordInput.type = 'password';
        togglePasswordIcon.textContent = '👁️'; // Change icon if needed
    }
}
