<template>
  <div class="todoapp">
    <h1 class="todoapp__title">Todos</h1>
    <input
      type="text"
      placeholder="what chores do you have to do?"
      class="todoapp__new-todo"
      @blur="printEvent"
    />

    <div class="main">
      <div class="toggle-all"></div>
      <label for=""></label>

      <div class="todo-list">
        <ul>
          <li class="todo-list__item editing">
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label class="description">Buy milk</label>
            </div>

            <input class="edit" value="Buy milk" />
            <div class="destroy"></div>
          </li>
          <li class="todo-list__item">
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label class="description">Buy milk</label>
            </div>

            <input class="edit" value="Buy milk" />
            <div class="destroy"></div>
          </li>
          <li class="todo-list__item completed">
            <div class="view">
              <input class="toggle" type="checkbox" />
              <label class="description">Buy milk</label>
            </div>

            <input class="edit" value="Buy milk" />
            <div class="destroy"></div>
          </li>
        </ul>
      </div>

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
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
            <a> Lorem Ipsum </a>
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class ToDoView extends Vue {
  printEvent(event: any) {
    console.log(event);
  }
}
</script>
