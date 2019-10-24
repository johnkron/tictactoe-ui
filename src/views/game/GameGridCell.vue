<template>
    <div @click="markCell" class="cell">{{ mark }}</div>
</template>
<style scoped>
    .cell {
        display:flex;
        flex-direction: column;
        border: 6px solid #2c3e50;
        width: 33.333%;
        height: 90px;
        font-size: 3.5em;
        font-family: 'Gochi Hand', sans-serif;
    }
    .cell:hover {
        background-color: #7f8c8d;
    }
</style>
<script>
export default {
    name: 'GameGridCell',

    data: () => ({
        mark: ''
    }),

    props: {
        value: String,
        name: String
    },

    created() {
        let me = this
        me.$bus.$on('clearCell', () => {
            me.mark = ''
        })
    },

    methods: {
        markCell() {
            if (this.$parent.gameLocked) {
                return
            }
            if (this.mark.length > 0) {
                return
            }                               
            this.mark = this.$parent.currentMark
            this.$emit('mark', this.name, this.mark)
        }
    }
}
</script>