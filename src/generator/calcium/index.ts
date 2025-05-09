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

export const removeParens = (codeStr: string) => {
  let strWithoutParens = codeStr
  if (codeStr && codeStr[0] === '(') {
    strWithoutParens = codeStr.substring(1, codeStr.length - 1)
  }
  return strWithoutParens
}
