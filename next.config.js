/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

module.exports = {
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    // sw: 'sw.js',
    disable: process.env.NODE_ENV === 'development',
    register: true,
  },
};
