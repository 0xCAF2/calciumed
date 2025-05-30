import { calciumGenerator } from "."

calciumGenerator.forBlock['calcium_str'] = (block) => {
  let str = block.getField('STR')?.getText() || ''
  return [addDoubleQuote(str), 0]
}

function addDoubleQuote(s: string): string {
  let result = ''
  let i = 0
  while (i < s.length) {
    const char = s[i]
    if (char === '\\' && i === s.length - 1) {
      result += '\\\\\\\\'
      break
    }
    if (char === '\\' && s[i + 1] === '\\') {
      result += '\\\\\\\\'
      i += 2
      continue
    }
    if (char === '\\' && s[i + 1] === '"') {
      result += '\\\\\\"'
      i += 2
      continue
    }
    if (char === '\\') {
      result += '\\\\'
      i += 1
      continue
    }
    if (char === '"') {
      result += '\\\\\\"'
      i += 1
      continue
    }
    result += char
    i += 1
  }
  return `"${result}"`
}
