<template>
  <footer class="footer">
    <div class="todo-count"><strong>1</strong> item left</div>
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

    <button class="clear-completed">Clear completed</button>

    <div class="info">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
        <a> Lorem Ipsum </a>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class FooterList extends Vue {}
</script>

<style></style>
