<template>
    <div class="themes-wrapper">
        <template v-for="(theme, index) in themes" :key="index">
            <input type="checkbox" :id="`${theme}-${index}`" autocomplete="off" class="theme-checkbox">
            <label class="theme-label" :for="`${theme}-${index}`">
                {{ theme }}
            </label>
        </template>
    </div>
</template>

<style lang="scss">
.themes-wrapper {
    @include mix.center();
    background-color: #D9D9D9;
    flex-wrap: wrap;
    width: 90vw;
    padding: 24px 0;
    border-radius: 20px;
}

.theme-label {
    cursor: pointer;
    background-color: #fff;
    padding: 4px 14px;
    border: solid 1px black;
    border-radius: 25px;
}

input.theme-checkbox:checked+.theme-label {
    background-color: black;
    color: white;
}

input.theme-checkbox:disabled+.theme-label {
    background-color: rgb(196, 189, 189);
    color: white;
}

input.theme-checkbox:checked+.theme-label::before {
    content: url(../assets/images/check.svg);
    height: 20px;
    width: 20px;
    filter: invert(1);
    padding-right: 5px;
}
</style>

<script lang="ts" setup>
let themes: string[] = ["Wirtschaft",
    "Schulwesen",
    "Finanzen & Haushalt",
    "Bau & Stadtentwicklung",
    "Verkehr & Mobilität",
    "Soziales & Integration",
    "Umwelt & Nachhaltigkeit",
    "Sicherheit & Ordnung",
    "Kultur & Freizeit",
    "Gesundheit & Soziales",
    "Digitalisierung & Verwaltung"]


</script>