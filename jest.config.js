module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/src/test/jestSetup.ts'],
  collectCoverageFrom: ['src/{components,utils,hooks}/**/*.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  coveragePathIgnorePatterns: ['/node_modules/', 'index', '.*/mockedData/.*'],
  moduleDirectories: ['node_modules', './src/test'],
};
