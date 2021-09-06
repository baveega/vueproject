<template>
  <div class="flex h-screen bg p-20">
    <div class="w-1/2">
      <SortablePostList :posts="posts" @sorting-post="sortingPostFn" />
    </div>
    <div class="w-1/2">
      <TimeTravel :actions="actions" @time-travel="timeTravelFn" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Posts from "../util/Post";
import SortablePostList from "./components/SortablePostList";
import TimeTravel from "./components/TimeTravel";

export default {
  name: "App",
  components: {
    SortablePostList,
    TimeTravel,
  },
  setup() {
    const posts = ref([...Posts.Posts]);
    const actions = ref([]);

    const sortingPostFn = (payload) => {
      posts.value = swapFn(
        [...posts.value],
        payload.index,
        payload.isUp ? payload.index - 1 : payload.index + 1
      );

      let timeTravelPayload = {
        old: payload.index,
        new: payload.isUp ? payload.index - 1 : payload.index + 1,
        post: payload.isUp
          ? posts.value[payload.index - 1]
          : posts.value[payload.index + 1],
      };
      actions.value.push(timeTravelPayload);
    };

    const timeTravelFn = (index) => {
      let timeTravelArray = actions.value.slice(index).reverse();
      actions.value = [...actions.value.slice(0, index)]; // remaining actions

      let tmpPosts = [...posts.value];
      for (let i = 0; i < timeTravelArray.length; i++) {
        [tmpPosts[timeTravelArray[i].new], tmpPosts[timeTravelArray[i].old]] = [
          tmpPosts[timeTravelArray[i].old],
          tmpPosts[timeTravelArray[i].new],
        ];
      }
      posts.value = tmpPosts;
    };

    return { posts, actions, sortingPostFn, timeTravelFn };
  },
};

const swapFn = (array, oldIndex, newIndex) => {
  [array[oldIndex], array[newIndex]] = [array[newIndex], array[oldIndex]];
  return array;
};
</script>

<style  scoped>
.bg {
  background: linear-gradient(169deg, #6457b1 28.6%, #efefef 28.9%);
}
</style>