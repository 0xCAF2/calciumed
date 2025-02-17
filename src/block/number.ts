import * as Blockly from 'blockly'
// @ts-ignore
import { BlockDefinition } from 'blockly/core/blocks'
import { parseNumber } from './util/parse-number'

export const pseudoNumberName = 'pseudo_number'

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
