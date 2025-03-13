document.addEventListener('DOMContentLoaded', () => {
    // Edit Profile Button
    const editProfileBtn = document.getElementById('edit-profile');
    const profileInputs = document.querySelectorAll('.profile-form input');

    editProfileBtn.addEventListener('click', () => {
        profileInputs.forEach(input => {
            input.readOnly = !input.readOnly; // Toggle readonly state
        });

        if (editProfileBtn.textContent === 'Edit Profile') {
            editProfileBtn.textContent = 'Save Changes';
        } else {
            editProfileBtn.textContent = 'Edit Profile';
            alert('Profile updated successfully!');
        }
    });

    // Mark Task Complete Button
    const completeButtons = document.querySelectorAll('.complete-btn');

    completeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const row = button.closest('tr');
            const statusCell = row.querySelector('td:nth-child(4)');
            statusCell.textContent = 'Completed';
            button.disabled = true; // Disable button after marking complete
        });
    });
});