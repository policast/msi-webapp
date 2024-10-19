const tags = [
    "Sport",
    "Gesundheit",
    "Technik",
    "Wissenschaft",
    "Politik",
    "Verkehr",
    "Wirtschaft",
    "Umwelt",
    "Kunst",
    "Geschichte",
    "Bildung",
    "Reisen",
    "Schule"
];

/**
 * Render the each checkboxes to Index.html by using tags array
 */
function fillTags() {
    const tagsHTML = document.getElementById('tags');
    for (let i = 0; i < tags.length; i++) {
        const tag = document.createElement('input');
        const label = document.createElement('label');

        setTag(tag,i)
        setLabel(label,tag,i)
        loadLocalStorage(tag,i)
        
        tagsHTML.appendChild(tag);
        tagsHTML.appendChild(label);
    }
}

/**
 * 
 * @param {string} label - dom adress for label
 * @param {string} tag - dom adress for checkbox
 * @param {string} i - index count
 */
function setLabel(label,tag,i) {
    label.className = 'themetag';
    label.htmlFor = tag.id;
    label.textContent = tags[i];
}

/**
 * Check the LocalStorage for tags, check them when true
 * 
 * @param {string} tag - dom adress for checkbox
 * @param {string} i - index count
 */
function loadLocalStorage(tag,i) {
    const selectedTags = JSON.parse(localStorage.getItem('selectedTags')) || [];
    if (selectedTags.includes(tags[i])) {
        tag.checked = true;
    }
}

/**
 * Set the Values for tag element
 * 
 * @param {string} tag - dom adress for checkbox
 * @param {string} i - index count
 */
function setTag(tag,i) {
    tag.type = 'checkbox';
    tag.className = 'checkboxtheme d-none';
    tag.id = `theme${i}`;
    tag.autocomplete = 'off';
    tag.onclick = writeLocalStorage;
    checkDisable(tags[i],tag);
}

/**
 * Disable all Tags which are not 'Umwelt , Schule or Verkehr'
 * 
 * @param {Array} tagsIndex 
 * @param {string} tag 
 * @returns 
 */
function checkDisable(tagsIndex,tag) {
    if (tagsIndex == 'Umwelt' || tagsIndex == 'Schule' || tagsIndex == 'Verkehr' ) {
        
    } else {
        return tag.disabled = true;
    }
}

/**
 * save selected themes in localStorage
 */
function writeLocalStorage() {
    const selectedTags = [];
    const tags = document.querySelectorAll('.checkboxtheme');

    tags.forEach(tag => {
        if (tag.checked) {
            selectedTags.push(tag.nextElementSibling.textContent);
        }
    });

    localStorage.setItem('selectedTags', JSON.stringify(selectedTags));
}