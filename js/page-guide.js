/**
 * @file Component for the Guide Page.
 * @author Yuan Huang
 * @author Yehyoung Kang
 */

/// <reference path="./index.d.ts" />

Vue.component("page-guide", {
  props: {
    guide: Object,
  },
  data() {
    return {
      hideOrShow: [],
    };
  },
  watch: {
    guide(newGuide) {
      // Replace hideOrShow with a new array which contains the same number of
      // elements as the guide.content array.
      this.hideOrShow = new Array(newGuide.content.length);
    },
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
  template: "#template-page-guide",
});
