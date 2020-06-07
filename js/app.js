// Main app goes here

Vue.component("guide-box", {
  template: "#template-guide-box",
  props: {
    guide: Object,
  },
  data() {
    return {
      hideOrShow: [],
    };
  },
  methods: {
    /**
     * Shows or hides a section.
     * @param {number} sectionIndex Index of the section to show/hide.
     */
    toggleSection(sectionIndex) {
      Vue.set(this.hideOrShow, sectionIndex, !this.hideOrShow[sectionIndex]);
    },
  },
  watch: {
    guide(newGuide) {
      // Replace hideOrShow with a new array which contains the same number of
      // elements as the guide.content array.
      this.hideOrShow = new Array(newGuide.content.length);
    },
  },
});

new Vue({
  el: "#app",
  data: {
    currentGuide: guides[0],
  },
});
