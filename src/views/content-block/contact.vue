<template>
  <div id="contact">
    <div class="contact-content page-padding">
      <div class="header">
          <h2 class="title">Get in Touch</h2>
          <UpDownBtn
            :upBlock="'portfolio'"
            :downBlock="'footer'" />
      </div>
      <div class="contact-block">
        <p class="title">Please feel free to contact me if you need any further information.</p>
        <div class="contact-links">
          <div class="contact-links__item">
            <a
              href="https://www.google.com/maps/place/Phố+Phúc+Tân,+Phúc+Tân,+Hoàn+Kiếm,+Hà+Nội,+Việt+Nam/@21.0317424,105.8515706,16.75z/data=!4m5!3m4!1s0x3135abc10e0d4bcd:0x7675f5f9fd655347!8m2!3d21.0353887!4d105.8555889?hl=vi-VN"
            >
              <span class="material-icons">location_on</span>
              <p>
                No.5/305 Phuc Tan Str, Hoan Kiem Dist, Hanoi
              </p>
            </a>
          </div>
          <div class="contact-links__item">
            <a href="tel:0338721969">
              <span class="material-icons">smartphone</span>
              <p>
                (+ 84) 33 872 1969
              </p>
            </a>
          </div>
          <div class="contact-links__item">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=tamanh.vu.0311@gmail.com"
            >
              <span class="material-icons">mail_outline</span>
              <p>
                Tamanh.vu.0311@gmail.com
              </p>
            </a>
          </div>
          <div class="contact-links__item">
            <a href="https://linkedin.com/in/tâm-anh-vũ-41b862168">
              <span class="material-icons">assignment_ind</span>
              <p>
                linkedin.com/in/tâm-anh-vũ-41b862168
              </p>
            </a>
          </div>
        </div>
      </div>
      <div class="email-block">
        <p class="title lh-5">Or send me direct message</p>
        <div class="row">
          <div class="col-md-6">
            <div class="email-block__item">
              <label class="title">Name</label>
              <input type="text" name="name" class="text-input" v-model="directMessage.name" />
            </div>
            <div class="email-block__item">
              <label class="title">Email</label>
              <input
                type="text"
                name="email"
                class="text-input email"
                v-model="directMessage.email"
              />
            </div>
            <div class="email-block__item">
              <label class="title">Subject</label>
              <input
              type="text"
              name="subject"
              class="text-input"
              v-model="directMessage.subject" />
            </div>
          </div>
          <div class="col-md-6 lp5">
            <div class="form-row text-area-row email-block__item">
              <label class="title">Message</label>
              <textarea
              name="message"
              class="text-area"
              v-model="directMessage.content"></textarea>
            </div>
          </div>

          <transition name="fade" mode="in-out">
          <div
          class="email-noti"
          :class="{'error' :isError}"
          v-if="emailNoti != ''">
            {{emailNoti}}
            <span class="material-icons" @click="clearEmailNoti">
              cancel
            </span>
          </div>
          </transition>

          <div class="btn-block">
            <div>
              <input
                type="reset"
                value="Clear Message"
                name="reset"
                class="btn btn-clear"
                @click="clearTextbox"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Send Message"
                name="submit"
                class="btn btn-submit"
                :class="{'error' :isError}"
                @click="sendMessage"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import UpDownBtn from '@/components/up-down.vue';

export default {
  name: 'Contact',
  components: {
    UpDownBtn,
  },
  data() {
    return {
      isError: false,
      emailNoti: '',
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
      const data = {
        service_id: 'gmail',
        template_id: 'template_6tzrBLEy',
        user_id: 'user_iN8gsQFj7PKzAV3d6fdFK',
        template_params: {
          // from_name: this.directMessage.name,
          // from_email: this.directMessage.email,
          // subject: this.directMessage.subject,
          message_html: this.directMessage.content,
        },
      };

      axios
        .post('https://api.emailjs.com/api/v1.0/email/send', {
          data: JSON.parse(JSON.stringify(data)),
          contentType: 'application/json',
        })
        .then(() => {
          this.emailNoti = 'Send mail successfully! We will respond asap!';
        })
        .catch(() => {
          this.emailNoti = 'Some errors occured, please try again!';
          this.isError = true;
        });
    },
    clearTextbox() {
      this.directMessage.content = '';
    },
    clearEmailNoti() {
      this.emailNoti = '';
      this.isError = false;
    },
  },
};
</script>
