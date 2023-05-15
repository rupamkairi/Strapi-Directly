"use strict";

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin("directly")
      .service("myService")
      .getWelcomeMessage();
  },
});
