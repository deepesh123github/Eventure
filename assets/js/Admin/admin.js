document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded Successfully!");

    const events = [
        {
            id: 1,
            title: "Kedatangan Makhluk Bekasi, Awwe & Pican di Sidang",
            description: "To provide flexible, inspiring workspaces that foster creativity, collaboration, and professional growth.",
            location: "Podcast Seminggu",
            date: "2024-09-18",
            time: "19:00",
            category: "Standup Comedy",
            image: "/images/basketball.png",
            joinLink: "/Admin/admin_assets/Join.html",
            detailsLink: "/Admin/admin_assets/detail.html",
        },
        {
            id: 2,
            title: "Tech Meetup 2024",
            description: "A gathering of tech enthusiasts discussing the latest trends.",
            location: "Indore Tech Hub",
            date: "2024-09-10",
            time: "18:00",
            category: "Tech Event",
            image: "/images/basketball.png",
            joinLink: "/Admin/admin_assets/Join.html",
            detailsLink: "/Admin/admin_assets/detail.html",
        },
        {
            id: 3,
            title: "Machine Learning 2024",
            description: "A gathering of tech enthusiasts discussing the latest trends.",
            location: "Indore Tech Hub",
            date: "2024-09-10",
            time: "18:00",
            category: "Education",
            image: "/images/basketball.png",
            joinLink: "/Admin/admin_assets/Join.html",
            detailsLink: "/Admin/admin_assets/detail.html",
        }
    ];

    console.log("Events Data:", events);

    const eventContainer = document.querySelector(".row");
    if (!eventContainer) {
        console.error("Event container (.row) not found in the DOM.");
        return;
    }

    const searchInput = document.querySelector(".search-input");
    const filterButtons = document.querySelectorAll(".btn-filter");

    function renderEvents(filteredEvents) {
        console.log("Rendering Events:", filteredEvents);
        eventContainer.innerHTML = "";
        filteredEvents.forEach(event => {
            const eventCard = document.createElement("div");
            eventCard.classList.add("col-md-12");
            eventCard.innerHTML = `
                <div class="card event-card">
                    <img src="${event.image}" class="event-img" alt="Event Image">
                    <div class="card-body event-details">
                        <span class="badge bg-warning text-dark">${event.category}</span>
                        <a href="#" class="bookmark"><i class="fa-regular fa-bookmark"></i></a>
                        <h5 class="card-title mt-2">${event.title}</h5>
                        <p class="card-text text-muted">${event.description}</p>
                        <small><strong>Location:</strong> ${event.location}</small><br>
                        <small><strong>Date:</strong> ${event.date} at ${event.time}</small>
                        <div class="btn-container">
                            <a href="${event.joinLink}"><button class="btn btn-dark btn-buy">Join now</button></a>
                            <a href="${event.detailsLink}" class="see-details ms-3">View more</a>
                        </div>
                    </div>
                </div>`;
            eventContainer.appendChild(eventCard);
        });
    }

    renderEvents(events);

    // Debugging for button click
    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            console.log("Button Clicked:", this.textContent.trim());

            const filter = this.textContent.trim();
            let filteredEvents = events;

            if (filter === "Nearest Events") {
                filteredEvents = events.filter(event => event.location.includes("Indore"));
            } else if (filter === "Latest Event") {
                filteredEvents = [...events].sort((a, b) => 
                    new Date(b.date + " " + b.time) - new Date(a.date + " " + a.time)
                );
            }

            renderEvents(filteredEvents);
        });
    });

    // Search Debugging
    searchInput.addEventListener("input", function () {
        console.log("Search Input:", this.value);
        
        const searchTerm = this.value.toLowerCase();
        const filteredEvents = events.filter(event =>
            event.title.toLowerCase().includes(searchTerm) ||
            event.description.toLowerCase().includes(searchTerm) ||
            event.location.toLowerCase().includes(searchTerm)
        );
        renderEvents(filteredEvents);
    });

    // Debugging for "View More" click
    document.body.addEventListener("click", function (event) {
        const target = event.target.closest(".see-details");
        if (target) {
            event.preventDefault();
            const url = target.getAttribute("href");
            console.log("Redirecting to:", url);
            if (url) {
                window.location.href = url;
            }
        }
    });

});
