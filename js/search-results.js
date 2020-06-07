/**
 * @file Component that represents a search result for guides.
 * @author Yehyoung Kang
 */

Vue.component("search-results", {
  template: "#template-search-results",
  props: {
    value: Array,
    searchText: String,
    isSearchTextTooShort: {
      type: Boolean,
      default: true,
    },
  },
});
