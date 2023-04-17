<template>
  <div>
    <input type="file" @change="e => onChangeFile(e)">
    <button v-on:click="SendData">Submit</button>
    <template v-if="src">
      <div class="video" v-if="src.split('.')[1] == '.mkv' || this.src.split('.')[1] == '.mp4'">
        <video controls>
          <source :src="src">
        </video>
      </div>
    </template>
    <template v-else>
      <img :src="src">
    </template>
  </div>
</template>
<script>
import axios from "axios"
export default {
  data() {
    return {
      message: null,
      file: null,
      src: null
    }
  },
  methods: {
    onChangeFile(e) {
      this.file = e.target.files[0]
    },
    SendData() {
      const fd = new FormData();

      fd.append('video', this.file)

      axios.post('http://localhost:8000/api/add', fd)
        .then((res) => {
          this.src = res.data.src
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>
<style></style>