<template>
  <div id="paGangWrapper">
    <h1>På Gång!</h1>
    <div class="body-wrapper">
 <div v-for="picture in pictures" class="body-content"
      :key="picture.id"> 
      <div v-if="picture.href"><a :href="picture.href"><img :src="picture.src"> </a></div>
     <div v-else><img :src="picture.src"></div>
       <h4>{{picture.header}}</h4> 
        <div class="text-wrapper"><p>{{picture.bodytext}}
        </p> 
        <a v-if="picture.href" :href="picture.href">{{picture.hrefText}}</a></div>
      </div>
    </div> 
  </div>
</template>
<script>
export default {
  name: "Pagang",
  computed: {
    pictures() { 
      return this.$store.getters.pictures.filter(p => p.subject === "miscellaneous")  }
  }

};
</script>

<style scoped>
.body-wrapper {
  margin-bottom: 10%;
}
img {
  width: 100%;
  background: black;
  margin-bottom: 3%;
}
h4 {
  margin-top: 50px;
  text-align: center;
}
#paGangWrapper {
  display: inline-block;
}

.text-wrapper {

}

a {
  font-family: "Ilisarniq-DemiItalic";
  font-size: 20px;
  text-decoration: none;
}
</style>