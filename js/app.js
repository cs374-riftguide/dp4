// Main app goes here

/// <reference path="./index.d.ts" />
/// <reference path="./data.js" />

const vm = new Vue({
  el: "#app",
  data: {
    activeTierFilters: [],
    fuse: null,
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
      // Show nothing if the search text is less than 2 characters long
      if (!this.searchText || this.searchText.length < 2) return [];

      /** @type {Guide[]} */
      const results = this.fuse
        .search(this.searchText)
        .map((resultItem) => resultItem.item);
      return results
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

    // Initialize Fuse.js
    this.fuse = new Fuse(guides, {
      keys: [
        "title",
        "author",
        "content.type",
        "content.summary",
        "content.content",
      ],
      // Allow match at any point in string.
      // For more info, see https://fusejs.io/concepts/scoring-theory.html
      distance: 10000,
      // The default threshold (0.6) feels too loose, so use a smaller value
      threshold: 0.4,
    });
  },
});
