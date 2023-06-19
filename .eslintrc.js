module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
    "plugin:vue/vue3-strongly-recommended",
    "prettier",
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    "vue/no-unused-vars": "off",
    "vue/no-multiple-template-root": "off",
    "vue/multi-word-component-names": "off",
  },
};
