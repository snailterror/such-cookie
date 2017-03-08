module.exports = {
    "dev": {
        "base": "../",
        "sync": "../public/",
        "jsFile" : "../src/js/app.js",
        "js": "../build/"
    },
    "prod": {
        "base": "../dist/",
        "js": "../dist/"
    },
    "doc": {
        "name" : "Doc name - Change it in /bin/gulp/configs/config.js",
        "dest" : "../doc/",
        "tsFiles" : ["../src/**/*.ts", "../src/**/*.tsx"],
        "readme" : "../readme.md"
    }
};
