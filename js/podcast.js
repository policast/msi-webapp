const topics = [
    "Umwelt",
    "Verkehr",
    "Schule"
]


function playPodcast() {
    const podCastPlayer = document.getElementById('audioControll');
    const playIcon = document.getElementById('playIcon');
    const themes = document.getElementById('themesList')

    playIcon.classList.add('d-none');
    podCastPlayer.classList.remove('d-none');
    themes.classList.add('centertext');
}

function buildAudioOrder() {
    const selectedTags = JSON.parse(localStorage.getItem('selectedTags')) || [];
    const audioOrder = [];

    if (selectedTags.length > 0 && selectedTags.length < topics.length) {
        audioOrder.push("audio/welcome_" + selectedTags.join("_") + ".mp3");
        let i = 0
        while (i < selectedTags.length) {
            audioOrder.push("audio/" + selectedTags[i] + ".mp3");
            i++;
        }
        audioOrder.push("audio/Abschluss.mp3");
    } else {
        audioOrder.push("audio/welcome_all.mp3");
        for (let index = 0; index < topics.length; index++) {
            audioOrder.push("audio/" + topics[index] + ".mp3");
        }
        audioOrder.push("audio/Abschluss.mp3");
    }
    console.info(audioOrder);
    return audioOrder;
}