function validateForm() {
    // Reset error messages
    document.getElementById('namaError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('nopeError').innerHTML = '';

    // Get form values
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var nope = document.getElementById('nope').value;

    // Validate Nama
    if (nama.trim() === '') {
        document.getElementById('namaError').innerHTML = 'Nama is required';
        return false;
    }

    // Validate Email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerHTML = 'Invalid email address';
        return false;
    }

    // Validate Nomor Telepon
    if (nope.trim() === '' || isNaN(nope)) {
        document.getElementById('nopeError').innerHTML = 'Nomor Telepon is required and must be a number';
        return false;
    }

    // Form is valid
    alert('Form submitted successfully!');
    return true;
}