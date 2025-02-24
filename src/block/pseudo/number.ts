import * as Blockly from 'blockly'
// @ts-ignore
import { BlockDefinition } from 'blockly/core/blocks'
import { parseNumber } from '../util/parse-number'

export const CALCIUM_PSEUDO_NUMBER_NAME = 'pseudo_number'

const pseudoNumberBlock: { [key: string]: BlockDefinition } = {
  [CALCIUM_PSEUDO_NUMBER_NAME]: {
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

Blockly.common.defineBlocks(pseudoNumberBlock)
