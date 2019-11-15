<template>
  <div>
    <PostsItem
      v-for="post in topPosts"
      :key="post.id"
      :item="post"
      :user="post.author"
      @upvote="onUpvote"
    />
  </div>
</template>

<script>
import api from "@/api";
import PostsItem from "@/components/PostItem.vue";
import eventBus from "@/event-bus";

export default {
  name: "TopPosts",
  components: {
    PostsItem
  },
  data: () => ({
    posts: []
  }),
  computed: {
    topPosts() {
      return this.posts.slice().sort((a, b) => b.votes.length - a.votes.length);
    }
  },
  methods: {
    async onUpvote(post) {
      const updatedPost = await api.upvotePost(post);
      const idx = this.posts.findIndex(p => p.id === updatedPost.id);
      if (idx >= 0) {
        this.posts.splice(idx, 1, updatedPost);
      }
    }
  },
  async created() {
    eventBus.$on("post-added", newPost => {
      this.posts.push(newPost);
    });
    this.posts = await api.getAllPosts();
  }
};
</script>
