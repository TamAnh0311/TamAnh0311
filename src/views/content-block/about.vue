<template>
  <div id="about">
    <div class="about-content page-padding">
      <div class="header row">
        <div class="col-md-11 col-lg-11 col-xl-11">
          <h2 class="title">About me</h2>
        </div>
        <div class="col-md-1 col-lg-1 col-xl-1">
          <UpDownBtn
          :upBlock="'home'"
          :downBlock="'portfolio'" />
        </div>
      </div>
      <div class="row">
        <div class="col-md-8 col-lg-8 col-xl-8">
          <!-- eslint-disable max-len -->
          <p>
            I was late 2 years started at university but “better late than never”, I am trying my best and will do anything to reach the goal.
            <br>
            I've worked as a bartender for 5 years, may sound irrelevant but it helps me expanding myself with soft skills, creative and self-developing.
            <br>
            Also, I am able to work in an English-speaking environment and with foreign experts. Willing to learn is my advantage, besides, I can work under pressure and meet the deadline.
            <br>
            Overall, I consider myself to be a hardworking, ambitious one who is motivated by challenges, can gain personal benefit from new experiences, and I am always open to new chances.
          </p>
          <!-- eslint-enable max-len -->
          <a
          href="https://drive.google.com/file/d/1hJBiwx8RAknytWgJYXT5MFcRBv0ehMbn/view?usp=sharing"
          class="btn btn-outline-secondary"
          >Download My CV</a>
        </div>
        <div class="col-md-4 col-lg-4 col-xl-4">
          <img class="img-fluid" src="@/assets/images/avatar.jpg" />
        </div>
      </div>
      <h2 class="title">My skill set</h2>
      <div class="skill-set">
        <div class="skill-set__item">
          <h4>Javascript</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
        <div class="skill-set__item">
          <h4>JQuery</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
        <div class="skill-set__item">
          <h4>SCSS</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
        <div class="skill-set__item">
          <h4>Template Design</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UpDownBtn from '@/components/up-down.vue';

export default {
  name: 'About',
  components: {
    UpDownBtn,
  },
};
</script>
