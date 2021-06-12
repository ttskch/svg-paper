'use strict'

export default (selector, config) => {
  const $this = document.querySelector(selector)

  if (!$this) {
    return
  }

  // shrink text element to specified width
  if (!!config['textLength']) {
    // for firefox
    // @see https://developer.mozilla.org/ja/docs/Web/API/Element/clientWidth
    $this.style.display = 'block'

    if ($this.clientWidth > config.textLength) {
      $this.querySelector('tspan').setAttribute('textLength', config.textLength)
      $this.querySelector('tspan').setAttribute('lengthAdjust', 'spacingAndGlyphs')

      // for firefox
      // @see https://bugzilla.mozilla.org/show_bug.cgi?id=890692
      $this.setAttribute('textLength', config.textLength)
      $this.setAttribute('lengthAdjust', 'spacingAndGlyphs')
    }
  }

  // alignment
  if (!!config['text-anchor'] && config['text-anchor'] !== 'start') {
    const w = parseFloat(config['textLength'])
    let x = 0
    let y = 0
    if ($this.getAttribute('transform')) {
      x = parseFloat($this.getAttribute('transform').match(/translate\((\S+) .+\)/)[1])
      y = parseFloat($this.getAttribute('transform').match(/translate\(\S+ (.+)\)/)[1])
    }

    if (config['text-anchor'] === 'middle') {
      $this.setAttribute('transform', `translate(${x + (w / 2)} ${y})`)
    }

    if (config['text-anchor'] === 'end') {
      $this.setAttribute('transform', `translate(${x + w} ${y})`)
    }

    $this.setAttribute('text-anchor', config['text-anchor'])
  }
}
