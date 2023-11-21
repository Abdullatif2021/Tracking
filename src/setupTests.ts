// // jest-dom adds custom jest matchers for asserting on DOM nodes.
// // allows you to do things like:
// // expect(element).toHaveTextContent(/react/i)
// // learn more: https://github.com/testing-library/jest-dom
 import '@testing-library/jest-dom'
 const { createProxyMiddleware } = require('http-proxy-middleware');
 module.exports = (app) => {
   app.use(createProxyMiddleware('/api/socket', { target: `ws://173.249.51.233:8082`, ws: true }));
   app.use(createProxyMiddleware('/api', { target: `http://173.249.51.233:8082` }));
 };
