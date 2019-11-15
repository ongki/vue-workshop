<template>
  <div>
    <h1><slot>My News Site</slot></h1>
    <h2><slot name="subheader"></slot></h2>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>
