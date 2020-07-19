module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'prettier',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react', 'jsx-a11y',
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".ts", ".tsx"] }],
    "import/prefer-default-export": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "react/jsx-one-expression-per-line": "off",
    "global-require": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    camelcase: "off",
    "no-console": ["error", { allow: ["tron"] }],
    "no-use-before-define": "off",
    "import/extensions": "off"
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src"
      },
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
      },
     
    },
  }
};
