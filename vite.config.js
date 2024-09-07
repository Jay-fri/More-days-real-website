import { defineConfig } from "vite";

export default defineConfig({
  build:{
    rollupOptions: {
      input:{
        main:'./index.html',
        about:'./About.html',
        academics:'./academics.html',
        admission:'./admission.html',
        contact:'./contact.html',
      }
    }
  }
});