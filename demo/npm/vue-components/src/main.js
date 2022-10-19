import Test from './components/test/index'

const components = {
  Test
}

const install = function(Vue, opts = {}) {
  if (install.installed) return;

  Object.keys(components).forEach(key => {
      Vue.component(key, components[key]);
  });
};


const API = {
  version: '1.0.1',
  install,
};

export default API;