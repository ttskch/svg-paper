'use strict'

import adjustText from './adjust-text'
import adjustTextarea from './adjust-textarea'

export default class SvgPaper {
  constructor(selector = 'svg') {
    this.selector = selector
    this.svg = document.querySelector(selector).outerHTML.replace(/[\r|\n]+/g, "\n")
    this.adjustTextQueries = []
  }

  replace(search, replacement) {
    if (search instanceof RegExp) {
      search = new RegExp(search.source, search.flags.replace(/g/g, '') + 'g')
    } else {
      search = search.replace(/[\r|\n]+/g, "\n")

      // @see https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions#escaping
      search = search.replace(/[.*+?^=!:${}()|[\]\/\\]/g, '\\$&')
      search = new RegExp(search, 'g')
    }

    // cast to string
    replacement = replacement ? replacement + '' : ''

    replacement = replacement.replace(/[\r|\n]+/g, "\n")

    this.svg = this.svg.replace(search, replacement)

    return this
  }

  adjustText(selector, textLength = null, textAnchor = 'start') {
    this.adjustTextQueries.push({selector, textLength, textAnchor})

    return this
  }

  adjustTextarea(selector, width, height, lineHeight = 1.2, paddingX = 0.5, paddingY = 0.5, nowrap = false) {
    const doc = new DOMParser().parseFromString(this.svg, 'text/html')
    const textElement = doc.querySelector(selector)
    const textSvg = textElement.outerHTML
    // SVGElement doesn't have innerText
    // @see https://developer.mozilla.org/en-US/docs/Web/API/SVGElement
    const textContent = textElement.innerHTML.replace(new RegExp('^<tspan[^>]*>((.|\\s)*)</tspan>$'), '$1')

    const adjustedTextSvg = adjustTextarea(textSvg, textContent, width, height, lineHeight, paddingX, paddingY, nowrap)

    this.replace(textSvg, adjustedTextSvg)

    return this
  }

  apply() {
    document.querySelector(this.selector).outerHTML = this.svg

    this.adjustTextQueries.forEach(query => {
      adjustText(query.selector, {
        textLength: query.textLength,
        'text-anchor': query.textAnchor,
      })
    })

    // initialize
    this.adjustTextQueries = []
  }
}
