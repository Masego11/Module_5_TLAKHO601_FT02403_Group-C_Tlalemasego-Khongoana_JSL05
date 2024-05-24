
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    { title: "Above All Else", artist: "Juanita Bynum", genre: "Gospel"},
    { title: "Bring Your Heart To Mine", artist: "Luther Vandross", genre: "R&B"},
    { title: "Izwi", artist: "Atwork Sounds", genre: "House"},
    { title: "Everybody's Got to Learn Sometime", artist: "Zucchero", genre: "Pop"},
    { title: "Sideways", artist: "Cleo Sol", genre: "R&B/Soul"},
    
];

const guardians = {
   "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "House",
    "Rocket": "Gospel",
    "Groot": "R&B",

};

function generatePlaylist(guardians, songs) {
  
    return Object.keys(guardians).map(guardian => {
        const preferredGenre = guardians[guardian]; 
        const playlist = songs.map(song => song.genre === preferredGenre && song.title).filter(item => item != false); //filter through songs 
        return {guardian, playlist};
    });
} 
function displayPlaylists(playlists) {
    const playlistsContainer = document.getElementById("playlists");
    playlists.forEach(({guardian, playlist}) => {
        const playlistDiv = document.createElement("div");
        playlistDiv.classList.add("playlist");

       const guardianName = document.createElement("h2");
        guardianName.textContent = `${guardian}'s Playlist`;
        playlistDiv.appendChild(guardianName);

       const songList = document.createElement("ul");
        playlist.forEach(song => {
            const songTitle = document.createElement("li");
            songTitle.textContent = song;
            songList.appendChild(songTitle);
        
        });
    

       playlistDiv.appendChild(songList);
        playlistsContainer.appendChild(playlistDiv);
    })};


const playlists = generatePlaylist(guardians, songs);
displayPlaylists(playlists);


