// Main app goes here
new Vue({
  el: "#app",
  data: {
    content: guides,
    currentguide: guides[0],
    Index: 0,
    ishow: 0,
    hideorshow: [],
  },
  methods: {
    /**
     * Shows or hides a section.
     * @param {number} sectionIndex Index of the section to show/hide.
     */
    toggleSection(sectionIndex) {
      Vue.set(this.hideorshow, sectionIndex, !this.hideorshow[sectionIndex]);
    },
  },
});
