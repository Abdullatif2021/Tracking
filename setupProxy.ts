/* eslint-disable import/no-extraneous-dependencies */
const {createProxyMiddleware}: any = require('http-proxy-middleware')

module.exports = (app) => {
  app.use(createProxyMiddleware('/api/socket', {target: `ws://173.249.51.233:8082`, ws: true}))
  app.use(createProxyMiddleware('/api', {target: `http://173.249.51.233:8082`}))
  // app.use(
  //   '/api/cameras',
  //   createProxyMiddleware({
  //     target: 'https://37.224.70.178:18012',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/api/cameras': '/artemis/api/resource/v1/cameras'
  //     }
  //   })
  // );
 
  // app.use(
  //   `/artemis`,
  //   createProxyMiddleware({
  //     target: 'https://37.224.70.178:18012',
  //     // changeOrigin: true,
  //     // secure:true
  //     //changeOrigin: true,
  //     // headers: {
  //     //   'X-Ca-Key': '22188947',
  //     //   'X-Ca-Signature': 'zyrz9MneU7iLVYt0Dmv3',
  //     // },
  //   })
  // )
}

// import { createProxyMiddleware } from 'http-proxy-middleware';
///////kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
// const target = 'http://173.249.51.233:8082'; // replace with the URL of your target API

// export default function setupProxy(app: any) {
//   app.use(
//     '/api', // replace with the URL path of your API
//     createProxyMiddleware({
//       target,
//       changeOrigin: true,
//       pathRewrite: {
//         '^/api': '', // remove the '/api' prefix from the forwarded request URL
//       },
//     })
//   );
// }
