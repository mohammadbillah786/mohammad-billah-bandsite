import BandSiteApi from './band-site-api.js';

const bandSiteApi = new BandSiteApi();

async function loadAndRenderShows() {
    try {
        const shows = await bandSiteApi.getShows();

        shows.forEach(show => {
            const showDate = new Date(show.date).toLocaleDateString();

            renderShows({
                date: showDate,
                venue: show.place,
                location: show.location
            });
        });
    } catch (error) {
        console.error("Error", error);
    }
}

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
    button.style.zIndex = '10';

    button.addEventListener('mouseenter', function () {
        button.style.backgroundColor = 'black';
    })

    button.addEventListener('mouseleave', function () {
        button.style.backgroundColor = '';
    })

    button.addEventListener('click', function (){
        alert("Can't buy tickets just yet!");
    } )
    
    div.appendChild(button);
    
    anotherdiv4.appendChild(div)

    anotherdiv4.addEventListener('click', function () {
        if (anotherdiv4.style.backgroundColor === 'rgb(225, 225, 225)') {
            anotherdiv4.style.backgroundColor = '';  
        } else {
            anotherdiv4.style.backgroundColor = '#E1E1E1';  
        }
    });

    document.getElementById('anotherdiv').appendChild(anotherdiv4);
}

loadAndRenderShows();