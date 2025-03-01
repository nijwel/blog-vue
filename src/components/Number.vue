<template>
  <div>
    <li
      class="list-group-item d-flex justify-content-between align-items-center px-2"
    >
      <span :class="{ fav: post.fev }">{{ post.title }}</span>
      <button class="btn btn-sm btn-danger mb-2" @click="handleDelete(post.id)">
        Delete Post
      </button>
      <button class="btn btn-sm btn-success mb-2" @click="handleFav(post.id)">
        <v-if>{{ post.fev ? "Unfav" : "Fav" }}</v-if>
      </button>
    </li>
  </div>
</template>

<script>
export default {
  name: "Number",
  props: ["post"],
  methods: {
    handleDelete(id) {
      //   console.log("Delete post with id: " + id);
      this.$emit("delete", id);
    },
    handleFav(id) {
      //   console.log("Fav post with id: " + id);
      this.$emit("fav", id);
    },
  },
};
</script>

<style scoped>
.fav {
  color: #0de62aea;
}
</style>
