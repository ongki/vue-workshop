<template>
  <div id="app">
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">YANS!</a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a href="/" class="navbar-item">Top</a>
          <a href="/new" class="navbar-item">New</a>
          <a
            href="/submit"
            @click.prevent="showModal = true"
            class="navbar-item"
            >Submit</a
          >
        </div>

        <div class="navbar-end">
          <!--div class="navbar-item">
            <div class="buttons">
              <a href="/register" class="button is-primary">
                <strong>Register</strong>
              </a>
              <a href="/login" class="button is-light">Log in</a>
              <button class="button is-light">Log out</button>
            </div>
          </div-->
        </div>
      </div>
    </nav>
    <TopPosts />
    <SubmitNews :show.sync="showModal" />
  </div>
</template>

<script>
import TopPosts from "@/pages/TopPosts.vue";
import SubmitNews from "@/components/SubmitNews.vue";

export default {
  name: "app",
  data() {
    return {
      showModal: false
    };
  },
  components: {
    SubmitNews,
    TopPosts
  }
};
</script>
