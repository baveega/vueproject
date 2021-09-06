<template>
  <p class="text-3xl text-white pb-5">Sortable Post List</p>
  <transition-group name="flip-list">
    <SinglePost
      v-for="(post, index) in posts"
      :post="post"
      :length="posts.length"
      :arrIndex="index"
      :key="post.id"
      @sorting-post="(e) => $emit(`sorting-post`, e)"
    />
  </transition-group>
</template>

<script>
import SinglePost from "./SinglePost";
export default {
  components: {
    SinglePost,
  },
  props: ["posts"],
  emits: ["sorting-post"],
};
</script>

<style scoped>
.flip-list-move {
  transition: transform 0.8s ease;
}
</style>