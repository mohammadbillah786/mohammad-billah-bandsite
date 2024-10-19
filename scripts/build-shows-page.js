const defaultShows = [
    { date: "Mon Sept 09 2024", venue: "Ronald Lane", location: "San Francsisco, CA"},
    { date: "Tue Sept 17 2024", venue: "Pier 3 East", location: "San Francsisco, CA"},
    { date: "Sat Oct 12 2024", venue: "View Lounge", location: "San Francsisco, CA"},
    { date: "Sat Nov 16 2024", venue: "Hyatt Agency", location: "San Francsisco, CA"},
    { date: "Fri Nov 29 2024", venue: "Moscow Center", location: "San Francsisco, CA"},
    { date: "Wed Dec 18 2024 ", venue: "Press Club", location: "San Francsisco, CA"},
]

function renderShows(show) {
    const anotherdiv4 = document.createElement('div');
    anotherdiv4.className = 'anotherdiv4';

    const div = document.createElement('div');
    div.className = 'shows-list';

    const anotherdiv = document.createElement('div');
    anotherdiv.className = 'another-div';

    let dateTitle = document.createElement('h5');
    dateTitle.innerText = 'DATE';
    dateTitle.className = 'titles'
    anotherdiv.appendChild(dateTitle);

    let date = document.createElement('h4');
    date.innerText = show.date;
    date.className = 'date-real'
    anotherdiv.appendChild(date);

    div.appendChild(anotherdiv);

    const anotherdiv2 = document.createElement('div');
    anotherdiv2.className = 'another-div'; 

    let venueTitle = document.createElement('h5');
    venueTitle.innerText = 'VENUE';
    venueTitle.className = 'titles'
    anotherdiv2.appendChild(venueTitle);

    let venue = document.createElement('h4');
    venue.innerText = show.venue;
    anotherdiv2.appendChild(venue);

    div.appendChild(anotherdiv2);

    const anotherdiv3 = document.createElement('div');
    anotherdiv3.className = 'another-div';

    let locationTitle = document.createElement('h5');
    locationTitle.innerText = 'LOCATION';
    locationTitle.className = 'titles'
    anotherdiv3.appendChild(locationTitle);

    let location = document.createElement('h4');
    location.innerText = show.location;
    anotherdiv3.appendChild(location);

    div.appendChild(anotherdiv3);

    let button = document.createElement('button');
    button.innerText = "BUY TICKETS";
    button.className = 'buy-tickets-button';
    div.appendChild(button);
    
    anotherdiv4.appendChild(div)

    document.getElementById('anotherdiv').appendChild(anotherdiv4);
}

defaultShows.forEach(renderShows)