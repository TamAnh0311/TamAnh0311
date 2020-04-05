<template>
  <div id="portfolio">
    <div class="portfolio-content page-padding">
      <div class="header row">
        <div class="col-md-3 col-lg-3 col-xl-3">
          <h2 class="title">My projects</h2>
        </div>
        <div class="col-md-9 col-lg-9 col-xl-9">
          <ul class="filter">
            <li @click="changeView(1)">Name</li>
            <li @click="changeView(2)">Date</li>
            <li>Label</li>
          </ul>
        </div>
      </div>
      <div v-if="repos.length > 0">
        <div class="projects">
        <div
          v-for="(item, index) in repositories"
          :key="index"
          class="projects__item vertical-align"
          @click="toProject(item)"
          @mouseover="changeImgGreen(index)"
          @mouseleave="changeImg(index)"
        >
          <img class="img-fluid" src="../../assets/images/box.png" alt height="100" width="150" />
          <h4>{{item.name}}</h4>
        </div>
        </div>

        <pagination
          :total-pages="totalPages"
          :total="totalProjects"
          :per-page="perPage"
          :current-page="currentPage"
          @pagechanged="onPageChange"
        />

      </div>
      <div v-else class="error-banner">
        <h2>Error occurred</h2>
        <h2>{{errors}}</h2>
        <h2>Please try again later</h2>
      </div>
    </div>
  </div>
</template>

<script>
// import router from '@/router/';
import axios from 'axios';
import Pagination from '@/components/pagination.vue';

export default {
  name: 'Portfolio',
  components: {
    Pagination,
  },
  data() {
    return {
      errors: [],
      repos: [],
      currentPage: 1,
      perPage: 6,
    };
  },
  computed: {
    repositories() {
      return this.paginate(this.repos);
    },
    totalPages() {
      return Math.ceil(this.repos.length / this.perPage);
    },
    totalProjects() {
      return this.repos.length;
    },
  },
  methods: {
    toProject(project) {
      this.$emit('toProject', project);
    },

    /* eslint-disable global-require */
    changeImgGreen(index) {
      const item = document
        .getElementsByClassName('projects__item')[index]
        .getElementsByTagName('img');
      const url = require('../../assets/images/box-green.png');
      item[0].src = url;
    },
    changeImg(index) {
      const item = document
        .getElementsByClassName('projects__item')[index]
        .getElementsByTagName('img');
      const url = require('../../assets/images/box.png');
      item[0].src = url;
    },
    /* eslint-enable global-require */

    changeView(index) {
      switch (index) {
        case 1:
          this.repos = this.repos.sort((a, b) => a.name - b.name);
          // console.log(this.repositories);
          break;
        case 2:
          /* eslint-disable max-len */
          this.repos = this.repos.sort(
            (a, b) => new Date(a.created_at).getTime()
              - new Date(b.created_at).getTime(),
          );
          // console.log(this.repositories);
          break;
        default:
          this.repos = this.repos.sort((a, b) => a.name - b.name);
      }
    },
    /* eslint-enable max-len */

    onPageChange(page) {
      this.currentPage = page;
    },
    paginate(posts) {
      const page = this.currentPage;
      const { perPage } = this;
      const from = (page * perPage) - perPage;
      const to = (page * perPage);
      return posts.slice(from, to);
    },
  },
  created() {
    axios
      .get('https://api.github.com/users/tamanh0311/repos')
      .then((response) => {
        this.repos = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style>
</style>
