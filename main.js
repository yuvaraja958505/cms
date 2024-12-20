 // Chart Data and Configuration
 const labels = ['Total Students', 'Total Staff', 'Total Courses', 'Total Subjects'];
 const data = [12, 17, 11, 22];
 const ctx = document.getElementById('histogramChart').getContext('2d');
 new Chart(ctx, {
     type: 'bar',
     data: {
         labels: labels,
         datasets: [{
             label: 'Frequency',
             data: data,
             backgroundColor: ['#f8d7da', '#d1ecf1', '#fff3cd', '#d4edda'],
             borderColor: '#ccc',
             borderWidth: 1
         }]
     },
     options: {
         responsive: true,
         plugins: {
             legend: { display: false }
         },
         scales: {
             x: { title: { display: true, text: 'Categories' } },
             y: { beginAtZero: true, title: { display: true, text: 'Count' } }
         }
     }
 });

 


 window.addEventListener('load', () => {
    document.querySelector('.admin-container').classList.add('loaded');
});
        // Elements
        const notificationIcon = document.getElementById('notification-icon');
const profileIcon = document.getElementById('profile-icon');
const notificationPopup = document.getElementById('notification-popup');
const profilePopup = document.getElementById('profile-popup');

// Toggle Notification Popup
notificationIcon.addEventListener('click', () => {
    notificationPopup.classList.toggle('show');
    profilePopup.classList.remove('show'); // Close profile popup
});

// Toggle Profile Popup
profileIcon.addEventListener('click', () => {
    profilePopup.classList.toggle('show');
    notificationPopup.classList.remove('show'); // Close notification popup
});

// Close popups if clicked outside
window.addEventListener('click', (e) => {
    if (!notificationIcon.contains(e.target) && !notificationPopup.contains(e.target)) {
        notificationPopup.classList.remove('show');
    }
    if (!profileIcon.contains(e.target) && !profilePopup.contains(e.target)) {
        profilePopup.classList.remove('show');
    }
});