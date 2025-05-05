import { calciumGenerator } from "."
import { parseNumber } from "../../util/parse-number"

calciumGenerator.forBlock["calcium_number"] = (block) => {
  const numStr = block.getFieldValue("NUM") || "0"
  return [parseNumber(numStr), 0]
}
