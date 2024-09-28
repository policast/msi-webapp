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

    if (selectedTags.length > 0) {
        let i = 0;
        audioOrder.push("audio/welcome_" + selectedTags[i] + ".mp3");
        audioOrder.push("audio/" + selectedTags[i] + ".mp3");
        i++;

        while(i < selectedTags.length) {
            audioOrder.push("audio/" + selectedTags[i] + ".mp3");
            i++;
        }

        audioOrder.push("audio/Abschluss.mp3");
        audioOrder.push("audio/Outro.mp3");
    } else {

    }
    console.info(audioOrder);
    return audioOrder;
    
}