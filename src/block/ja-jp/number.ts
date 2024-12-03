import * as Blockly from 'blockly'
// @ts-ignore
import { BlockDefinition } from 'blockly/core/blocks'

export const calciumNumberName = 'calcium_number'
export const pseudoNumberName = 'pseudo_number'

export const calciumNumberBlock: { [key: string]: BlockDefinition } = {
  [calciumNumberName]: {
    init() {
      this.appendDummyInput().appendField(
        new Blockly.FieldTextInput('0', function (newValue) {
          try {
            return parseNumber(newValue)
          } catch {
            return null
          }
        }),
        'NUM'
      )
      this.setInputsInline(true)
      this.setOutput(true, 'Number')
      this.setColour(120)
      this.setTooltip('数を表します')
    },
  },
}

export const pseudoNumberBlock: { [key: string]: BlockDefinition } = {
  [pseudoNumberName]: {
    init() {
      const dummyInput = this.appendDummyInput()
      dummyInput.appendField('数')
      dummyInput.appendField(
        new Blockly.FieldTextInput('10', function (newValue) {
          try {
            return parseNumber(newValue)
          } catch {
            return null
          }
        }),
        'NUM'
      )
      this.setInputsInline(true)
      this.setOutput(true, 'Number')
      this.setColour(0)
      this.setTooltip('数を表します')
    },
  },
}

function parseNumber(str: string): string {
  let resultStr = ''
  for (let i = 0; i < str.length; ++i) {
    resultStr += parseFullWidthNumber(str[i])
  }
  try {
    const num = parseFloat(resultStr)
    if (isNaN(num)) {
      throw new Error('cannot parse as float')
    } else {
      return num.toString()
    }
  } catch (_) {
    const num = parseInt(resultStr)
    if (isNaN(num)) {
      throw new Error('cannot parse as integer')
    } else {
      return num.toString()
    }
  }
}

function parseFullWidthNumber(char: string): string {
  switch (char) {
    case '１':
      return '1'
    case '２':
      return '2'
    case '３':
      return '3'
    case '４':
      return '4'
    case '５':
      return '5'
    case '６':
      return '6'
    case '７':
      return '7'
    case '８':
      return '8'
    case '９':
      return '9'
    case '０':
      return '0'
    default:
      return char
  }
}
