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
        let song_html = "<div class='song-card'> <h2>";
        song_html += recommendations[i].track_name;
        song_html += "</h2> <h3>";
        song_html += recommendations[i].artists;
        song_html += "</h3> <h4>";
        song_html += recommendations[i].album_name;
        song_html += "</h4> <h4>Duration (ms): ";
        song_html += recommendations[i].duration_ms;
        song_html += "</h4> <h4>Energy: ";
        song_html += recommendations[i].energy;
        song_html += "</h4> </div>";

        song_grid.innerHTML += song_html;
    }
}

const form = document.querySelector("form");
form.addEventListener("submit", Recommend);