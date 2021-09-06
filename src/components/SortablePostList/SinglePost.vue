<template>
  <div class="flex max-w-sm rounded overflow-hidden shadow-lg bg-gray-200 my-2">
    <div class="w-10/12 p-3">
      <p lass="text-3xl">{{ post.title }}</p>
    </div>
    <div class="w-2/12 flex flex-col">
      <button @click="Upfn()" v-if="arrIndex != 0"><Up /></button>
      <button @click="downfn()" v-if="arrIndex != length - 1"><Down /></button>
    </div>
  </div>
</template>


<script>
import Up from "../SVGs/Up";
import Down from "../SVGs/Down";

export default {
  components: {
    Up,
    Down,
  },
  props: ["post", "length", "arrIndex"],
  emits: ["sorting-post"],
  setup(props, context) {
    const downfn = () => {
      let payload = {
        index: props.arrIndex,
        isUp: false,
      };
      console.log(payload);
      context.emit("sorting-post", payload);
    };
    const Upfn = () => {
      let payload = {
        index: props.arrIndex,
        isUp: true,
      };
      context.emit("sorting-post", payload);
    };

    return { downfn, Upfn };
  },
};
</script>