<script lang="ts" setup>
import { ref } from 'vue'

const playerOpen = ref(false);

function togglePlayer() {
    playerOpen.value = !playerOpen.value
}

</script>

<template>
    <div class="player-wrapper" v-if="playerOpen">

        <div class="weekAndThemes">
            <div class="week"><img src="../assets/images/arrow.svg" @click="togglePlayer()"> #38</div>
            <div class="themes">
                <h5>Dein Podcast zu den Themen Schulwesen , Wirtschaft - Verkehr</h5>
            </div>
            <img class="playButton" src="../assets/images/play-circle.svg">
        </div>
    </div>

    <div class="player-wrapper fullPlayer" v-else>
        <div class="weekAndThemes">
            <div class="week"><img src="../assets/images/arrow.svg" @click="togglePlayer()"> #38</div>
            <div class="themes">
                <h5>Dein Podcast zu den Themen Schulwesen , Wirtschaft - Verkehr</h5>
            </div>
        </div>
        <div class="playStatus">
            <div class="currentPlayTime">00:00</div>
            <div class="playProgress"></div>
            <div class="fullPlayTime">10:00</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.player-wrapper {
    @include mix.center($g: 8px);
    flex-wrap: wrap;
    width: 25vw;
    padding: 8px;
    border-radius: 20px;
    border: 2px solid black;
}

.weekAndThemes {
    @include mix.center($g: 0px);
    font-size: 20px;
    width: 100%;
}

.week {
    @include mix.center($g: 8px);
    width: 20%;
    font-weight: 700;

    img {
        cursor: pointer;
    }
}

.themes {
    width: 65%;
    text-align: center;
}

.playButton {
    cursor: pointer;
    width: 15%;
    aspect-ratio: 1/1;
}

.fullPlayer {
    padding-top: 6px;
    animation: grow 2s ease-out;

    .weekAndThemes {
        .week {
            width: 25%;
        }

        .themes {
            width: 75%;
        }
    }
}

.playStatus{
    @include mix.center($jc:flex-start);
    width: 95%;
    
    .currentPlayTime , .fullPlayTime{
        width: 10%;
    }
    .playProgress{
        width: 80%;
    }
}
</style>
