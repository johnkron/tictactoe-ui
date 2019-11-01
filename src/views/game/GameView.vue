<template>
  <div class="game-container">
    <game-score-board v-model="score" />
    <game-players />
    <game-grid
      ref="gameGrid"
      @winner="updateScore"
      @markupdate="updatemark"
    />
    <button
      class="button"
      @click="playAgain"
    >
      Play again
    </button>
  </div>
</template>
<style scoped>
    .game-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .button {
        background-color: #34495e;
        border: 10px solid #2c3e50;
        color: white;
        padding: 30px 64px;
        text-align: none;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 16px 2px;
        cursor: pointer;
        
    }
</style>
<script>

import GameScoreBoard from './GameScoreBoard'
import GameGrid from './GameGrid'
import GamePlayers from './GamePlayers'

export default {
    name: 'GameView',

    components: {
        GameScoreBoard,
        GameGrid,
        GamePlayers
    },

    data: () => ({
        score: {
            O: 0,
            X: 0,
            mark: 'O',
        }, 
        
    }),

    methods: {
        updateScore(winner) {
            this.score[winner] = this.score[winner] + 1
            alert(winner + " winns");
        },
        
        updatemark(updatemark) {
            this.score.mark = updatemark
        },
        playAgain() {
            this.$refs.gameGrid.resetGame()
        },
        GamePlayers() {
            
        }
    }
}
</script>