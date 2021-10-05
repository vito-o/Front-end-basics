
      (function(depsGraph){

        //加载入口文件
        function require(module) {
          //定义模块内部的require函数
          function localRequire(relativePath) {
            return require(depsGraph[module].deps[relativePath])
          }
          //定义暴露对象（将来我们模块要暴露的内容）
          var exports = {};

          (function(require, exports, code){
            eval(code);
          })(localRequire, exports, depsGraph[module].code);

          //作为require函数的返回值返回出去
          //后面的require函数能得到暴露的内容
          return exports;
        }

        require('./src/index.js');

      })({"./src/index.js":{"code":"\"use strict\";\n\nvar _add = _interopRequireDefault(require(\"./add.js\"));\n\nvar _count = _interopRequireDefault(require(\"./count.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nconsole.log((0, _add[\"default\"])(1, 2));\nconsole.log((0, _count[\"default\"])(3, 4));","deps":{"./add.js":"D:\\WorkSpace\\WEB-WorkSpace\\Vito-o\\font-end-basics\\demo\\webpack\\myWebpack\\src\\add.js","./count.js":"D:\\WorkSpace\\WEB-WorkSpace\\Vito-o\\font-end-basics\\demo\\webpack\\myWebpack\\src\\count.js"}},"D:\\WorkSpace\\WEB-WorkSpace\\Vito-o\\font-end-basics\\demo\\webpack\\myWebpack\\src\\add.js":{"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction add(a, b) {\n  return a + b;\n}\n\nvar _default = add;\nexports[\"default\"] = _default;","deps":{}},"D:\\WorkSpace\\WEB-WorkSpace\\Vito-o\\font-end-basics\\demo\\webpack\\myWebpack\\src\\count.js":{"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\n\nfunction count(a, b) {\n  return a - b;\n}\n\nvar _default = count;\nexports[\"default\"] = _default;","deps":{}}});
    