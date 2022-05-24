<template>
  <nav class="filters">
    <ul>
      <li class="filters__item">
        <router-link
          :to="{ name: 'all' }"
          :class="$route?.params?.filter || 'selected'"
        >
          All
        </router-link>
      </li>
      <li class="filters__item">
        <router-link
          :to="{ name: 'filter', params: { filter: 'active' } }"
          :class="$route?.params?.filter == 'active' ? 'selected' : ''"
        >
          Active
        </router-link>
      </li>
      <li class="filters__item">
        <router-link
          :to="{ name: 'filter', params: { filter: 'completed' } }"
          :class="$route?.params?.filter == 'completed' ? 'selected' : ''"
        >
          Completed
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { Vue } from "vue-class-component";

export default class NavFooter extends Vue {}
</script>
