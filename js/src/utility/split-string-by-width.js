import subStringByWidth from './sub-string-by-width'

export default (string, width) => {
  let splits = []

  while (true) {
    let split = subStringByWidth(string, 0, width)
    splits.push(split)
    string = string.replace(split, '')
    if (!string) {
      break
    }
  }

  return splits
}
