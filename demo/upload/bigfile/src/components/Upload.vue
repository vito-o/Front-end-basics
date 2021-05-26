<template>
  <div>upload</div>

  <div class="upload-wrap">
    <input type="file" @change="handleFileChange">

    <button @click="handleUpload">上传</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      container: {
        file: null
      }
    }
  },
  methods: {
    handleFileChange(e){
      const [file] = e.target.files;
      console.log(e)
      if(!file) return;

      this.container.file = file;
    },

    handleUpload(){

    }
  },
}
</script>

<style>

</style>