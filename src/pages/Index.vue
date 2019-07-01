<template>
  <q-page class="row justify-center">
    <div class="col-7">
      <q-card>
        <q-card-section class="text-h6">
          <span v-html="getUrl"></span><br>
          Статус: <span v-html="getStatus"></span><br>
          Данные:
          <response/>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PageIndex',
  computed: mapGetters(['getAddress', 'getProtocol', 'getType', 'getParameters', 'getStatus', 'getUrl']),
  components: {
    response: () => import('./response.vue')
  }
}
</script>
