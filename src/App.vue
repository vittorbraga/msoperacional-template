<template>
  <v-app>
    <v-app-bar class="px-2" app color="primary" dark>
      <h5 color="white">MS Operacional</h5>
    </v-app-bar>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>
