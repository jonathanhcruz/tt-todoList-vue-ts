<template>
  <input
    :type="typeInput"
    :placeholder="placeholderInput"
    class="new-todo"
    @keyup.enter="eventInput"
  />
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class Input extends Vue {
  valInput = "";

  @Prop({ required: true, type: String }) readonly typeInput!: string;
  @Prop({ required: true, type: String }) readonly placeholderInput!: string;
  @Prop({ type: String }) readonly valueInput!: string;

  eventInput(event: KeyboardEvent): void {
    console.log(event);
  }
}
</script>
