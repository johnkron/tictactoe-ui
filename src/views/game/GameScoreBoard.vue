<template>
  <div class="score-board">
    <span>O has {{ value.O }} wins</span>
    <h2>Score Board</h2>
    <span>X has {{ value.X }} wins</span>
  </div>
</template>
<style scoped>
    .score-board {
        position: absolute;
        top:0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 15px;
        background-color: #16a085;
        box-shadow: 10px solid #fff;
        padding: 20px;
        overflow-x: none;
    }
    .score-board h2 {
        margin: 0px;
    }
    .score-board span {
        float: right;
        font-size: 1.5em;
        font-weight: bold;
        margin-left: 20px;
    }
</style>
<script>
import { type } from 'os'

export default {
    name: 'GameScoreBoard',

    props: {
        value: {
            type: Object
            default: null
        }
    }
}
</script>