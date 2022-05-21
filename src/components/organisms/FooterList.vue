<template>
  <footer class="footer">
    <div class="todo-count"><strong>1</strong> item left</div>
    <nav class="filters">
      <ul>
        <li>
          <router-link
            :to="{ name: 'all' }"
            :class="$route?.params?.filter || 'selected'"
          >
            All
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'filter', params: { filter: 'active' } }"
            :class="$route?.params?.filter == 'active' ? 'selected' : ''"
          >
            Active
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'filter', params: { filter: 'completed' } }"
            :class="$route?.params?.filter == 'completed' ? 'selected' : ''"
          >
            Completed
          </router-link>
        </li>
      </ul>
    </nav>

    <div class="clear-completed">
      <button class="btn">Clear completed</button>
    </div>

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
