// Main app goes here

/**
 * @typedef {Object} Guide
 * @property {string} id
 * @property {string} title
 * @property {string} tier
 * @property {string} author
 * @property {string} createdAt
 * @property {number} upvotes
 * @property {number} downvotes
 * @property {number} views
 * @property {GuideContent[]} content
 */

/**
 * @typedef {Object} GuideContent
 * @property {string} type
 * @property {string} summary
 * @property {string=} content
 * @property {string=} videoUrl
 */

/**
 * @typedef {Object} SearchResultItem
 * @property {string} id
 * @property {string} title
 * @property {string} tier
 * @property {string} author
 * @property {Date} createdAtDate
 * @property {number} upvotes
 * @property {number} downvotes
 * @property {number} views
 * @property {string[]} contentTypes
 */

const vm = new Vue({
  el: "#app",
  data: {
    activeTierFilters: [],
    searchText: "",
    tierFilterTypes: {
      bronze: {
        name: "Bronze",
      },
      silver: {
        name: "Silver",
      },
      gold: {
        name: "Gold",
      },
      platinum: {
        name: "Platinum",
      },
      diamond: {
        name: "Diamond",
      },
      master: {
        name: "Master",
      },
      challenger: {
        name: "Challenger",
      },
    },
  },
  computed: {
    /**
     * @returns {SearchResultItem[]}
     */
    searchResults() {
      // Since we don't have a search feature now, let's return an empty array
      // if the search text is empty
      if (!this.searchText) return [];

      // If the search text is not empty, return the entire list of guides
      // (filtered by tier)
      return guides
        .filter((guide) => this.activeTierFilters.includes(guide.tier))
        .map((guide) => {
          // Drop the 'content' key from the searchResultItem
          const { content, createdAt, ...searchResultItem } = guide;

          // Get a unique set of content types, excluding the 'empty' type
          const contentTypes = new Set(
            content.map((item) => item.type).filter((type) => type !== "empty")
          );

          return {
            ...searchResultItem,
            contentTypes: Array.from(contentTypes).sort(),
            createdAtDate: new Date(createdAt),
          };
        });
    },
  },
  mounted() {
    // Initially, all filters are active
    this.activeTierFilters = Object.keys(this.tierFilterTypes);
  },
});
