/* --- JAVASCRIPT LOGIC --- */

// 1. Initialize empty array to store events
let events = [
    {
        id: 1,
        name: "Summer Music Festival",
        date: "2026-07-15",
        location: "Central Park, NY",
        description: "A day of live music, food trucks, and fun in the sun."
    },
    {
        id: 2,
        name: "Tech Innovators Summit",
        date: "2026-09-22",
        location: "Convention Center, SF",
        description: "Meeting the brightest minds in technology and AI."
    }
];

// 2. Function to render events to the HTML
function renderEvents() {
    const container = document.getElementById('eventsContainer');
    container.innerHTML = ''; // Clear current content

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        
        eventCard.innerHTML = `
            <div class="card-image"></div>
            <div class="card-content">
                <div class="card-date">${event.date}</div>
                <h4 class="card-title">${event.name}</h4>
                <p class="card-location">📍 ${event.location}</p>
                <p>${event.description}</p>
                <br>
                <button class="delete-btn" onclick="deleteEvent(${event.id})">Delete</button>
            </div>
        `;
        container.appendChild(eventCard);
    });
}

// 3. Handle Form Submission
document.getElementById('addEventForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Stop page from reloading

    // Get values from input fields
    const name = document.getElementById('eventName').value;
    const date = document.getElementById('eventDate').value;
    const location = document.getElementById('eventLocation').value;
    const description = document.getElementById('eventDescription').value;

    // Create new event object
    const newEvent = {
        id: Date.now(), // Use timestamp as unique ID
        name: name,
        date: date,
        location: location,
        description: description
    };

    // Add to array and re-render
    events.push(newEvent);
    renderEvents();

    // Reset form
    this.reset();
    alert('Event Added Successfully!');
});

// 4. Function to delete an event
function deleteEvent(id) {
    if(confirm('Are you sure you want to delete this event?')) {
        events = events.filter(event => event.id !== id);
        renderEvents();
    }
}

// Initial render on page load
renderEvents();
