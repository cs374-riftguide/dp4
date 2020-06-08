// Main app goes here

/// <reference path="./index.d.ts" />
/// <reference path="./data.js" />

const App = Vue.extend({
  data() {
    return {
      currentGuide: guides[0],
      currentPage: "search",
      guides: guides,
    };
  },
  methods: {
    /**
     * Switches to the Guide Page, opening the guide with the given ID.
     * @param {string} guideId
     */
    openPageGuide(guideId) {
      /** @type {Guide[]} */
      const guides = this.guides;
      const guideToView = guides.find((guide) => guide.id === guideId);
      if (!guideToView)
        throw new Error(`Cannot find guide with ID: '${guideId}'`);
      this.currentGuide = guideToView;
      this.currentPage = "guide";
    },
    /**
     * Switches to the Search Page.
     */
    openPageSearch() {
      this.currentPage = "search";
    },
  },
});

const vm = new App({
  el: "#app",
});
