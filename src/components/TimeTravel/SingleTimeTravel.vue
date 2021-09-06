<template>
  <div class="flex max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 my-2">
    <div class="w-10/12 p-3">
      <p lass="text-3xl">
        {{ str }}
      </p>
    </div>
    <div class="w-2/12 flex flex-col">
      <button @click="$emit(`time-travel`, index)" style="background-color: #00FF00">Time Travel</button>
    </div>
  </div>
</template>


<script>
import { computed } from "vue";

export default {
  props: ["action", "index"],
  emits: ["time-travel"],
  setup(props) {
    const str = computed(() => {
      return `Moved ${props.action.post.title} from index ${props.action.old} to index
          ${props.action.new}`;
    });
    return { str };
  },
};
</script>s