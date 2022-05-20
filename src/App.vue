<template>
  <!-- <nav>
    <router-link to="/">All</router-link> |
  </nav> -->
  <router-view/>
</template>

<script lang="ts">
  import { Vue } from 'vue-class-component';
  import "./scss/index.scss";

  export default class App extends Vue {}
</script>