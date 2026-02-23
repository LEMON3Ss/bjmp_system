// Check if user is logged in
function checkSession() {
    fetch('session-check.php')
        .then(response => response.json())
        .then(data => {
            if (!data.logged_in) {
                window.location.href = 'login.html';
            } else {
                // Update user info
                document.getElementById('officerName').textContent = data.name || 'Officer';
                document.getElementById('officerEmail').textContent = data.email || '';
            }
        })
        .catch(error => {
            console.error('Session check error:', error);
            window.location.href = 'login.html';
        });
}

// Initialize dashboard on page load
document.addEventListener('DOMContentLoaded', function() {
    checkSession();
});
