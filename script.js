// 🎬 Gestion dynamique des vidéos et des playlists
document.addEventListener("DOMContentLoaded", function () {
    loadPlaylists(); // Charger les playlists dès le chargement de la page
});

// 📌 Charger dynamiquement les playlists
function loadPlaylists() {
    const playlists = [
        { title: "Feuilletons Kabyles", thumbnail: "assets/feuilleton.jpg", id: "feuilletons" },
        { title: "Court-métrages", thumbnail: "assets/court-metrage.jpg", id: "court-metrages" },
        { title: "Vidéos Kabyles", thumbnail: "assets/videos.jpg", id: "videos-kabyles" },
        { title: "Culture et Traditions", thumbnail: "assets/culture.jpg", id: "culture" }
    ];

    let container = document.getElementById("playlists");
    if (!container) return;

    container.innerHTML = ""; // Effacer tout avant de charger

    playlists.forEach((playlist) => {
        let div = document.createElement("div");
        div.classList.add("category-card");
        div.innerHTML = `
            <img src="${playlist.thumbnail}" alt="${playlist.title}">
            <h3>${playlist.title}</h3>
        `;
        div.addEventListener("click", function () {
            loadVideos(playlist.id, playlist.title);
        });
        container.appendChild(div);
    });
}

// 🎬 Charger les vidéos de la playlist sélectionnée
function loadVideos(playlistId, playlistTitle) {
    const videos = {
        "feuilletons": [
            { title: "Épisode 1", videoUrl: "https://example.com/video1.mp4" },
            { title: "Épisode 2", videoUrl: "https://example.com/video2.mp4" }
        ],
        "court-metrages": [
            { title: "Film 1", videoUrl: "https://example.com/court1.mp4" },
            { title: "Film 2", videoUrl: "https://example.com/court2.mp4" }
        ],
        "videos-kabyles": [
            { title: "Chanson 1", videoUrl: "https://example.com/video3.mp4" },
            { title: "Chanson 2", videoUrl: "https://example.com/video4.mp4" }
        ],
        "culture": [
            { title: "Documentaire 1", videoUrl: "https://example.com/doc1.mp4" },
            { title: "Documentaire 2", videoUrl: "https://example.com/doc2.mp4" }
        ]
    };

    let videoContainer = document.getElementById("video-container");
    if (!videoContainer) return;

    videoContainer.innerHTML = `<h2>${playlistTitle}</h2>`;

    if (videos[playlistId]) {
        videos[playlistId].forEach(video => {
            let div = document.createElement("div");
            div.classList.add("video-item");
            div.innerHTML = `
                <button onclick="playVideo('${video.videoUrl}')">${video.title}</button>
            `;
            videoContainer.appendChild(div);
        });
    }
}

// 🎥 Jouer la vidéo dans le lecteur
function playVideo(url) {
    let player = document.getElementById("video-player");
    if (player) {
        player.src = url;
        player.play();
    }
}

// 🔄 Ajouter un système de dark mode
document.getElementById("dark-mode-toggle")?.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
