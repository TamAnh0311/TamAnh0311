<template>
  <div id="portfolio">
    <div class="portfolio-content page-padding">
      <div class="header row">
        <div class="col-md-3 col-lg-3 col-xl-3 title-portfolio">
          <h2 class="title">My projects</h2>
          <UpDownBtn
          :upBlock="'about'"
          :downBlock="'contact'" />
        </div>
        <div class="col-md-8 col-lg-8 col-xl-8 search-box">
          <input
            v-model="searchKey"
            placeholder="Search by language"
            @keyup.enter="searchByLang"
            type="text"
          />
          <span class="material-icons vertical-align" @click="searchByLang">search</span>
        </div>
        <div class="col-md-1 col-lg-1 col-xl-1 btn-pc-view">
          <UpDownBtn
          :upBlock="'about'"
          :downBlock="'contact'" />
        </div>
      </div>
      <div
      v-if="(repos.length > 0 &&
        repositories.length > 0 &&
        errors.length === 0)">
        <transition-group name="slide-fade"  class="projects" tag="div">
          <div
            v-for="(item, index) in repositories"
            :key="index"
            class="projects__item vertical-align"
            @click="toProject(item)"
            @mouseover="changeImgGreen(index)"
            @mouseleave="changeImg(index)"
          >
            <img
              class="box-img img-fluid"
              src="../../assets/images/box.png"
              alt
              height="100"
              width="150"
            />
            <table class="project-infor">
              <tr>
                <th>Name:</th>
                <th>{{item.name}}</th>
              </tr>
              <tr>
                <th>Language:</th>
                <th>{{item.language}}</th>
              </tr>
              <tr>
                <th>Forks Count:</th>
                <th>{{item.forks_count}}</th>
              </tr>
              <tr>
                <th>Owner:</th>
                <th>{{item.owner.login}}</th>
              </tr>
              <tr>
                <th>Created at:</th>
                <th>{{item.created_at | formatDate}}</th>
              </tr>
            </table>
          </div>
        </transition-group>

        <pagination
          :isMobile="isMobile"
          :total-pages="totalPages"
          :total="totalProjects"
          :per-page="perPage"
          :current-page="currentPage"
          @pagechanged="onPageChange"
        />
      </div>

      <transition name="fade" mode="in-out">
      <div v-if="errors.length > 0" class="error-banner vertical-align">
          <h2>Oops! Error occurred</h2>
          <h2 v-for="(item, index) in errors" :key="index">{{item}}</h2>
          <h2>Please try again later</h2>
        </div>
      </transition>
      <transition name="fade" mode="in-out">
        <div
        v-if="(repositories.length === 0 && repos.length > 0)"
        class="error-banner vertical-align">
          <img class="img-fluid" src="../../assets/images/not-found.png" alt="">
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import store from '@/store';
import axios from 'axios';
import Pagination from '@/components/pagination.vue';
import UpDownBtn from '@/components/up-down.vue';

export default {
  name: 'Portfolio',
  components: {
    Pagination,
    UpDownBtn,
  },
  data() {
    return {
      errors: [],
      repos: [],
      currentPage: 1,
      searchKey: '',
    };
  },
  computed: {
    repositories() {
      if (this.searchKey) {
        return this.paginate(this.searchByLang());
      }
      return this.paginate(this.repos);
    },
    totalPages() {
      return Math.ceil(this.repos.length / this.perPage);
    },
    totalProjects() {
      return this.repos.length;
    },
    perPage() {
      if (this.isMobile) {
        return 3;
      }
      return 4;
    },
    isMobile() {
      return store.state.isMobile;
    },
  },
  methods: {
    toProject(project) {
      window.location.href = project.html_url;
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

    searchByLang() {
      const filterArray = this.repos.filter((item) => {
        if (item.language) {
          return item.language
            .toLocaleLowerCase()
            .includes(this.searchKey.toLocaleLowerCase());
        }
        return null;
      });
      return filterArray;
    },

    onPageChange(page) {
      this.currentPage = page;
    },
    paginate(projects) {
      const page = this.currentPage;
      const { perPage } = this;
      const from = page * perPage - perPage;
      const to = page * perPage;
      return projects.slice(from, to);
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
  filters: {
    formatDate(value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY');
      }
      return null;
    },
  },
};
</script>
