<template>
  <div class="players">
    <h1>Players: </h1>
  </div>
</template>
<style scoped>
    .players {
        position: fixed;
        left: 0;
        top:80px;
    }

</style>
<script>

export default {
    name: 'GamePlayers',

    props: {
        value: {
            type: Object,
            default: null,
            }
    }
}

</script>