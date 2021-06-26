'use strict'

import fs from 'fs'
import SvgPaper from '../src/svg-paper'

test('real world paper created with Adobe XD', () => {
  doTest(
    'js/tests/resources/real-world-paper-xd.svg',
    'js/tests/output/real-world-paper-xd.svg',
    'js/tests/output/real-world-paper-xd.html',
    'js/tests/resources/expected-real-world-paper-xd.svg',
  )
})

test('real world paper created with Figma', () => {
  doTest(
    'js/tests/resources/real-world-paper-figma-tweaked.svg',
    'js/tests/output/real-world-paper-figma.svg',
    'js/tests/output/real-world-paper-figma.html',
    'js/tests/resources/expected-real-world-paper-figma.svg',
  )
})

function doTest(pathToOriginalSvg, pathToOutputSvg, pathToOutputHtml, pathToExpectedOutputSvg) {
  document.body.innerHTML = fs.readFileSync(pathToOriginalSvg, 'utf-8')

  const paper = new SvgPaper('svg')

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
    .replace('font-family="IPAexGothic"', 'font-family="sans-serif"')
    .replace('font-family="Roboto"', 'font-family="sans-serif"')

  paper.apply()

  // actually, Element.clientWidth returns always 0 in test.
  // so mock Element.clientWidth only for vendorName elements, which have overflowing contents, and re-apply adjustText() to document
  for (const i of [...Array(26)].keys()) {
    jest.spyOn(document.querySelector(`#_vendorName_${i}_`), 'clientWidth', 'get').mockImplementation(() => 424)
    paper.adjustText(`#_vendorName_${i}_`, 200)
  }
  paper.apply()

  fs.writeFileSync(pathToOutputSvg, document.body.innerHTML)
  fs.writeFileSync(pathToOutputHtml, '<!DOCTYPE html><html><head><link rel="stylesheet" href="../../../dist/svg-paper.min.css"><style>@page{size:A4}</style></head><body class="A4">' + document.body.innerHTML + '</body></html>')

  expect(fs.readFileSync(pathToExpectedOutputSvg, 'utf-8')).toEqual(document.body.innerHTML)
}
