import { calciumGenerator } from "."

const self = calciumGenerator

calciumGenerator.forBlock['calcium_list'] = (block) => {
  const length = Reflect.get(block, 'itemCount_') as number
  if (length === 0) {
    return ['["list"]', 0]
  }
  const elements = new Array(length)
  for (let i = 0; i < length; ++i) {
    elements[i] = self.valueToCode(block, 'ITEM' + i, 0) || 'null'
  }
  return [`["list", ${elements.join(',')}]`, 0]
}
