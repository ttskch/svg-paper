'use strict'

import fixTextTransform from '../../src/utility/fix-text-transform'

test('test', () => {
  expect(fixTextTransform('<text><tspan x="100" y="100">test</tspan></text>'))
    .toEqual('<text transform="translate(100 100)"><tspan x="0" y="0">test</tspan></text>')

  expect(fixTextTransform('<text transform="translate(100 100)"><tspan x="0" y="0">test</tspan></text>'))
    .toEqual('<text transform="translate(100 100)"><tspan x="0" y="0">test</tspan></text>')

  expect(fixTextTransform('<text transform="translate(100 100)"><tspan x="100" y="100">test</tspan></text>'))
    .toEqual('<text transform="translate(200 200)"><tspan x="0" y="0">test</tspan></text>')

  expect(fixTextTransform('<text><tspan>test</tspan></text>'))
    .toEqual('<text transform="translate(0 0)"><tspan x="0" y="0">test</tspan></text>')

  expect(fixTextTransform('<text><tspan y="200" x="100">test</tspan></text>'))
    .toEqual('<text transform="translate(100 200)"><tspan y="0" x="0">test</tspan></text>')

  // with line-breaks without x,y
  expect(fixTextTransform(`<text data-name="test\ntest" transform="translate(100 200)" font-size="25"><tspan>test\ntest</tspan></text>`))
    .toEqual(`<text data-name="test\ntest" transform="translate(100 200)" font-size="25"><tspan x="0" y="0">test\ntest</tspan></text>`)

  // with line-breaks without transform and x,y
  expect(fixTextTransform(`<text data-name="test\ntest"><tspan>test\ntest</tspan></text>`))
    .toEqual(`<text data-name="test\ntest" transform="translate(0 0)"><tspan x="0" y="0">test\ntest</tspan></text>`)
})
