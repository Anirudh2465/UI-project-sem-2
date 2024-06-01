document.getElementById('login-button').addEventListener('click', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
    var trueval = (username === 'epochUser') && (password === 'epochPass');
    if (trueval) {
        var welcomeWindow = window.open('index.html');
        welcomeWindow.onload = function() {
            welcomeWindow.postMessage({ loginSuccess: trueval, username: username }, '*');
        };

        console.log('Sent data:', { loginSuccess: trueval, username: username });
    } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.display = 'block';
    }
});
