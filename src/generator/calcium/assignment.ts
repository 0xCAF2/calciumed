import { calciumGenerator, removeParens } from "."

const self = calciumGenerator
calciumGenerator.forBlock["calcium_assignment"] = (block) => {
  let ref = self.valueToCode(block, "REF", 0) || `["var", "i"]`
  ref = removeParens(ref)
  ref = JSON.parse(ref)

  let arg0 = self.valueToCode(block, "VALUE", 0) || "0"
  arg0 = removeParens(arg0)
  arg0 = JSON.parse(arg0)
  return JSON.stringify([self.indent, [], "=", ref, arg0]) + ","
}
