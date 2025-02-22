
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Selenium_Practice_Website_Angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Selenium_Practice_Website_Angular/login",
    "route": "/Selenium_Practice_Website_Angular"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7I5WLVOP.js",
      "chunk-L7FZME2G.js"
    ],
    "route": "/Selenium_Practice_Website_Angular/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XWFSGHFZ.js",
      "chunk-L7FZME2G.js"
    ],
    "route": "/Selenium_Practice_Website_Angular/signup"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUCA22TA.js"
    ],
    "redirectTo": "/Selenium_Practice_Website_Angular/dashboard/double-click",
    "route": "/Selenium_Practice_Website_Angular/dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUCA22TA.js"
    ],
    "route": "/Selenium_Practice_Website_Angular/dashboard/single-click"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUCA22TA.js"
    ],
    "route": "/Selenium_Practice_Website_Angular/dashboard/double-click"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUCA22TA.js"
    ],
    "route": "/Selenium_Practice_Website_Angular/dashboard/right-click"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BUCA22TA.js"
    ],
    "route": "/Selenium_Practice_Website_Angular/dashboard/drag-drop"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Selenium_Practice_Website_Angular/login",
    "route": "/Selenium_Practice_Website_Angular/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 588, hash: '081718d439c057eceb33b5fc557cd1fb9490a7f4cfe7d7e8500b2fbd0d404d28', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: '85397b500a4473fcd1a817b235e35f862dd6e5fd12c3ed378fb9c6f8af898059', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 6277, hash: '4ec6ef3579e9de4bdb2809d9e8f26c92d060859e25279f4e48eaaea1e129034f', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/right-click/index.html': {size: 6225, hash: '1e85d8e8121edf825894868525c0c68f281bae41d51c0c88904f6a0685693f07', text: () => import('./assets-chunks/dashboard_right-click_index_html.mjs').then(m => m.default)},
    'dashboard/drag-drop/index.html': {size: 6225, hash: '1e85d8e8121edf825894868525c0c68f281bae41d51c0c88904f6a0685693f07', text: () => import('./assets-chunks/dashboard_drag-drop_index_html.mjs').then(m => m.default)},
    'dashboard/single-click/index.html': {size: 6225, hash: '1e85d8e8121edf825894868525c0c68f281bae41d51c0c88904f6a0685693f07', text: () => import('./assets-chunks/dashboard_single-click_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 8665, hash: '14198881a60af6848547c812e3a71a7b98473d1b873e1b1f9936eb444f556161', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'dashboard/double-click/index.html': {size: 6225, hash: '1e85d8e8121edf825894868525c0c68f281bae41d51c0c88904f6a0685693f07', text: () => import('./assets-chunks/dashboard_double-click_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
