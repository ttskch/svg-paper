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

test('real world paper created with Adobe XD', () => {
  document.body.innerHTML = fs.readFileSync('js/tests/resources/real-world-paper-xd.svg', 'utf-8')

  const paper = new SvgPaper()

  paper
    .replace('%customerName%', 'Mr. John Smith')
    .replace('%caseName%', 'Case 1234')
    .replace('%deliverTo%', 'California headquotes')
    .replace('%deliveredBy%', '2021-12-31')
    .replace('%expiredAt%', '2021-06-30')
    .replace('%date%', '2021-06-01')
    .replace('%number%', 'EST-20210601-001')
    .replace('%address%', "1600 Amphitheatre Parkway\nMountain View, CA 94043\nUnited States")
    .adjustText('#_customerName_', 1230, 'middle')
    .adjustText(`#_caseName_`, 960)
    .adjustText(`#_deliverTo_`, 960)
    .adjustText(`#_deliveredBy_`, 960)
    .adjustText(`#_expiredAt_`, 960)
    .adjustText(`#_date_`, 960)
    .adjustText(`#_number_`, 960)
    .adjustTextarea(`#_address_`, 513, 136)
  let subtotal = 0
  for (const i of [...Array(26)].keys()) {
    subtotal += i * i * 10
    paper
      .replace(`%itemName[${i}]%`, 'Sample item')
      .replace(`%vendorName[${i}]%`, 'Sample vendor')
      .replace(`%modelCode[${i}]%`, `SAMPLE-ITEM-${i}`)
      .replace(`%quantity[${i}]%`, i)
      .replace(`%unitPrice[${i}]%`, (i * 10).toLocaleString())
      .replace(`%total[${i}]%`, (i * i * 10).toLocaleString())
      .adjustText(`#_itemName_${i}_`, 665)
      .adjustText(`#_vendorName_${i}_`, 200)
      .adjustText(`#_modelCode_${i}_`, 260)
      .adjustText(`#_quantity_${i}_`, 140, 'middle')
      .adjustText(`#_unitPrice_${i}_`, 185, 'end')
      .adjustText(`#_total_${i}_`, 215, 'end')
  }
  paper
    .replace('%subtotal%', subtotal.toLocaleString())
    .replace('%discount%', 100)
    .replace('%discountedSubtotal%', (subtotal - 100).toLocaleString())
    .replace('%tax%', parseInt((subtotal - 100) * 0.1).toLocaleString())
    .replace('%quoteTotal%', (subtotal - 100 + parseInt((subtotal - 100) * 0.1)).toLocaleString())
    .adjustText(`#_subtotal_`, 215, 'end')
    .adjustText(`#_discount_`, 215, 'end')
    .adjustText(`#_discountedSubtotal_`, 215, 'end')
    .adjustText(`#_tax_`, 215, 'end')
    .adjustText(`#_quoteTotal_`, 215, 'end')
    .replace('%totalAmount%', '$ ' + (subtotal - 100 + parseInt((subtotal - 100) * 0.1)).toLocaleString())
    .replace('%remark%', 'This is a remark. This is a remark. This is a remark. This is a remark. This is a remark. This is a remark. This is a remark. This is a remark. This is a remark. This is a remark. This is a remark. This is a remark. This is a remark.')
    .adjustTextarea('#_remark_', 1343, 235)
    .replace('%additionalComment%', 'This is an additional comment. This is an additional comment. This is an additional comment. This is an additional comment. This is an additional comment. This is an additional comment. This is an additional comment. This is an additional comment. This is an additional comment.')
    .adjustTextarea('#_additionalComment_', 1830, 287)
    .replace('font-family="IPAexGothic"', 'font-family="monospace"')

  paper.apply()

  // actually, Element.clientWidth returns always 0 in test.
  // so mock Element.clientWidth only for vendorName elements, which have overflowing contents, and re-apply adjustText() to document
  for (const i of [...Array(26)].keys()) {
    jest.spyOn(document.querySelector(`#_vendorName_${i}_`), 'clientWidth', 'get').mockImplementation(() => 424)
    paper.adjustText(`#_vendorName_${i}_`, 200)
  }
  paper.apply()

  fs.writeFileSync('js/tests/output/real-world-paper-xd.svg', document.body.innerHTML)
  fs.writeFileSync('js/tests/output/real-world-paper-xd.html', '<!DOCTYPE html><html><head><link rel="stylesheet" href="../../../dist/svg-paper.min.css"></head><body>' + document.body.innerHTML + '</body></html>')
})
