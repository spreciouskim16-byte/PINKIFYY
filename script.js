let quotes = [
    {
        song: "Until I Found You",
        artist: "Stephen Sanchez",
        quote: "I would never fall in love again until I found her."
    },

    {
        song: "Love Story",
        artist: "Taylor Swift",
        quote: "You’ll be the prince and I’ll be the princess."
    },

    {
        song: "Perfect",
        artist: "Ed Sheeran",
        quote: "Darling, just hold my hand."
    },

    {
        song: "Palayo Sa Mundo",
        artist: "Jolianne, Arthur Nery",
        quote: "At kung 'di pa tama sa mata ng tadhana ay panalangin ang tangi kong alay ."
    },

    {
        song: "Lifetime (Reimagined)",
        artist: "Ben & Ben",
        quote: "Is there a lifetime waiting for us? All this time, I have been yours."
    }
];

let currentQuote = 0;

function displayQuote() {
    document.getElementById("songTitle").textContent =
        quotes[currentQuote].song;

    document.getElementById("artist").textContent =
        quotes[currentQuote].artist;

    document.getElementById("quote").textContent =
        '"' + quotes[currentQuote].quote + '"';
}

function nextQuote() {
    currentQuote++;

    if (currentQuote >= quotes.length) {
        currentQuote = 0;
    }

    displayQuote();
}

function previousQuote() {
    currentQuote--;

    if (currentQuote < 0) {
        currentQuote = quotes.length - 1;
    }

    displayQuote();
}

function addQuote() {
    let song = document.getElementById("newSong").value;
    let artist = document.getElementById("newArtist").value;
    let quote = document.getElementById("newQuote").value;

    if (song === "" || artist === "" || quote === "") {
        alert("Please fill in all the boxes!");
        return;
    }

    quotes.push({
        song: song,
        artist: artist,
        quote: quote
    });

    currentQuote = quotes.length - 1;

    displayQuote();
    displaySongList();

    document.getElementById("newSong").value = "";
    document.getElementById("newArtist").value = "";
    document.getElementById("newQuote").value = "";

    alert("Quote added!");
}

function displaySongList() {
    let list = document.getElementById("songList");

    list.innerHTML = "";

    quotes.forEach(function(song, index) {
        let item = document.createElement("div");

        item.className = "song-item";

        item.innerHTML = `
            <strong>🎵 ${song.song}</strong>
            <small>${song.artist}</small>
        `;

        item.onclick = function() {
            currentQuote = index;
            displayQuote();
        };

        list.appendChild(item);
    });
}

function searchSongs() {
    let search = document
        .getElementById("searchBox")
        .value
        .toLowerCase();

    let items = document.querySelectorAll(".song-item");

    items.forEach(function(item) {
        let text = item.textContent.toLowerCase();

        if (text.includes(search)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

displayQuote();
displaySongList();
