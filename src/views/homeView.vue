<template>
  <div class="container">
    <transition name="fade">
      <div v-if="loadingVisible">
        <loading/>
      </div>
    </transition>
    <div v-if="!loadingVisible" class="item">
      <div class="one-text">
        <p class="text">{{this.text}}</p>
        <p v-if="this.by != null" class="from-author">—— {{this.by}}</p>
        <p v-if="this.from != null" class="from-work">From {{this.from}}</p>
        <p class="from-time">
          <span v-if="timeCollected != null">Collected at {{this.timeCollected}}</span>&nbsp;
          <span v-if="this.timeWritten != null">Written at {{this.timeWritten}}</span>
        </p>
      </div>
    </div>
  </div>
  <div class="footer">
    <button class="btn" @click="getOneText">换一句</button>&nbsp;
    <button class="btn" @click="aboutWindowVisible = true">关于</button>
  </div>
  <transition name="fade">
    <div v-if="aboutWindowVisible">
      <aboutWindow v-bind:aboutWindowVisible = "aboutWindowVisible" v-on:closeWindow = "closeWindow(res)"/>
    </div>
  </transition>
</template>

<script>
import aboutWindow from "../components/aboutWindow.vue";
import HelloWorld from '../components/HelloWorld.vue'
import loading from '../components/loading.vue'
import axios from 'axios'
export default {
  name: 'Home View',
  data: () => {
    return {
      text: '',
      by: '',
      from: '',
      timeCollected: '',
      timeWritten: null,
      loadingVisible: true,
      aboutWindowVisible: false,
    }
  },
  components: {
    HelloWorld,
    loading,
    aboutWindow
  },
  methods: {
    getOneText: function () {
      const that = this
      let raw = ''
      axios.get('https://api.onetext.project.ac.cn/').then((res) => {
        raw = res.data
        that.text = raw.text
        that.by = raw.by
        that.from = raw.from
        that.timeCollected = raw.time[1]
        if (raw.time.length == 2) {
          that.timeCollected = raw.time[0]
          that.timeWritten = raw.time[1]
        } else {
          that.timeCollected = raw.time[0]
          that.timeWritten = null
        }
        console.log(that.timeCollected,that.timeWritten)
        that.loadingVisible = false
      })
    },
    closeWindow: function (res) {
      this.aboutWindowVisible = res
    }
  },
  created() {
    this.getOneText()
  }
}
</script>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>