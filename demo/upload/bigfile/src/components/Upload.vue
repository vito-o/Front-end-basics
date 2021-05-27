<template>
  <div class="upload-wrap">
    <div>upload</div>
    <input type="file" @change="handleFileChange">

    <button @click="handleUpload">上传</button>
  </div>
</template>

<script>
import { request } from "@/utils/http"
const SIZE = 10 * 1024 * 1024;    //切片大小
export default {
  data(){
    return {
      container: {
        file: null
      },
      data: []
    }
  },
  methods: {
    handleFileChange(e){
      const [file] = e.target.files;
      if(!file) return;

      this.container.file = file;
    },

    //生成文件切片
    createFileChunk(file, size = SIZE){
     const fileChunkList = [];
      let cur = 0;
      while (cur < file.size) {
        fileChunkList.push({ file: file.slice(cur, cur + size) });
        cur += size;
      }
      return fileChunkList;
    },

    async handleUpload(){
      if (!this.container.file) return;
      const fileChunkList = this.createFileChunk(this.container.file);
      this.data = fileChunkList.map(({ file }, index) => ({
        chunk: file,
        hash: this.container.file.name + "-" + index // 文件名 + 数组下标
      }));
      await this.uploadChunks();
    },

    //上传切片
    async uploadChunks() {
      const requestList = this.data
        .map(({ chunk, hash }) => {
          const formData = new FormData();
          formData.append("chunk", chunk);
          formData.append("hash", hash);
          formData.append("filename", this.container.file.name);
          return { formData };
        })
        .map(async ({ formData }) =>
          request({
            url: "http://localhost:3000",
            data: formData
          })
        );
      await Promise.all(requestList); // 并发切片

      //await this.mergeRequest();
    },
    //合并切片
    async mergeRequest(){
      await request({
        url: "http://localhost:3000/merge",
        headers: {
          'content-type': 'application/json'
        },
        data: JSON.stringify({
          filename: this.container.file.name
        })
      })
    }
  },
}
</script>

<style>

</style>