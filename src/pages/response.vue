<template>
  <q-card class="my-card">
    <q-card-section v-html="getResponse"></q-card-section>
  </q-card>
</template>

<script>
import {mapGetters} from 'vuex'
export default{
  computed: mapGetters(['getResponse', 'getStatusColor'])
}
</script>

<style lang="stylus">
.my-card
  padding 20px
</style>
