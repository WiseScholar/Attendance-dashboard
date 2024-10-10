// Function to handle navigation
function navigateTo(page) {
    const content = document.getElementById('content');
    
    switch(page) {
        case 'attendance':
            content.innerHTML = `
                <h2>Attendance Sheet</h2>
                <p>This is where the attendance sheet will go.</p>
                <a href="/attendance.html">Go to Attendance Sheet</a>
            `;
            break;
        case 'history':
            content.innerHTML = `
                <h2>Attendance History</h2>
                <p>This is where the attendance history will be displayed.</p>
            `;
            break;
        case 'reports':
            content.innerHTML = `
                <h2>Statistics & Reports</h2>
                <p>View detailed statistics and reports here.</p>
            `;
            break;
        case 'settings':
            content.innerHTML = `
                <h2>Settings</h2>
                <p>Manage settings for the attendance system here.</p>
            `;
            break;
        default:
            content.innerHTML = `
                <h2>Select a feature to begin</h2>
                <p>Use the navigation bar above to access different features.</p>
            `;
    }
}
