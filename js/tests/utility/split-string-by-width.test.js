'use strict'

import splitStringByWidth from '../../src/utility/split-string-by-width'

test('test', () => {
  expect(splitStringByWidth('abcdeあいうえおfghij', 10)).toEqual(['abcdeあい', 'うえおfghi', 'j'])
})
