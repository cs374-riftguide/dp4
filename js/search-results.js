/**
 * @file Component that represents a search result for guides.
 * @author Yehyoung Kang
 */

Vue.component("search-results", {
  mixins: [MixinDate],
  props: {
    value: Array,
    searchText: String,
    isSearchTextTooShort: {
      type: Boolean,
      default: true,
    },
  },
  template: "#template-search-results",
});
