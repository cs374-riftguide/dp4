// Main app goes here
new Vue({
  el: "#app",
  data: {
    currentGuide: guides[0],
    hideOrShow: [],
  },
  methods: {
    /**
     * Shows or hides a section.
     * @param {number} sectionIndex Index of the section to show/hide.
     */
    toggleSection(sectionIndex) {
      Vue.set(this.hideOrshow, sectionIndex, !this.hideOrShow[sectionIndex]);
    },
  },
});
