import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import 'babel-polyfill';

global.fetch = require('jest-fetch-mock');
