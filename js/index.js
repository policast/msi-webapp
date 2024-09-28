function fillTags() {
    const tags = [
        "Sport",
        "Gesundheit",
        "Technik",
        "Wissenschaft",
        "Politik",
        "Kultur",
        "Wirtschaft",
        "Umwelt",
        "Kunst",
        "Geschichte",
        "Bildung",
        "Reisen",
        "Essen"
    ];
    const tagsHTML = document.getElementById('tags');
    for (var i = 0; i < tags.length; i++) {
        const tag = document.createElement('input');
        tag.type = 'checkbox';
        tag.className = 'checkboxtheme d-none';
        tag.id = `theme${i}`;
        tag.autocomplete = 'off';
        tag.onclick = writeCookie;

        const label = document.createElement('label');
        label.className = 'themetag';
        label.htmlFor = tag.id;
        label.textContent = tags[i];
        const selectedTags = JSON.parse(localStorage.getItem('selectedTags')) || [];
        if (selectedTags.includes(tags[i])) {
            tag.checked = true;
        }

        tagsHTML.appendChild(tag);
        tagsHTML.appendChild(label);
    }
}

function fetchPodcastFiles() {
    console.info("Podcast Files werden heruntergeladen");
}

function getPersonalizedPodcast() {
    const listenButton = document.getElementById('listenButton');
    listenButton.disabled = true;
    alert("Dein Podcast wird generiert");
    window.location.href = "podcast.html";
}

function writeCookie() {
    const selectedTags = [];
    const tags = document.querySelectorAll('.checkboxtheme');
    tags.forEach(tag => {
        if (tag.checked) {
            selectedTags.push(tag.nextElementSibling.textContent);
        }
    });
    localStorage.setItem('selectedTags', JSON.stringify(selectedTags));
    console.info(selectedTags);
}

