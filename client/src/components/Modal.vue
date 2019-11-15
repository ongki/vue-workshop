<template>
  <div>
    <div class="modal" :class="{ 'is-active': show }">
      <div class="modal-background" />
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ title }}</p>
          <button
            class="delete"
            aria-label="close"
            @click="$emit('update:show', false)"
          />
        </header>
        <section class="modal-card-body">
          <slot />
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button class="button" @click="$emit('update:show', false)">
            Cancel
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>
