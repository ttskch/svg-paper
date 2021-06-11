'use strict'

import SvgPaper from '../src/svg-paper'

import mockAdjustText from '../src/adjust-text'
jest.mock('../src/adjust-text')

import mockAdjustTextarea from '../src/adjust-textarea'
jest.mock('../src/adjust-textarea', () => jest.fn(() => '<text><tspan>replaced</tspan></text>'))

test('replace', () => {
  // plain text
  document.body.innerHTML = '<svg><text>test</text></svg>'
  new SvgPaper()
    .replace('test', 'replaced')
    .apply()
  expect(document.body.innerHTML).toEqual('<svg><text>replaced</text></svg>')

  // regexp
  document.body.innerHTML = '<svg><image id="image" width="100" height="100" transform="translate(10 10)" xlink:href="data:image/png;base64,..."></image></svg>'
  new SvgPaper()
    .replace(new RegExp('<image id="image" (.+) xlink:href="([^"]+)"></image>'), '<image id="image" $1 xlink:href="/replaced/url"></image>')
    .apply()
  expect(document.body.innerHTML).toEqual('<svg><image id="image" width="100" height="100" transform="translate(10 10)" xlink:href="/replaced/url"></image></svg>')

  // with CRLF
  document.body.innerHTML = "<svg><text>test\r\ntest</text></svg>"
  new SvgPaper()
    .replace("test\ntest", "best\rbest")
    .apply()
  expect(document.body.innerHTML).toEqual("<svg><text>best\nbest</text></svg>")
})

test('adjustText', () => {
  new SvgPaper()
    .adjustText('selector1', 1, 'middle')
    .adjustText('selector2', 2, 'end')
    .apply()

  expect(mockAdjustText.mock.calls.length).toEqual(2)
  expect(mockAdjustText.mock.calls[0][0]).toEqual('selector1')
  expect(mockAdjustText.mock.calls[0][1]).toEqual({'text-anchor': 'middle', textLength: 1})
  expect(mockAdjustText.mock.calls[1][0]).toEqual('selector2')
  expect(mockAdjustText.mock.calls[1][1]).toEqual({'text-anchor': 'end', textLength: 2})
})

test('adjustTextarea', () => {
  document.body.innerHTML = '<svg><text><tspan>test</tspan></text></svg>'

  new SvgPaper()
    .adjustTextarea('text', 1, 2, 3, 0.1, 0.2, true)
    .apply()

  expect(mockAdjustTextarea.mock.calls.length).toEqual(1)
  expect(mockAdjustTextarea.mock.calls[0][0]).toEqual('<text><tspan>test</tspan></text>')
  expect(mockAdjustTextarea.mock.calls[0][1]).toEqual('test')
  expect(mockAdjustTextarea.mock.calls[0][2]).toEqual(1)
  expect(mockAdjustTextarea.mock.calls[0][3]).toEqual(2)
  expect(mockAdjustTextarea.mock.calls[0][4]).toEqual(3)
  expect(mockAdjustTextarea.mock.calls[0][5]).toEqual(0.1)
  expect(mockAdjustTextarea.mock.calls[0][6]).toEqual(0.2)
  expect(mockAdjustTextarea.mock.calls[0][7]).toEqual(true)

  expect(document.body.innerHTML).toEqual('<svg><text><tspan>replaced</tspan></text></svg>')
})
