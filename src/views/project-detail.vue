<template>
  <div class="project-detail">
    <!-- {{project.name}} -->
  </div>
</template>

<script>
export default {
  name: 'ProjectDetail',
  props: {
    project: {},
  },
  data() {
    return {
    };
  },
  created() {
    console.log(this.project);
  },

};
</script>
