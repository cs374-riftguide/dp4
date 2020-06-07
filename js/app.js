// Main app goes here

/// <reference path="./index.d.ts" />
/// <reference path="./data.js" />

const vm = new Vue({
  el: "#app",
  data: {
    currentGuide: guides[0],
    guides: guides,
  },
});
