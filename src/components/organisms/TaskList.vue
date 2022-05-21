<template>
  <div class="toggle-all"></div>
  <label for=""></label>

  <div class="todo-list">
    <ul>
      <li class="editing">
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>Buy milk</label>
        </div>
        <input class="edit" value="Buy milk" />

        <!-- <div class="toggle"></div>
            <label for="">hola</label> -->

        <div class="destroy"></div>
      </li>
      <li>
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>Buy milk</label>
        </div>
        <input class="edit" value="Buy milk" />

        <div class="destroy"></div>
      </li>
      <li class="completed">
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>Buy milk</label>
        </div>
        <input class="edit" value="Buy milk" />

        <div class="destroy"></div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
// import { Ref } from "vue-property-decorator";

// import ToggleAll from "@/components/organisms/TaskList.vue";

// // @Options({
// //   components: {
// //     ToggleAll,
// //   },
// // })
export default class TaskList extends Vue {
  //   @Ref() toggleAll!: ToggleAll;
}
</script>
