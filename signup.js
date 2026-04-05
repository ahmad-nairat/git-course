const userName = '', password = '', confirmPassword = '';

if (userName === '' || password === '' || confirmPassword === '') {
    console.log('Please fill in all fields.');
}

if (password !== confirmPassword) {
    console.log('Passwords do not match.');
}

console.log('Signup successful!');
