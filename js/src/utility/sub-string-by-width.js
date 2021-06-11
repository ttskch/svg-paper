import stringWidth from 'string-width'

export default (string, start, width) => {
  let currentWidth = 0
  let subString = ''

  for (let i = start; ; i++) {
    const char = string.substr(i, 1)
    currentWidth += stringWidth(char)
    if (currentWidth <= width && i <= string.length) {
      subString += char
    }
    if (currentWidth >= width || i >= string.length) {
      return subString
    }
  }
}
