<template>
     <div class="grid">
        <div class="row row-1">
            <game-grid-cell @mark="markCell" name="1" />
            <game-grid-cell @mark="markCell" name="2" />
            <game-grid-cell @mark="markCell" name="3" />
        </div>
        <div class="row row-2">
           <game-grid-cell @mark="markCell" name="4" />
           <game-grid-cell @mark="markCell" name="5" />
           <game-grid-cell @mark="markCell" name="6" />
        </div>
        <div class="row row-3">
            <game-grid-cell @mark="markCell" name="7" />
            <game-grid-cell @mark="markCell" name="8" />
            <game-grid-cell @mark="markCell" name="9" />
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
            4: '', 5: 'X', 6: 'X',
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
            if (this.currentMark === '0') {
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