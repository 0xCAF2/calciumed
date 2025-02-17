import * as Blockly from 'blockly'
// @ts-ignore
import { BlockDefinition } from 'blockly/core/blocks'
import { parseNumber } from '../util/parse-number'

export const calciumNumberName = 'calcium_number'

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
