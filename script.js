let num_recs = 16;


// OnSubmit: Recommender Algorithm (randomize, filter by genre)
function Recommend(event) {

    event.preventDefault();

    let genre = document.getElementById('genre').value;
    
    // Extract num_cards songs of chosen genre at random
    let recommendations = [];

    // Shuffle
    all_songs.sort(() => Math.random() - 0.5);

    // Get first n genre matches
    for (let song of all_songs) {
        if (song.track_genre == genre) {
            recommendations.push(song);
        }
        if (recommendations.length >= num_recs) {
            break;
        }
    }

    // Populate cards
    let song_grid = document.querySelector('.song-grid');
    song_grid.innerHTML = "";
    // Create song-card, add to song-grid
    for (let i = 0; i < recommendations.length; ++i) {
        let song_html = "<div class='song-card'> <div class='card-inner'> <div class='card-front'> <h2>" + 
        recommendations[i].track_name + 
        "</h2> <h3>" + 
        recommendations[i].artists + 
        "</h3> <h4>" + 
        recommendations[i].album_name + 
        "</h4> <h5> <img src='icons/time.svg' alt='Duration icon' class='card-icon'> Duration (ms): " + 
        recommendations[i].duration_ms + 
        "</h5> <h5> <img src='icons/energy.svg' alt='Energy icon' class='card-icon'> Energy: " + 
        recommendations[i].energy + 
        "</h5> </div> <div class='card-back'> <h6> Explicit: " + 
        recommendations[i].explicit + 
        "</h6> <h6>Popularity: " +
        recommendations[i].popularity + 
        "</h6> <h6>Danceability: " +
        recommendations[i].danceability + 
        "</h6> <h6>Key: " +
        recommendations[i].key + 
        "</h6> <h6>Tempo: " +
        recommendations[i].tempo + 
        "</h6> </div> </div> </div>";
        
        song_grid.innerHTML += song_html;
    }
}

const form = document.querySelector("form");
form.addEventListener("submit", Recommend);