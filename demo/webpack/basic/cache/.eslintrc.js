module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "airbnb-base",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "import/extensions": "off", // 取消对文件扩展名的验证
        "import/no-extraneous-dependencies": [2, { "devDependencies": true }],
        "no-console": 0,
        "no-unused-vars": 0,
    }
};
