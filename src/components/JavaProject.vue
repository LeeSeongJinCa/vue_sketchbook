<template>
  <div>
    JavaProject
    <button @click="getAdvertisements">GET!</button>
    <br />
    <iframe
      width="480"
      height="270"
      src="https://www.youtube.com/embed/Zg1cUmjblQo"
    >
    </iframe>
    <div class="ads" v-for="ad in ads" :key="ad.advertisementId">
      <iframe
        v-if="ad.mediaType === 1"
        width="480"
        height="270"
        :src="`https://www.youtube.com/embed/${ad.youtubeLink}`"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";

// advertisementId: 16
// category: (2) ["차", "핸드폰"]
// mediaType: 0
// youtubeLink: ""

export default {
  name: "JavaProject",
  data() {
    return {
      ads: [],
    };
  },
  methods: {
    getAdvertisements: async function() {
      console.log(123);
      const res = await axios.get("http://localhost:8080/advertisement");
      const ads = res.data.advertiseResponse;
      this.ads = ads;
    },
  },
};
</script>

<style></style>
