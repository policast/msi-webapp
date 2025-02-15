<template>
    <div>
        <section class="logo-section">
            <logo />
        </section>

        <section class="about-us-section center">
            <Aboutus />
        </section>

        <section class="pick-themes-section center">
            <Themes />
        </section>

        <section class="show-picked-podcasts center">
        </section>
    </div>
</template>

<script setup>
useHead({
    titleTemplate: "Münster Interessiert's",
})
</script>

<style lang="scss">
 .center{
    @include mix.center();
    padding: 20px 0;
 }
</style>