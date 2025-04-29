import { calciumGenerator, removeParens } from "."

const self = calciumGenerator
calciumGenerator.forBlock["calcium_arithmetic"] = (block) => {
  const op = block.getFieldValue("OP")
  let left = self.valueToCode(block, "LEFT", 0) || '["var", "i"]'
  left = JSON.parse(removeParens(left))
  let right = self.valueToCode(block, "RIGHT", 0) || "1"
  right = JSON.parse(removeParens(right))
  const code = JSON.stringify([op, left, right])
  return [code, 0]
}
