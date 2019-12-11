module.exports = {
    root: true,
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "mocha": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 6
    },
    "plugins": [
        "html",
        "vue"
    ],
    "rules": {
        "indent": [
            "warn",
            "tab"
        ],
        "no-var": [
            "error"
        ],
        "no-console": [
            "off"
        ],
        "no-unused-vars": [
            "off"
        ],
        "no-mixed-spaces-and-tabs": [
            "warn"
        ]
    }
};