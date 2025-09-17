import * as Blockly from 'blockly'

class CalciumGenerator extends Blockly.Generator {
  indent = 1

  constructor() {
    super('calcium')
  }

  shiftIndent(delta: number) {
    this.indent += delta
  }

  scrub_(_block: Blockly.Block, code: string, _opt_thisOnly?: boolean): string {
    const nextBlock = _block.nextConnection && _block.nextConnection.targetBlock()
    const nextCode = _opt_thisOnly ? '' : this.blockToCode(nextBlock)
    if (nextBlock) {
      return code + '\n' + nextCode
    }
    return code
  }

  finish(code: string): string {
    const start = JSON.stringify([1, [], '#', '0.1.0'])
    const importRandom = JSON.stringify([1, [], 'import', 'random'])
    const end = JSON.stringify([1, [], 'end'])
    return `[${start},${importRandom},${code}${end}]`
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
