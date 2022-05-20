<template>
  <div class="todoapp">
    <h1>Todos</h1>
    <input type="text" placeholder="what chores do you have to do?" class="new-todo" @blur="printEvent" >     

    <div class="main">
      <div class="toggle-all">
      </div>
      <label for=""></label>

      <div class="todo-list">
        <ul>
          <li class="">
            <div class="view">
                <input class="toggle" type="checkbox">
                <label>Buy milk</label>
            </div>
            <input class="edit" value="Buy milk">


            <!-- <div class="toggle"></div>
            <label for="">hola</label> -->

            <div class="destroy"></div>
          </li>
          <li>
            <div class="view">
              <input class="toggle" type="checkbox">
              <label>Buy milk</label>
            </div>
            <input class="edit" value="Buy milk">

            <div class="destroy"></div>
          </li>
          <li class="completed">
            <div class="view">
              <input class="toggle" type="checkbox">
              <label>Buy milk</label>
            </div>
            <input class="edit" value="Buy milk">

            <div class="destroy"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {

  },
})
export default class ToDoView extends Vue {

  printEvent(event: any) {
    console.log(event);
  }
}
</script>
