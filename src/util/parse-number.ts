export function parseNumber(str: string): string {
  let resultStr = ""
  for (let i = 0; i < str.length; ++i) {
    resultStr += parseFullWidthNumber(str[i])
  }
  return parseBasedOnPrefix(resultStr)
}

function parseBasedOnPrefix(str: string): string {
  if (str.endsWith("j") || str.endsWith("J")) {
    return parseComplexNumber(str)
  } else if (str.startsWith("0x") || str.startsWith("0X")) {
    return parseWithRadix(str, 16, "hexadecimal")
  } else if (str.startsWith("0b") || str.startsWith("0B")) {
    return str.substring(0, 2) + parseWithRadix(str.substring(2), 2, "binary")
  } else if (str.startsWith("0") && !str.includes(".")) {
    return parseWithRadix(str, 8, "octal")
  } else if (str.includes(".") || str.includes("e") || str.includes("E")) {
    return parseFloatOrThrow(str, "float")
  } else {
    return parseWithRadix(str, 10, "decimal")
  }
}

function parseWithRadix(str: string, radix: number, type: string): string {
  const num = parseInt(str, radix)
  if (isNaN(num)) {
    throw new Error(`cannot parse as ${type}`)
  }
  return type === "decimal" ? num.toString() : str
}

function parseFloatOrThrow(str: string, type: string): string {
  const num = parseFloat(str)
  if (isNaN(num)) {
    throw new Error(`cannot parse as ${type}`)
  }
  return str
}

function parseComplexNumber(str: string): string {
  const realPart = str.slice(0, -1) // Remove the trailing "j" or "J"
  const num = parseFloat(realPart)
  if (isNaN(num)) {
    throw new Error("cannot parse as complex number")
  }
  return `${num}${str.slice(-1)}` // Append the "j" or "J" back
}

function parseFullWidthNumber(char: string): string {
  switch (char) {
    case "１":
      return "1"
    case "２":
      return "2"
    case "３":
      return "3"
    case "４":
      return "4"
    case "５":
      return "5"
    case "６":
      return "6"
    case "７":
      return "7"
    case "８":
      return "8"
    case "９":
      return "9"
    case "０":
      return "0"
    default:
      return char
  }
}
