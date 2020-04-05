<template>
  <div id="home">
    <div class="vertical-align home-content">
      <h1>Hello! This is Anh Vu</h1>
      <h2>Front-End Developer, specializing in VueJS, HTML, CSS, and Templates Design</h2>
    </div>
    <div class="expand-sector">
      <span class="material-icons" @click="$emit('expand')">expand_more</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBlock',
};
</script>
