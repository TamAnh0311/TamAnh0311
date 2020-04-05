<template>
  <div id="contact">
    <div class="contact-content page-padding">
      <div class="header">
        <h2 class="title">Get in Touch with Me</h2>
      </div>
        <div class="contact-block">
        <p class="title">
          Please feel free to contact me if you need any further information.
        </p>
        <div class="contact-links">
          <div class="contact-links__item">
            <div class="material-icons">location_on</div>
            <a href="https://www.google.com/maps/place/Phố+Phúc+Tân,+Phúc+Tân,+Hoàn+Kiếm,+Hà+Nội,+Việt+Nam/@21.0317424,105.8515706,16.75z/data=!4m5!3m4!1s0x3135abc10e0d4bcd:0x7675f5f9fd655347!8m2!3d21.0353887!4d105.8555889?hl=vi-VN">
              No.5/305 Phuc Tan Str, Hoan Kiem Dist, Hanoi
            </a>
          </div>
          <div class="contact-links__item">
            <div class="material-icons">smartphone</div>
            <a href="tel:0338721969">
              (+84) 33 872 1969
            </a>
          </div>
          <div class="contact-links__item">
            <div class="material-icons">mail_outline</div>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tamanh.vu.0311@gmail.com">
              Tamanh.vu.0311@gmail.com
            </a>
          </div>
          <div class="contact-links__item">
            <div class="material-icons">assignment_ind</div>
            <a href="linkedin.com/in/tâm-anh-vũ-41b862168">
              linkedin.com/in/tâm-anh-vũ-41b862168
            </a>
          </div>
        </div>
        </div>
        <div class="email-block">
        <p class="title lh-5">
          Or send me direct message
        </p>
        <div class="row">
          <div class="col-sm-6">
            <div class="email-block__item">
              <label class="title">Name</label>
              <input
              type="text"
              name="name"
              class="text-input"
              v-model="directMessage.name"/>
            </div>
            <div class="email-block__item">
              <label class="title">Email</label>
              <input
              type="text"
              name="email"
              class="text-input email"
              v-model="directMessage.email"/>
            </div>
            <div class="email-block__item">
              <label class="title">Subject</label>
              <input
              type="text"
              name="subject"
              class="text-input"
              v-model="directMessage.subject"/>
            </div>
          </div>
          <div class="col-sm-6 lp5">
            <div class="form-row text-area-row email-block__item">
              <label class="title">Message</label>
              <textarea
              name="message"
              class="text-area"
              v-model="directMessage.content"
              ></textarea>
            </div>
          </div>
          <div class="btn-block">
            <div>
              <input
              type="reset"
              value="Clear Message"
              name="reset"
              class="btn btn-clear"
              @click="clearTextbox"/>
            </div>
            <div>
              <input
              type="submit"
              value="Send Message"
              name="submit"
              class="btn btn-submit"
              @click="sendMessage"/>
            </div>
          </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      directMessage: {
        name: '',
        email: '',
        subject: '',
        content: '',
      },
    };
  },
  methods: {
    sendMessage() {
      console.log(this.directMessage);
    },
    clearTextbox() {
      this.directMessage.content = '';
    },
  },
};
</script>
