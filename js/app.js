// Main app goes here

/// <reference path="./index.d.ts" />
/// <reference path="./data.js" />

const vm = new Vue({
  el: "#app",
  data: {
    activeTierFilters: [],
    searchText: "",
    tierFilterTypes: {
      iron: {
        name: "Iron",
      },
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
      grandmaster: {
        name: "Grandmaster",
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

          /**
           * Type guard function to make TypeScript happy
           * @param {GuideContentType} type
           * @returns {type is Exclude<GuideContentType, 'empty'>}
           */
          function isNotEmptyType(type) {
            return type !== "empty";
          }

          // Get a unique set of content types, excluding the 'empty' type
          const contentTypes = new Set(
            content.map((item) => item.type).filter(isNotEmptyType)
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
