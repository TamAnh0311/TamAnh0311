<template>
  <div class="notification vertical-align">
    <div class="notification-card">
      <div class="notification-header">
        <div class="header-title">
          <span class="material-icons">
            report
          </span>
          <h4>
            Notify
          </h4>
        </div>
        <span class="material-icons hand-cursor" @click="closeNoti()">
          cancel
        </span>
      </div>
      <div class="notification-content">
        <h5>{{message}}</h5>
      </div>
      <div class="notification-btn">
        <input
          type="submit"
          value="Got it!"
          name="submit"
          class="btn btn-noti"
          @click="closeNoti()"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    message: {
      type: String,
      default: 'This is a notification',
    },
  },
  methods: {
    closeNoti() {
      this.$emit('closeNoti');
    },
  },
};
</script>
