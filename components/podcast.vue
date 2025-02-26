<template>
    <div class="podcast-wrapper">
        <audioplayer/>
    </div>
</template>

<style lang="scss" scoped>
.podcast-wrapper {
    @include mix.center($g: 8px);
    background-color: #D9D9D9;
    flex-wrap: wrap;
    width: 90vw;
    padding: 24px 16px;
    border-radius: 20px;
}
</style>