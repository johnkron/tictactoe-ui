<template>
  <div id="app">
    <h1>Tic Tac Toe</h1>
    <game-view />
  </div>
</template>
<style>

body {
  background-color: rgba(180, 180, 180, 0.1);
}
body h1 {
  text-transform: uppercase;
  color:grey;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<script>

import GameView from './views/game/GameView'

export default {
  name: 'app',
  components: {
    GameView
  }
}
</script>