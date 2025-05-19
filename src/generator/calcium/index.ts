import * as Blockly from 'blockly'

class CalciumGenerator extends Blockly.Generator {
  indent = 1

  constructor() {
    super('calcium')
  }

  shiftIndent(delta: number) {
    this.indent += delta
  }
}

export const calciumGenerator = new CalciumGenerator()

export const trimParens = (codeStr: string) => {
  let strWithoutParens = codeStr
  if (codeStr && codeStr[0] === '(') {
    strWithoutParens = codeStr.substring(1, codeStr.length - 1)
  }
  return strWithoutParens
}

export function trimLastComma(code: string): string {
  // remove the last comma in the code.
  if (code.endsWith(',')) {
    return code.substring(0, code.length - 1)
  }
  return code
}
