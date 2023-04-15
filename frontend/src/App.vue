<template>
  <div>
    <input type="file" @change="e => onChangeFile(e)">
    <button v-on:click="SendData">Submit</button>
  </div>
</template>
<script>
import axios from "axios"
export default {
  data() {
    return {
      message: null,
      file: null
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
    }
  }
}
</script>
<style></style>