module.exports = {
  globals: {
    "ts-jest": {
      diagnostics: false
    }
  },
  preset: "@vue/cli-plugin-unit-jest/presets/typescript",
  rootDir: __dirname,
  moduleFileExtensions: ["ts", "vue", "js", "jsx", "tsx", "json"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  transform: {
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
    ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest"
  },
  setupFiles: ["<rootDir>/tests/unit/setup.ts"],
  collectCoverage: true,
  coverageDirectory: "<rootDir>/tests/unit/coverage",
  collectCoverageFrom: ["src/{views,layout,components}/**/*.vue"],
  coverageReporters: ["html", "text"]
};
