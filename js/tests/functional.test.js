'use strict'

import fs from 'fs'
import SvgPaper from '../src/svg-paper'

test('textarea with single-byte characters', () => {
  document.body.innerHTML = fs.readFileSync('js/tests/resources/fixtures-textarea.svg', 'utf-8')

  const paper = new SvgPaper()

  paper
    .replace('%text%', 'This is a long text.'.repeat(20))
    .adjustTextarea('#_text_', 1830, 130)
    .replace('font-family="IPAexGothic"', 'font-family="monospace"')
    .apply()

  expect(document.querySelectorAll('#_text_ tspan').length).toEqual(3)
  expect(document.querySelector('#_text_ tspan:nth-child(1)').outerHTML).toEqual('<tspan x="12.860624999999999" y="8.581874999999997">This is a long text.This is a long text.This is a long text.This is a long text.This is a long text.This is a long text.This is a long text.</tspan>')
  expect(document.querySelector('#_text_ tspan:nth-child(2)').outerHTML).toEqual('<tspan x="12.860624999999999" y="39.447374999999994">This is a long text.This is a long text.This is a long text.This is a long text.This is a long text.This is a long text.This is a long text.</tspan>')
  expect(document.querySelector('#_text_ tspan:nth-child(3)').outerHTML).toEqual('<tspan x="12.860624999999999" y="70.31287499999999">This is a long text.This is a long text.This is a long text.This is a long text.This is a long text.This is a long text.</tspan>')

  fs.writeFileSync('js/tests/output/functional-test1.svg', document.body.innerHTML)
})

test('textarea with multi-byte characters', () => {
  document.body.innerHTML = fs.readFileSync('js/tests/resources/fixtures-textarea.svg', 'utf-8')

  const paper = new SvgPaper()

  paper
    .replace('%text%', 'これはテキストです。'.repeat(20))
    .adjustTextarea('#_text_', 1830, 130)
    .replace('font-family="IPAexGothic"', 'font-family="monospace"')
    .apply()

  expect(document.querySelectorAll('#_text_ tspan').length).toEqual(3)
  expect(document.querySelector('#_text_ tspan:nth-child(1)').outerHTML).toEqual('<tspan x="12.860624999999999" y="8.581874999999997">これはテキストです。これはテキストです。これはテキストです。これはテキストです。これはテキストです。これはテキストです。これはテキストです。</tspan>')
  expect(document.querySelector('#_text_ tspan:nth-child(2)').outerHTML).toEqual('<tspan x="12.860624999999999" y="39.447374999999994">これはテキストです。これはテキストです。これはテキストです。これはテキストです。これはテキストです。これはテキストです。これはテキストです。</tspan>')
  expect(document.querySelector('#_text_ tspan:nth-child(3)').outerHTML).toEqual('<tspan x="12.860624999999999" y="70.31287499999999">これはテキストです。これはテキストです。これはテキストです。これはテキストです。これはテキストです。これはテキストです。</tspan>')

  fs.writeFileSync('js/tests/output/functional-test2.svg', document.body.innerHTML)
})

test('textarea with single-byte and multi-byte characters also with line-breaks', () => {
  document.body.innerHTML = fs.readFileSync('js/tests/resources/fixtures-textarea.svg', 'utf-8')

  const paper = new SvgPaper()

  paper
    .replace('%text%', 'これはテキストです。'.repeat(10) + "\n" + 'これはテキストです。'.repeat(10))
    .adjustTextarea('#_text_', 1830, 130)
    .replace('font-family="IPAexGothic"', 'font-family="monospace"')
    .apply()

  expect(document.querySelectorAll('#_text_ tspan').length).toEqual(4)
  expect(document.querySelector('#_text_ tspan:nth-child(1)').outerHTML).toEqual('<tspan x="11.026378359374998" y="3.0791350781249953">これはテキストです。これはテキストです。これはテキストです。これはテキストです。これはテキストです。これはテキストです。これはテキストです。これはテキストです。こ</tspan>')
  expect(document.querySelector('#_text_ tspan:nth-child(2)').outerHTML).toEqual('<tspan x="11.026378359374998" y="29.54244314062499">れはテキストです。これはテキストです。</tspan>')
  expect(document.querySelector('#_text_ tspan:nth-child(3)').outerHTML).toEqual('<tspan x="11.026378359374998" y="56.00575120312499">これはテキストです。これはテキストです。これはテキストです。これはテキストです。これはテキストです。これはテキストです。これはテキストです。これはテキストです。こ</tspan>')
  expect(document.querySelector('#_text_ tspan:nth-child(4)').outerHTML).toEqual('<tspan x="11.026378359374998" y="82.46905926562496">れはテキストです。これはテキストです。</tspan>')

  fs.writeFileSync('js/tests/output/functional-test3.svg', document.body.innerHTML)
})
