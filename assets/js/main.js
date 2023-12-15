
const pageList = [
    'home',
    'about',
    'skills',
    'works',
    'resume',
    // 'hobbies',
    'social',
    // 'open_source',
    'contact_me',
]

const fetchAndChangeContent = (page, content_div_id) => {
    fetch(`pages/${page}.html`)
    .then(response => response.text())
    .then(data => {
        document.getElementById(content_div_id).innerHTML = data;
        showSlide();
    })
    .catch(error => console.error('Error fetching HTML file:', error));
}

// On click change the content from page file
pageList.map(page => {
    document.getElementById(page).addEventListener('click', (event) => {
        event.preventDefault();
        const scrollPosition = window.scrollY || window.pageYOffset; // Save initial position
        fetchAndChangeContent(page, 'content')
        document.querySelectorAll('#sidebar-nav ul li').forEach(item => {
            item.classList.remove('highlight')
        })
        document.getElementById(page).classList.add('highlight');

        window.scrollTo(0, scrollPosition); // Retain initial position
        fetchAndChangeContent('slider', 'slider') // If slider in any page, load the slider

    });
})

// On page load homepage by default
document.addEventListener('DOMContentLoaded', function() {
    fetchAndChangeContent('resume', 'content') // load home page by default
    fetchAndChangeContent('slider', 'slider') // If slider in any page, load the slider
    document.getElementById('home').classList.add('highlight');
});
