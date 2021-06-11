'use strict'

export default (selector, config) => {
  const $this = document.querySelector(selector)

  if (!$this) {
    return
  }

  // shrink text element to specified width
  if ('textLength' in config && config['textLength']) {
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
  if ('text-anchor' in config && config['text-anchor'] && config['text-anchor'] !== 'start') {
    // effective only when textLength is specified and text element has transform="translate(x y)"
    const match = $this.getAttribute('transform')?.match(/translate\(([^ ]+) .+\)/)
    if (!config['textLength'] || !match) {
      return
    }

    const w = parseFloat(config['textLength'])
    const x = parseFloat(match[1])

    if (config['text-anchor'] === 'middle') {
      const newTransform = $this.getAttribute('transform').replace(/translate\([^ ]+ (.+)\)/, `translate(${x + (w / 2)} $1)`)
      $this.setAttribute('transform', newTransform)
    }

    if (config['text-anchor'] === 'end') {
      const newTransform = $this.getAttribute('transform').replace(/translate\([^ ]+ (.+)\)/, `translate(${x + w} $1)`)
      $this.setAttribute('transform', newTransform)
    }

    $this.setAttribute('text-anchor', config['text-anchor'])
  }
}
