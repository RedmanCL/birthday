<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>

    </q-header>



    <q-page-container
    style="background-color: white; height: 100vh; margin: 0px; padding: 0px;
    box-sizing: border-box;">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',


  setup () {

  }
})
</script>
