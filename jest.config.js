module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/src/test/jestSetup.ts'],
  modulePathIgnorePatterns: ['.*/mockedData/.*'],
  collectCoverageFrom: [
    'src/{components,utils,hooks,domain}/**/*.{js,jsx,ts,tsx}',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  coveragePathIgnorePatterns: ['/node_modules/', 'index', '.*/mockedData/.*'],
  moduleDirectories: ['node_modules', './src/test'],
};
