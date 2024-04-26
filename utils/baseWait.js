'use strict'
const delayShort = 1100 // control global delays from one place; for no waits set here: delayShort = 0
const delayMedium = 5 * delayShort
const delayLong = 10 * delayShort
const delayVeryLong = 15 * delayShort

function _waitShort () {
    const start = Date.now()
    let now = start
    while (now - start < delayShort) {
        now = Date.now()
    }
};

function _waitMedium () {
    const start = Date.now()
    let now = start
    while (now - start < delayMedium) {
        now = Date.now()
    }
};

function _waitLong () {
    const start = Date.now()
    let now = start
    while (now - start < delayLong) {
        now = Date.now()
    }
};

function _waitVeryLong () {
    const start = Date.now()
    let now = start
    while (now - start < delayVeryLong) {
        now = Date.now()
    }
};

let _untilClickable
let _untilVisible
/* global protractor */
if (typeof protractor !== 'undefined') {
    const EC = protractor.ExpectedConditions

    _untilClickable = function (element, timeout = delayLong) {
        return browser.wait(EC.elementToBeClickable(element), timeout)
    }

    _untilVisible = function (element, timeout = delayLong) {
        return browser.wait(EC.visibilityOf(element), timeout)
    }
} else {
  /* assuming WebDriver.io */

    _untilClickable = function (element, timeout = delayLong) {
        return browser.waitUntil(() => element.isDisplayed(), { timeout })
    }

    _untilVisible = function (element, timeout = delayLong) {
        return browser.waitUntil(() => element.isDisplayed(), { timeout })
    }
}

module.exports = {
    short: _waitShort,
    medium: _waitMedium,
    long: _waitLong,
    veryLong: _waitVeryLong,
    untilClickable: _untilClickable,
    untilVisible: _untilVisible,

    delayShort,
    delayMedium,
    delayLong,
    delayVeryLong
}