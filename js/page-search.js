/**
 * @file Component for the Search Page.
 * @author Yehyoung Kang
 */

/// <reference path="./index.d.ts" />
/// <reference path="./fuse.d.ts" />

const tierFilterTypes = {
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
};

Vue.component("page-search", {
  props: {
    guides: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      activeTierFilters: Object.keys(tierFilterTypes),
      fuse: null,
      searchText: "",
      tierFilterTypes,
    };
  },
  computed: {
    /**
     * Returns true if the search text is too short to trigger a search.
     * @returns {boolean}
     */
    isSearchTextTooShort() {
      return !this.searchText || this.searchText.length < 2;
    },
    /**
     * Returns guides that match the current search text (`searchText`).
     * @returns {Guide[]}
     */
    searchedGuides() {
      // Show nothing if the search text is less than 2 characters long
      if (this.isSearchTextTooShort) return [];

      /** @type {Fuse<Guide, Object>} */
      const fuse = this.fuse;
      return fuse.search(this.searchText).map((resultItem) => resultItem.item);
    },
    /**
     * Returns search results filtered by currently active tier filters.
     * @returns {SearchResultItem[]}
     */
    filteredSearchResults() {
      /** @type {Guide[]} */
      const searchedGuides = this.searchedGuides;
      const activeTiers = new Set(this.activeTierFilters);
      return searchedGuides
        .filter((guide) => guide.tiers.some((tier) => activeTiers.has(tier)))
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
          /** @type {{ [key in GuideTier]: { name: string } }} */
          const tierFilterTypes = this.tierFilterTypes;

          return {
            ...searchResultItem,
            contentTypes: Array.from(contentTypes).sort(),
            createdAtDate: new Date(createdAt),
            tierNames: guide.tiers.map((tier) => tierFilterTypes[tier].name),
          };
        });
    },
  },
  mounted() {
    /** @type {Guide[]} */
    const guides = this.guides;
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
  template: "#template-page-search",
});
