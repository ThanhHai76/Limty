<template>
  <div>
    <div class="main-content d-flex flex-column">
      <div id="preloader" v-if="loading || firstLoading">
        <div id="status">
            <div class="loader">
                Loading...
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
            </div>
        </div>
    </div>
      <div>
        <slot></slot>
      </div>
      <!-- <span class="gotop" @click="scrollToTop()"><img src="@/assets/images/goto.png" alt=""></span> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      firstLoading: true
    }
  },
  components: {

  },
  created () {
    this.firstLoading = true
  },
  mounted () {
    setTimeout(() => {
      this.firstLoading = false
    }, 2000)
  },
  computed: {
    ...mapGetters({
      loading: 'loading/getDataLoading'
    })
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>
