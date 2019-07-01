<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="settings" />
        </q-btn>

        <q-toolbar-title>
          Пегас
        </q-toolbar-title>

        <div>Пегас</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      side="right"
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <!--отправка-->
        <q-item tag="span">
          <q-item-section>
            <q-btn icon="play_arrow" @click="request" label="отправить"/>
          </q-item-section>
        </q-item>

        <q-item-label header>Настройки запроса</q-item-label>

        <!--Протокол-->
        <q-item tag="span">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label><q-select v-model="protocol" :options="protocols" label="протокол"  @change="change" /></q-item-label>
            <q-item-label caption>протокол</q-item-label>
          </q-item-section>
        </q-item>


        <!--Адрес-->
        <q-item tag="span">
          <q-item-section avatar>
            <q-icon name="local_post_office" />
          </q-item-section>
          <q-item-section>
            <q-item-label><q-input v-model="address" @change="change"/></q-item-label>
            <q-item-label caption>адрес</q-item-label>
          </q-item-section>
        </q-item>


        <!--Тип-->
        <q-item tag="span">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label><q-select v-model="type" :options="typeOptions" @change="change"/></q-item-label>
            <q-item-label caption>тип запроса</q-item-label>
          </q-item-section>
        </q-item>


        <q-item-label header>Параметры</q-item-label>

        <!--Параметры-->
        <q-item tag="span" v-for="(param, id) in params"  :key="id">
          <q-item-section>
            <q-item-label><q-input v-model="params[id].key"/></q-item-label>
            <q-item-label caption>ключ</q-item-label>
            <q-item-label><q-input v-model="params[id].val" @change="change"/></q-item-label>
            <q-item-label caption>значение</q-item-label>
            <q-item-label><q-btn icon="close" @click="delParam(id)" class="full-width q-mt-md"/></q-item-label>
          </q-item-section>
          <q-separator dark/>
        </q-item>

        <q-item tag="span">
          <q-item-section>
            <q-btn @click="addParams" label="добавить параметр"/>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { openURL } from 'quasar'
import Vue from 'vue'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      protocols: [
        "http",
        'https',
      ],
      typeOptions: [
        "GET",
        "POST",
        "DELETE",
        "PUT"
      ],
      address: "localhost",
      params: [],
      protocol: 'http',
      type: "GET"
    }
  },
  methods: {
    openURL,
    ...mapActions(['request']),
    ...mapMutations(['setSettings']),
    addParams(){
      Vue.set(this.params, this.params.length ,{key: "", val: ""})
    },

    delParam(id){
      this.$delete(this.params, id)
      this.change()
    },

    change(){
      this.setSettings({
        address: this.address,
        protocol: this.protocol,
        type: this.type,
        params: this.params,
      })
    }
  },

  watch: {
    protocol(){
      this.change()
    },

    type(){
      this.change()
    }
  }
}
</script>

<style>
</style>
