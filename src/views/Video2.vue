<template>
<div class="viewWrapper">
  <div class="body-wrapper">
    <div class="video-body">
      <h1 class="videoType">{{videoType}}</h1>
      <div class="videoBox" v-for="video in videosByType" :key="video.index">
        <h3>{{video.name}}</h3>

        <iframe
          v-if="video.link"
          width="768"
          height="432"
          :src="video.link"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <a v-if="video.href" :href="video.href">
          <img :src="video.img" class="videoImg" />
        </a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "Video",

  computed: {
    videos() {
      return this.$store.getters.videos;
    },
    videoType() {
      return this.$route.params.videoType;
    },
    videosByType() {
      return this.videos.filter(v => v.type.includes(this.videoType));
    }
  },
  methods: {}
};
</script>


<style <style lang="scss" scoped>
> .video-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5em;
  /* width:100vw; */
}
.videoBox {
  padding: 3em;
  text-align: center;
}
h3 {
  font-size: 1.9em;
  margin-bottom: 2em;
}
</style>
