import Vue from 'vue'

const eventBus = new Vue()

export default Vue.mixin({

  computed: {

    $bus() {
      return eventBus
    },
  }
})