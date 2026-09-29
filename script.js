const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', function () {
  // Cek tipe input saat ini
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  
  // Ubah visual ikon mata (opsional)
  this.textContent = type === 'password' ? '👁️' : '🙈';
});