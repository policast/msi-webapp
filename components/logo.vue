<template>
    <div class="logo-wrapper">
        <img src="../assets/images/logo.svg">
        <h1>Münster Interessiert's</h1>
        <h3>Dein Info-Podcast aus dem Rat</h3>
        <h4>Hier ist dein Podcast der Woche</h4>

    </div>
</template>

<style lang="scss">
.logo-wrapper {
    @include mix.center();
    flex-direction: column;
    padding: 16px;

    img {
        margin: 5vh 0 16px 40px;
    }

    h1 {
        font-size: 60px;
        font-weight: 700;
        letter-spacing: 5px;
    }

    h3 {
        margin-top: -8px;
        font-size: 30px;
        font-weight: 200;
        word-spacing: 12px;
        letter-spacing: 8px;
    }

    h4 {
        padding-top: 8px;
        font-size: 25px;
        font-weight: 400;
        letter-spacing: 11px;
    }
}
</style>
