<template>
    <div class="themes-wrapper">

        <template v-for="(theme, index) in themes" :key="index">
            <input type="checkbox" :id="`${index}`" autocomplete="off" class="theme-checkbox d-none"
                v-model="checkedThemes[index]">
            <label class="theme-label" :for="`${index}`">
                {{ theme }}
            </label>
        </template>

    </div>
</template>

<style lang="scss" scoped>
.themes-wrapper {
    @include mix.center($g: 8px);
    background-color: #D9D9D9;
    flex-wrap: wrap;
    width: 90vw;
    padding: 24px 16px;
    border-radius: 20px;
}

.theme-label {
    cursor: pointer;
    background-color: #fff;
    padding: 10px 14px;
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
import { ref, onMounted, watch } from 'vue';

let themes = ref(["Wirtschaft",
    "Schulwesen",
    "Finanzen & Haushalt",
    "Bau & Stadtentwicklung",
    "Verkehr & Mobilität",
    "Soziales & Integration",
    "Umwelt & Nachhaltigkeit",
    "Sicherheit & Ordnung",
    "Kultur & Freizeit",
    "Gesundheit & Soziales",
    "Digitalisierung & Verwaltung"]);

const checkedThemes = ref<Record<number, boolean>>({});

onMounted(() => {
    const saved = localStorage.getItem('checkedThemes');

    if (saved) {
        checkedThemes.value = JSON.parse(saved);
    } else {
        themes.value.forEach((_, index) => {
            checkedThemes.value[index] = false;
        });
    }
});

watch(
    checkedThemes,
    (newVal) => {
        localStorage.setItem('checkedThemes', JSON.stringify(newVal));
    },
    { deep: true },
);

</script>