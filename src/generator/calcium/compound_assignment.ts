import { calciumGenerator, removeParens } from "."

const self = calciumGenerator

calciumGenerator.forBlock["calcium_compound_assignment"] = (block) => {
  let ref = self.valueToCode(block, "REF", 0) || '["var", "i"]'
  ref = JSON.parse(removeParens(ref))
  const op = block.getFieldValue("OP")
  let value = self.valueToCode(block, "VALUE", 0) || "1"
  value = JSON.parse(removeParens(value))
  return JSON.stringify([self.indent, [], op, ref, value]) + ","
}
