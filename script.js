// Albums (50 total images)
const albums = {
    1: ["Love", "Smile", "Together", "Heart", "Kiss", "Moment", "Dream", "Night", "Warm", "Forever"],
    2: ["Travel1","Travel2","Travel3","Travel4","Travel5","Travel6","Travel7","Travel8","Travel9","Travel10"],
    3: ["Date1","Date2","Date3","Date4","Date5","Date6","Date7","Date8","Date9","Date10"],
    4: ["Happy1","Happy2","Happy3","Happy4","Happy5","Happy6","Happy7","Happy8","Happy9","Happy10"],
    5: ["Love1","Love2","Love3","Love4","Love5","Love6","Love7","Love8","Love9","Love10"]
};

function openAlbum(id) {
    document.getElementById("albumViewer").classList.remove("hidden");
    const container = document.getElementById("albumImages");
    container.innerHTML = "";

    albums[id].forEach(name => {
        container.innerHTML += `
            <img src="https://picsum.photos/seed/${name}/900/700" onclick="openLightbox('${name}')">
        `;
    });
}

function closeAlbum() {
    document.getElementById("albumViewer").classList.add("hidden");
}

// Lightbox viewer
function openLightbox(name) {
    document.getElementById("lightbox").classList.remove("hidden");
    document.getElementById("lightbox-img").src = `https://picsum.photos/seed/${name}/1500/1000`;
    document.getElementById("lightbox-caption").innerHTML = name;
}

function closeLightbox() {
    document.getElementById("lightbox").classList.add("hidden");
}
