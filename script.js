// Change text content when the button is clicked
document.getElementById('change-text-button').addEventListener('click', function() {
    document.getElementById('text-content').textContent = "The text has been changed dynamically!";
});

// Toggle background color when the button is clicked
document.getElementById('toggle-style-button').addEventListener('click', function() {
    const body = document.body;
    body.style.backgroundColor = body.style.backgroundColor === 'lightyellow' ? 'white' : 'lightyellow';
});

// Add a new element to the DOM when the button is clicked
document.getElementById('add-element-button').addEventListener('click', function() {
    const newElement = document.createElement('div');
    newElement.classList.add('new-element');
    newElement.textContent = "This is a new dynamically added element!";
    
    const container = document.getElementById('container');
    container.appendChild(newElement);
});
