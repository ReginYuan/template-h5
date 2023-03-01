module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    // "eslint:recommended",
    // "plugin:vue/vue3-essential",
    "plugin:prettier/recommended",
    "plugin:vue/vue3-recommended",
    "plugin:nuxt/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  // 需要修改的启用规则以及对应的错误级别
  /**
   * 错误级别为三种
   * "off"或0 表示关闭规则
   * "warn"或1开启规则 使用警告级别的错误：warn(不会导致程序退出)
   * "error"或2 开启规则 使用错误级别的错误： error(当前被触发的时候，程序会退出)
   */
  rules: {
    "prettier/prettier": "error",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    'space-before-function-paren': 'off'
  },
};
