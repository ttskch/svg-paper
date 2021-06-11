'use strict'

import adjustText from '../src/adjust-text'

test('only textLength will be set', () => {
  document.body.innerHTML = '<svg><text><tspan>test</tspan></text></svg>'

  jest.spyOn(document.querySelector('text'), 'clientWidth', 'get').mockImplementation(() => 10)
  adjustText('text', {textLength: 9, 'text-anchor': 'end'})

  expect(document.body.innerHTML).toEqual('<svg><text style="display: block;" textLength="9" lengthAdjust="spacingAndGlyphs"><tspan textLength="9" lengthAdjust="spacingAndGlyphs">test</tspan></text></svg>')
})

test('only text-anchor will be set', () => {
  document.body.innerHTML = '<svg><text transform="translate(10 20)"><tspan>test</tspan></text></svg>'

  jest.spyOn(document.querySelector('text'), 'clientWidth', 'get').mockImplementation(() => 10)
  adjustText('text', {textLength: 10, 'text-anchor': 'middle'})

  expect(document.body.innerHTML).toEqual('<svg><text transform="translate(15 20)" style="display: block;" text-anchor="middle"><tspan>test</tspan></text></svg>')
})

test('both textLength and text-anchor will be set', () => {
  document.body.innerHTML = '<svg><text transform="translate(10 20)"><tspan>test</tspan></text></svg>'

  jest.spyOn(document.querySelector('text'), 'clientWidth', 'get').mockImplementation(() => 10)
  adjustText('text', {textLength: 9, 'text-anchor': 'middle'})

  expect(document.body.innerHTML).toEqual('<svg><text transform="translate(14.5 20)" style="display: block;" textLength="9" lengthAdjust="spacingAndGlyphs" text-anchor="middle"><tspan textLength="9" lengthAdjust="spacingAndGlyphs">test</tspan></text></svg>')
})
