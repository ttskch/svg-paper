'use strict'

import splitStringByWidth from './utility/split-string-by-width'

export default (textSvg, textContent, width, height, lineHeight = 1.2, paddingX = 0.5, paddingY = 0.5, nowrap = false) => {
  if (!textSvg.match(new RegExp('<text [^>]*font-size="\\d+"[^>]*><tspan( [^>]*>|>)[^<>]*</tspan></text>'))) {
    console.error('Invalid svg string of text element', textSvg)
    return textSvg
  }

  const originalFontSize = parseInt(textSvg.match(/.+font-size="(\d+)".+/)[1])
  let fontSize = originalFontSize

  // find the right-size font-size
  const physicalLines = textContent.split("\n")
  let logicalLines = []
  while (true) {
    let maxRows = Math.floor((height - (2 * fontSize * paddingY)) / (fontSize * lineHeight))
    let maxColumns = Math.floor((width - (2 * fontSize * paddingX)) / fontSize) // doesn't care about proportional font

    if (nowrap) {
      logicalLines = physicalLines
    } else {
      logicalLines = []
      physicalLines.forEach(line => {
        logicalLines = logicalLines.concat(splitStringByWidth(line, maxColumns * 2)) // 2 single-byte characters can be placed in 1 column
      })
    }

    if (logicalLines.length > maxRows) {
      fontSize *= 0.95
    } else {
      break
    }
  }

  // raise y-coordinate up because y-coordinate of <text transform="translate(x y)"> is on lower base of text object
  const adjustY = fontSize - originalFontSize

  let adjustedTextSvg = textSvg
  adjustedTextSvg = adjustedTextSvg.replace(new RegExp('<tspan(.|\\s)+</text>'), '')
  adjustedTextSvg = adjustedTextSvg.replace(new RegExp('font-size="\\d+"'), `font-size="${fontSize}"`)
  adjustedTextSvg += '{tspan}</text>'

  let tspan = ''
  const x = fontSize * paddingX
  logicalLines.forEach((line, i) => {
    const y = adjustY + fontSize * (paddingY + (i * lineHeight))
    tspan += `<tspan x="${x}" y="${y}">${line}</tspan>`
  })

  adjustedTextSvg = adjustedTextSvg.replace('{tspan}', tspan)

  return adjustedTextSvg
}
