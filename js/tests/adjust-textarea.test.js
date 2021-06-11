'use strict'

import adjustTextarea from '../src/adjust-textarea'

test('with only single-byte characters without shrinking', () => {
  const textSvg = '<text font-size="10"><tspan>test</tspan></text>'
  const textContent = "abcdefghijklmnopqrstuvwxyz\nabcdefghijklmnopqrstuvwxyz"
  const width = 100
  const height = 40
  const expectedAdjustedTextSvg = '<text font-size="10">' +
    '<tspan x="0" y="0">abcdefghijklmnopqrst</tspan>' +
    '<tspan x="0" y="10">uvwxyz</tspan>' +
    '<tspan x="0" y="20">abcdefghijklmnopqrst</tspan>' +
    '<tspan x="0" y="30">uvwxyz</tspan>' +
    '</text>'

  const adjustedTextSvg = adjustTextarea(textSvg, textContent, width, height, 1, 0, 0, false)

  expect(adjustedTextSvg).toEqual(expectedAdjustedTextSvg)
})

test('with only single-byte characters with shrinking', () => {
  const textSvg = '<text font-size="10"><tspan>test</tspan></text>'
  const textContent = "abcdefghijklmnopqrstuvwxyz\nabcdefghijklmnopqrstuvwxyz"
  const width = 50
  const height = 20
  const expectedAdjustedTextSvg = '<text font-size="4.876749791155296">' +
    '<tspan x="0" y="-5.123250208844704">abcdefghijklmnopqrst</tspan>' +
    '<tspan x="0" y="-0.24650041768940767">uvwxyz</tspan>' +
    '<tspan x="0" y="4.6302493734658885">abcdefghijklmnopqrst</tspan>' +
    '<tspan x="0" y="9.506999164621185">uvwxyz</tspan>' +
    '</text>'

  const adjustedTextSvg = adjustTextarea(textSvg, textContent, width, height, 1, 0, 0, false)

  expect(adjustedTextSvg).toEqual(expectedAdjustedTextSvg)
})

test('with only multi-byte characters without shrinking', () => {
  const textSvg = '<text font-size="10"><tspan>test</tspan></text>'
  const textContent = "あいうえおかきくけこ\nさしすせそたちつてと"
  const width = 100
  const height = 20
  const expectedAdjustedTextSvg = '<text font-size="10">' +
    '<tspan x="0" y="0">あいうえおかきくけこ</tspan>' +
    '<tspan x="0" y="10">さしすせそたちつてと</tspan>' +
    '</text>'

  const adjustedTextSvg = adjustTextarea(textSvg, textContent, width, height, 1, 0, 0, false)

  expect(adjustedTextSvg).toEqual(expectedAdjustedTextSvg)
})

test('with only multi-byte characters with shrinking', () => {
  const textSvg = '<text font-size="10"><tspan>test</tspan></text>'
  const textContent = "あいうえおかきくけこ\nさしすせそたちつてと"
  const width = 30
  const height = 20
  const expectedAdjustedTextSvg = '<text font-size="4.876749791155296">' +
    '<tspan x="0" y="-5.123250208844704">あいうえおか</tspan>' +
    '<tspan x="0" y="-0.24650041768940767">きくけこ</tspan>' +
    '<tspan x="0" y="4.6302493734658885">さしすせそた</tspan>' +
    '<tspan x="0" y="9.506999164621185">ちつてと</tspan>' +
    '</text>'

  const adjustedTextSvg = adjustTextarea(textSvg, textContent, width, height, 1, 0, 0, false)

  expect(adjustedTextSvg).toEqual(expectedAdjustedTextSvg)
})
