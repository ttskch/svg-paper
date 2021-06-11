'use strict'

import subStringByWidth from '../../src/utility/sub-string-by-width'

test('test', () => {
  expect(subStringByWidth('abcdeあいうえおfghij', 0, 10)).toEqual('abcdeあい')
  expect(subStringByWidth('abcdeあいうえおfghij', 3, 10)).toEqual('deあいうえ')
  expect(subStringByWidth('abcdeあいうえおfghij', 8, 100)).toEqual('えおfghij')
})
