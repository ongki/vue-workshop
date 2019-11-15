<template>
  <article class="media">
    <figure class="media-left">
      <button class="button is-white" @click="$emit('upvote', item)">
        <span class="icon is-small">
          <i class="fas fa-thumbs-up" title="Vote up" />
        </span>
      </button>
    </figure>
    <div class="media-content">
      <div>
        <p>
          <a :href="item.url">{{ item.title }}</a>
          <small>({{ parseUrl(item.url) }})</small>
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <span class="level-item">
            <small
              >{{ item.votes.length }} votes · posted by {{ user }} ·
              {{ item.timestamp | timeAgo }} ||
              {{ item.timestamp | timeAgo2 }}</small
            >
          </span>
          <a href="" class="level-item">
            <span class="icon is-small"><i class="fas fa-comments"/></span>
          </a>
        </div>
      </nav>
    </div>
  </article>
</template>

<script>
import parseDomain from "parse-domain";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { formatDistanceStrict } from "date-fns";

export default {
  name: "PostItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    user: {
      type: String,
      required: true
    }
  },
  filters: {
    timeAgo(timestamp) {
      const distance = formatDistanceStrict(new Date(timestamp), new Date());
      return `${distance} ago`;
    },
    timeAgo2(value) {
      return formatDistanceToNow(value, { addSuffix: true });
    }
  },
  methods: {
    parseUrl(url) {
      const parts = parseDomain(url);
      return parts ? `${parts.domain}.${parts.tld}` : "unknown";
    }
  }
};
</script>
