<template>
  <div class="grid">
    <div class="row row-1">
      <game-grid-cell
        name="1"
        @mark="markCell"
      />
      <game-grid-cell
        name="2"
        @mark="markCell"
      />
      <game-grid-cell
        name="3"
        @mark="markCell"
      />
    </div>
    <div class="row row-2">
      <game-grid-cell
        name="4"
        @mark="markCell"
      />
      <game-grid-cell
        name="5"
        @mark="markCell"
      />
      <game-grid-cell
        name="6"
        @mark="markCell"
      />
    </div>
    <div class="row row-3">
      <game-grid-cell
        name="7"
        @mark="markCell"
      />
      <game-grid-cell
        name="8"
        @mark="markCell"
      />
      <game-grid-cell
        name="9"
        @mark="markCell"
      />
    </div>
  </div>
</template>
<style scoped>
    .grid {
        background-color: #34495e;
        color: #fff;
        width: 100%;
        border-collapse: collapse;
        max-width: 270px;
    }
    .row {
        display: flex;
        flex-direction: row;
        flex: 1 1 auto;
    }
</style>
<script>

import _ from 'lodash'
import GameGridCell from './GameGridCell'

export default {
    name: 'GameGrid',

    components: {
        GameGridCell,
    },

    data: () => ({
        cellGrid: {
            1: '', 2: '', 3: '',
            4: '', 5: '', 6: '',
            7: '', 8: '', 9: ''
        },
        currentMark: 'O',
        lastMark: null,
        winConditions: [
			[1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
			[1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
			[1, 5, 9], [3, 5, 7] // diagonals
        ],
        weHaveWinner: false,
        gameLocked: false,
    }),

    watch: {
        cellGrid: {
            handler() {
                let me = this
                _.each(me.winConditions, array => {
                    let valuesObject = _.pick(me.cellGrid, array)
                    let values = _.values(valuesObject)
                    me.weHaveWinner = _.every(values, v => !_.isEmpty(v) && values[0] === v)
                    if (me.weHaveWinner) {
                        me.gameLocked = true
                        me.$emit('winner', this.lastMark)
                        return false // break loop
                    }
                })
            
            },
            deep: true
        }
    },

    methods: {

        markCell(key, value) {
            if (this.gameLocked) {
                return // when the game is locked nothing should be updated
            }
            this.lastMark = this.currentMark
            this.cellGrid[key] = value
            if (this.currentMark === 'O') {
                this.currentMark = 'X'
            } else {
                this.currentMark = 'O'
            }
        },

        resetGame() {
            for(let i=1; i<9; i++) {
                this.cellGrid[i] = ''
            } 
            this.$bus.$emit('clearCell')
            this.unLockGame()
        },

        unLockGame() {
            this.gameLocked = false
        }
    }
}
</script>