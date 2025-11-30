const albums = {
    1: ["1","2","3","4","5","6","7","8","9","10"],
    2: ["11","12","13","14","15","16","17","18","19","20"],
    3: ["21","22","23","24","25","26","27","28","29","30"],
    4: ["31","32","33","34","35","36","37","38","39","40"],
    5: ["41","42","43","44","45","46","47","48","49","50"]
};

function openAlbum(id) {
    document.getElementById("albumViewer").classList.remove("hidden");
    const container = document.getElementById("albumImages");
    container.innerHTML = "";

    albums[id].forEach(num => {
        container.innerHTML += `
            <img src="https://picsum.photos/seed/${num}/800/600">
        `;
    });
}

function closeAlbum() {
    document.getElementById("albumViewer").classList.add("hidden");
}
