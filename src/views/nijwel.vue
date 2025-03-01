<template>
  <div>
    <div class="d-flex justify-content-between">
      <h1 class="text-danger">Nijwel</h1>
      <button class="btn btn-sm btn-primary" @click="addPost()">
        Add Post
      </button>
    </div>
    <p class="text-danger">{{ message }}</p>
    <p>All Post</p>
    <ul>
      <Number
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @delete="handleDelete($event)"
        @fav="handleFav($event)"
      />
    </ul>
    <br />
    <p>Fev Post ({{ favPostCount }})</p>
    <ul>
      <Number
        v-for="post in favPosts"
        :key="post.id"
        :post="post"
        @delete="handleDelete($event)"
        @fav="handleFav($event)"
      />
    </ul>
    <br />
    <p>Not Fev Post ({{ notFavPostCount }})</p>
    <ul>
      <Number
        v-for="post in notFavPosts"
        :key="post.id"
        :post="post"
        @delete="handleDelete($event)"
        @fav="handleFav($event)"
      />
    </ul>
    <!-- <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul> -->
  </div>
</template>

<script>
import Number from "../components/Number.vue";
export default {
  name: "Nijwel",
  components: {
    Number,
  },
  data() {
    return {
      message: "Welcome to Nijwel",
      posts: [
        {
          id: 1,
          title: "Post 1",
          content: "This is the first post",
          fev: false,
        },
        {
          id: 2,
          title: "Post 2",
          content: "This is the first post",
          fev: false,
        },
        {
          id: 3,
          title: "Post 3",
          content: "This is the first post",
          fev: false,
        },
        {
          id: 4,
          title: "Post 4",
          content: "This is the first post",
          fev: true,
        },
        {
          id: 5,
          title: "Post 5",
          content: "This is the first post",
          fev: false,
        },
        {
          id: 6,
          title: "Post 6",
          content: "This is the first post",
          fev: false,
        },
        {
          id: 7,
          title: "Post 7",
          content: "This is the first post",
          fev: true,
        },
        {
          id: 8,
          title: "Post 8",
          content: "This is the first post",
          fev: false,
        },
        {
          id: 9,
          title: "Post 9",
          content: "This is the first post",
          fev: true,
        },
        {
          id: 10,
          title: "Post 10",
          content: "This is the first post",
          fev: false,
        },
      ],
    };
  },

  computed: {
    favPosts() {
      return this.posts.filter((post) => post.fev);
    },
    notFavPosts() {
      return this.posts.filter((post) => !post.fev);
    },
    favPostCount() {
      return this.posts.filter((post) => post.fev).length;
    },

    notFavPostCount() {
      return this.posts.filter((post) => !post.fev).length;
    },
  },

  methods: {
    handleDelete(id) {
      this.posts = this.posts.filter((post) => post.id !== id);
    },
    addPost() {
      this.posts.push({
        id: this.posts.length + 1,
        title: "Post " + (this.posts.length + 1),
      });
    },
    handleFav(id) {
      this.posts = this.posts.map((post) => {
        if (post.id === id) {
          post.fev = !post.fev;
        }
        return post;
      });
    },
  },
};
</script>

<style scoped></style>
