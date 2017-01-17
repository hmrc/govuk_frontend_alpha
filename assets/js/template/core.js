;(function () {
  'use strict'
  var root = this
  if (typeof root.GOVUK === 'undefined') { root.GOVUK = {} }

  // add cookie message
  if (root.GOVUK && root.GOVUK.addCookieMessage) {
    root.GOVUK.addCookieMessage()
  }

  // header navigation toggle
  if (document.querySelectorAll && document.addEventListener) {
    var els = document.querySelectorAll('.js-header-toggle')
    var i
    var _i
    for (i = 0, _i = els.length; i < _i; i++) {
      els[i].addEventListener('click', function (e) {
        e.preventDefault()
        var target = document.getElementById(this.getAttribute('href').substr(1))
        var targetClass = target.getAttribute('class') || ''
        var sourceClass = this.getAttribute('class') || ''

        if (targetClass.indexOf('js-visible') !== -1) {
          target.setAttribute('class', targetClass.replace(/(^|\s)js-visible(\s|$)/, ''))
        } else {
          target.setAttribute('class', targetClass + ' js-visible')
        }
        if (sourceClass.indexOf('js-hidden') !== -1) {
          this.setAttribute('class', sourceClass.replace(/(^|\s)js-hidden(\s|$)/, ''))
        } else {
          this.setAttribute('class', sourceClass + ' js-hidden')
        }
      })
    }
  }
}).call(this)
