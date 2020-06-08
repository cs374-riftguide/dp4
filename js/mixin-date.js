/**
 * @file Mixins for Date-related methods.
 * @author Yehyoung Kang
 */

const MixinDate = {
  methods: {
    /**
     * Returns a human-readable string of the given date.
     * @param {Date | string} date Date object or string that can be parsed by `Date.parse()`
     * @returns {string}
     */
    dateToString(date) {
      // Returns YYYY-MM-DD
      // Note: Current implementation uses zero UTF offset for convenience.
      // If we want to do this properly, we need to use dedicated libraries like
      // Moment.js, which are quite heavy.
      // Since this is a prototype, we don't need that much work.
      if (!(date instanceof Date)) date = new Date(date);
      return date.toISOString().slice(0, 10);
    },
  },
};
