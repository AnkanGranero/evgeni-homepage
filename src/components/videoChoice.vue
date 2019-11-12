<template>
  <div>
    <div v-for="video in videosByType" :key="video.index">
      <h3 class="videoType">{{video.name}}</h3>

      <iframe
        v-if="video.link"
        width="768"
        height="432"
        :src="video.link"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <a v-if="video.href" href="video.href">
        <img :src="video.img" class="videoImg" />
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "videoChoice",
  props: ["videoType"],
  computed: {
    videos() {
      return this.$store.getters.videos;
    },
    videosByType() {
      return this.videos.filter(v => v.type.includes(this.$props.videoType));
    }
  }
};
