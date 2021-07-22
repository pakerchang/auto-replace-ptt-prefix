// ==UserScript==
// @name   自動修改PTT網址 / Auto replace ptt url prefix
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  修改原生網址
// @author       You
// @match        *://www.ptt.cc/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var url = location.href;
    var newurl = url.replace("ptt","pttweb");

    window.location.href = newurl;
})();