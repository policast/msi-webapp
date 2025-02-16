<template>
    <div class="aboutUs-wrapper">
        <h2>Über Münster Interessiert's</h2>
        <div class="about-video">

            <ClientOnly>
                <iframe class="ms-Hack-Video"
                    src="https://www.youtube.com/embed/OuShG0X0udw?si=Gom9cHgs-deTD8iF&amp;start=2953"
                    title="YouTube video player" frameborder="0" allow="accelerometer; 
    ; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </ClientOnly>

            <ul>
                <li>Unserer Antrieb ist...</li>
                <li>Wir suchen ...</li>
                <li>Was brauchen wir..</li>
            </ul>
        </div>

        <div class="buttonreturntothemes"></div>
    </div>
</template>

<style lang="scss" scoped>
.aboutUs-wrapper {
    @include mix.center();
    flex-direction: column;
    background-color: #D9D9D9;
    width: 90vw;
    padding: 24px 0;
    border-radius: 20px;
}

h2 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 32px
}

.about-video {
    @include mix.center();

    ul {
        align-self: flex-start;
    }
}

.ms-Hack-Video {
    width: 40vw;
    height: 40vh;
}
</style>

<script setup lang="ts">

</script>