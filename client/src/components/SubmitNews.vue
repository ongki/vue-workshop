<template>
  <Modal
    :show="show"
    @update:show="$emit('update:show', false)"
    title="Add a new link"
  >
    <div class="container">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Text input"
            v-model="title"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">URL</label>
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Text input"
            v-model="url"
          />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <button class="button is-link" @click="onSubmit">Submit</button>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script>
import api from "@/api";
import eventBus from "@/event-bus";
import Modal from "@/components/Modal.vue";

export default {
  name: "SubmitNews",
  components: { Modal },
  props: {
    show: {
      type: Boolean,
      default: true
    },
    posts: []
  },
  data: () => ({
    title: null,
    url: null
  }),
  methods: {
    async onSubmit() {
      const newPost = await api.savePost(this.title, this.url);
      this.title = null;
      this.url = null;
      eventBus.$emit("post-added", newPost);
      this.$emit("update:show", false);
    }
  }
};
</script>
