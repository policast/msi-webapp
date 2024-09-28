function playPodcast() {
    const podCastPlayer = document.getElementById('audioControll');
    const playIcon = document.getElementById('playIcon');
    const themes = document.getElementById('themesList')

    playIcon.classList.add('d-none');
    podCastPlayer.classList.remove('d-none');
    themes.classList.add('centertext');
}